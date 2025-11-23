import styles from "./contact.module.css";
import BookingForm from "@/components/booking/BookingForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>Contact & Booking</h1>
          <p>Get in touch with us for bookings and enquiries.</p>
        </div>
      </section>

      <section className="section container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2>Get in Touch</h2>
            <p className={styles.lead}>
              Whether you need a cab right now or want to plan a tour, we are here to help.
            </p>
            
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} />
              <div>
                <h4>Visit Us</h4>
                <p>D.No:39-7-56, Bank Street, Muralinagar,<br/>Visakhapatnam – 530007, Andhra Pradesh.</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <div>
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+917799144454">+91 77991 44454</a><br/>
                  <a href="tel:+917207676736">+91 72076 76736</a>
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <div>
                <h4>Email Us</h4>
                <p><a href="mailto:vizagsstravels@gmail.com">vizagsstravels@gmail.com</a></p>
              </div>
            </div>

            <div className={styles.map}>
              <div className={styles.mapPlaceholder}>
                 {/* In real app, embed Google Maps iframe here */}
                 <span>Google Map Location</span>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <BookingForm className={styles.form} />
          </div>
        </div>
      </section>
    </main>
  );
}
