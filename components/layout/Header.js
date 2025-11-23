"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import styles from "./Header.module.css";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          SS TRAVELS
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ""}`}>
          <Link href="/" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/services" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/packages" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Packages</Link>
          <Link href="/contact" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className={styles.mobileCta}>
             <Button href="/contact" variant="primary">Book a Cab</Button>
          </div>
        </nav>

        <div className={styles.actions}>
          <a href="tel:+917799144454" className={styles.phone}>
            <Phone size={20} />
            <span>+91 77991 44454</span>
          </a>
          <div className={styles.desktopCta}>
            <Button href="/contact" variant="primary">Book a Cab</Button>
          </div>
          <button 
            className={styles.menuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
