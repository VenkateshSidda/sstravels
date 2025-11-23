import styles from "./Testimonials.module.css";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Tourist from Hyderabad",
    text: "Excellent service! The driver was very polite and knowledgeable about Araku. The car was clean and comfortable."
  },
  {
    name: "Priya Sharma",
    role: "Corporate Client",
    text: "We use SS Travels for our company guests. Always punctual and professional. Highly recommended for business travel."
  },
  {
    name: "David Wilson",
    role: "International Traveler",
    text: "Smooth airport transfer and great sightseeing tour. The driver spoke good English and was very helpful."
  }
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>What Our Guests Say</h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <div key={i} className={styles.card}>
              <Quote size={32} className={styles.icon} />
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.author}>
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
