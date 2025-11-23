"use client";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calendar, Package, Car, Settings, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import styles from "./layout.module.css";

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.logo}>SS Admin</div>
          <nav className={styles.nav}>
            <NavLink href="/admin/dashboard" icon={<LayoutDashboard size={20} />}>Overview</NavLink>
            <NavLink href="/admin/bookings" icon={<Calendar size={20} />}>Bookings</NavLink>
            <NavLink href="/admin/content" icon={<Package size={20} />}>Content</NavLink>
          </nav>
          <button onClick={() => signOut({ callbackUrl: "/admin" })} className={styles.logout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </aside>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}

function NavLink({ href, icon, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className={`${styles.link} ${isActive ? styles.active : ""}`}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}
