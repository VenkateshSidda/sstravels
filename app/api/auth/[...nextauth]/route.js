import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        if (!username || !password) {
          return null;
        }

        // Fallback for initial setup if DB is empty or connection fails
        // This allows the user to login immediately after setup without seeding if they want
        if (username === "admin" && password === "admin123") {
            try {
                const admin = await prisma.admin.findUnique({ where: { username } });
                if (!admin) {
                    // Create default admin if not exists
                    const hashedPassword = await bcrypt.hash("admin123", 10);
                    const newAdmin = await prisma.admin.create({
                        data: { username: "admin", password: hashedPassword }
                    });
                    return { id: newAdmin.id, name: newAdmin.username, email: "admin@sstravels.com" };
                }
            } catch (e) {
                console.error("DB Error or Admin check failed", e);
                // If DB fails, we can't really authenticate securely, so return null
                return null; 
            }
        }

        const admin = await prisma.admin.findUnique({
          where: { username }
        });

        if (!admin) {
          return null;
        }

        const isValid = await bcrypt.compare(password, admin.password);

        if (!isValid) {
          return null;
        }

        return { id: admin.id, name: admin.username, email: "admin@sstravels.com" };
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "supersecretkey", // In production, use env var
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
