import styles from "./WhyChooseUs.module.css";
import { ShieldCheck, UserCheck, Star, Clock } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Safe & Secure",
    desc: "Well-maintained fleet with safety features and GPS tracking."
  },
  {
    icon: <UserCheck size={32} />,
    title: "Expert Drivers",
    desc: "Professional, uniformed drivers with extensive local knowledge."
  },
  {
    icon: <Star size={32} />,
    title: "10+ Years Experience",
    desc: "Trusted by thousands of customers and corporate clients."
  },
  {
    icon: <Clock size={32} />,
    title: "Punctual Service",
    desc: "On-time pickups and drops, every single time."
  }
];

export default function WhyChooseUs() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Why Choose SS Travels?</h2>
            <p className={styles.lead}>
              We don't just provide a car; we provide a seamless travel experience.
            </p>
            <ul className={styles.list}>
              {features.map((f, i) => (
                <li key={i} className={styles.item}>
                  <div className={styles.iconWrapper}>{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageWrapper}>
             <div className={styles.placeholderImage}>
                {/* In a real app, use next/image here */}
                <span>Premium Fleet Image</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
