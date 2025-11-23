import styles from "./corporate.module.css";
import Button from "@/components/ui/Button";
import { Building2, Handshake, Receipt, UserCheck } from "lucide-react";

export default function CorporatePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>Corporate Tie-ups</h1>
          <p>Reliable travel desk solutions for hotels and corporate clients.</p>
        </div>
      </section>

      <section className="section container">
        <div className={styles.intro}>
          <h2>Partner with SS Travels</h2>
          <p>
            We provide comprehensive travel desk services, ensuring your guests and employees 
            travel in comfort and safety. Our professional team handles everything from 
            booking to billing.
          </p>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <Building2 size={40} className={styles.icon} />
            <h3>Dedicated Travel Desk</h3>
            <p>On-site support for hotels to manage guest transport needs seamlessly.</p>
          </div>
          <div className={styles.benefit}>
            <UserCheck size={40} className={styles.icon} />
            <h3>Professional Service</h3>
            <p>Uniformed drivers and well-maintained vehicles representing your brand.</p>
          </div>
          <div className={styles.benefit}>
            <Receipt size={40} className={styles.icon} />
            <h3>Transparent Billing</h3>
            <p>GST compliant invoices and detailed reporting for corporate accounts.</p>
          </div>
          <div className={styles.benefit}>
            <Handshake size={40} className={styles.icon} />
            <h3>Special Rates</h3>
            <p>Exclusive pricing and offers for our long-term partners.</p>
          </div>
        </div>

        <div className={styles.clients}>
          <h3>Our Esteemed Partners</h3>
          <ul className={styles.clientList}>
            <li>Home Cabs India (2018–2020)</li>
            <li>Taski Cabs (2022–2024)</li>
            <li>Keys Select, Vizag by Lemon Tree Hotels (2020 – Present)</li>
            <li>The Beacon Hotel, Fern Group (2025 – Present)</li>
            <li>Hotel Lemon Park (2025 – Present)</li>
            <li>Hotel Merlot Leisures (2025 – Present)</li>
          </ul>
        </div>

        <div className={styles.cta}>
          <h3>Interested in a partnership?</h3>
          <Button href="/contact" variant="primary">Enquire Now</Button>
        </div>
      </section>
    </main>
  );
}
