import Button from "../ui/Button";
import BookingForm from "../booking/BookingForm";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Reliable Cabs & Tours in <span className={styles.highlight}>Visakhapatnam</span>
          </h1>
          <p className={styles.subhead}>
            Airport transfers, local city rides, outstation trips & curated tour packages 
            with professional drivers and well-maintained vehicles.
          </p>
          <div className={styles.ctaGroup}>
            <Button href="/contact" variant="primary">Book a Cab</Button>
            <Button href="/fleet" variant="secondary">View Rate Card</Button>
          </div>
        </div>
        
        <div className={styles.formWrapper}>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
