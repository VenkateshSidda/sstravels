import Link from "next/link";
import styles from "./Footer.module.css";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.column}>
          <h3 className={styles.heading}>SS TRAVELS</h3>
          <p className={styles.text}>
            Reliable cabs, airport transfers, and curated tour packages in Visakhapatnam. 
            Your trusted travel partner for over 10 years.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subheading}>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/packages">Tour Packages</Link></li>
            <li><Link href="/contact">Contact & Booking</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subheading}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} className={styles.icon} />
              <span>D.No:39-7-56, Bank Street, Muralinagar, Visakhapatnam – 530007</span>
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <div>
                <a href="tel:+917799144454">+91 77991 44454</a><br/>
                <a href="tel:+917207676736">+91 72076 76736</a>
              </div>
            </li>
            <li>
              <Mail size={18} className={styles.icon} />
              <a href="mailto:vizagsstravels@gmail.com">vizagsstravels@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SS Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
