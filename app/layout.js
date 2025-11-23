import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SS Travels - Reliable Cabs & Tours in Visakhapatnam",
  description: "Book reliable cabs, airport transfers, and tour packages in Visakhapatnam with SS Travels. Professional drivers and luxury fleet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
