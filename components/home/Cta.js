import Button from "../ui/Button";
import styles from "./Cta.module.css";
import { Phone } from "lucide-react";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2>Need a cab in Vizag right now?</h2>
          <p>Fast, reliable, and safe. We are just a call away.</p>
          <div className={styles.actions}>
            <Button href="tel:+917799144454" variant="secondary" className={styles.btn}>
              <Phone size={20} style={{marginRight: '0.5rem'}} />
              Call +91 77991 44454
            </Button>
            <Button href="/contact" variant="outline" className={styles.outlineBtn}>
              Book Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
