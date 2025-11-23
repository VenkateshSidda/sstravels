import styles from "./faq.module.css";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How are the charges calculated for local rentals?",
    a: "Local rentals are charged based on hourly packages (e.g., 8 Hrs / 80 Kms). Extra hours and kilometers are charged additionally as per the rate card."
  },
  {
    q: "What is included in the per-km rate for outstation?",
    a: "The per-km rate covers the fuel and vehicle maintenance. Driver allowance (bata), tolls, parking, and state permit taxes are extra."
  },
  {
    q: "Do you provide 24/7 service?",
    a: "Yes, our services are available 24/7. However, for late-night pickups (between 11 PM and 5 AM), we recommend booking in advance."
  },
  {
    q: "How far in advance should I book a cab?",
    a: "For local trips, booking 2-4 hours in advance is usually sufficient. For outstation trips and tour packages, we suggest booking at least 24 hours ahead."
  },
  {
    q: "Can I customize my tour itinerary?",
    a: "Absolutely! We offer flexible tour packages. You can discuss your preferences with our travel desk, and we will create a custom itinerary for you."
  },
  {
    q: "Is there a cancellation fee?",
    a: "Cancellations made 24 hours before the trip are free of charge. Cancellations within 24 hours may attract a nominal fee depending on the vehicle type."
  }
];

export default function FaqPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services.</p>
        </div>
      </section>

      <section className="section container">
        <div className={styles.faqList}>
          {faqs.map((item, i) => (
            <details key={i} className={styles.item}>
              <summary className={styles.question}>
                {item.q}
                <Plus className={styles.icon} />
              </summary>
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
