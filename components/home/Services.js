import styles from "./Services.module.css";
import { Plane, Car, Map, Clock } from "lucide-react";

const services = [
  {
    icon: <Plane size={40} />,
    title: "Airport Transfers",
    desc: "Reliable pickup and drop services with real-time flight tracking."
  },
  {
    icon: <Car size={40} />,
    title: "Local & Outstation",
    desc: "Flexible hourly rentals and outstation packages for your needs."
  },
  {
    icon: <Map size={40} />,
    title: "Sightseeing Tours",
    desc: "Curated tour packages for Araku, Simhachalam, and more."
  },
  {
    icon: <Clock size={40} />,
    title: "24/7 Support",
    desc: "Round-the-clock travel desk assistance for peace of mind."
  }
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Our Services</h2>
          <p>Comprehensive travel solutions for every journey</p>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
