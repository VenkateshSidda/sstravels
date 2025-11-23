import Link from "next/link";
import Button from "../ui/Button";
import styles from "./Packages.module.css";

const packages = [
  {
    title: "Araku Valley (1 Day)",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Nature/Hills
    desc: "Experience the beauty of Araku Valley, Borra Caves, and coffee plantations in a single day."
  },
  {
    title: "Araku Valley (2 Days)",
    price: "₹9,000",
    image: "https://images.unsplash.com/photo-1596324073912-15487f123673?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Resort/Hills
    desc: "Relaxed trip covering all major viewpoints, museums, and waterfalls with an overnight stay."
  },
  {
    title: "Annavaram Temple",
    price: "₹6,000",
    image: "https://images.unsplash.com/photo-1623941008388-2b9d44573193?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Temple
    desc: "Divine darshan at Sri Veera Venkata Satyanarayana Swamy Temple in Annavaram."
  },
  {
    title: "Simhachalam Temple",
    price: "₹2,300",
    image: "https://images.unsplash.com/photo-1605628121554-330452601c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Temple architecture
    desc: "Visit the famous Varaha Lakshmi Narasimha temple on the Simhachalam hill range."
  }
];

export default function Packages() {
  return (
    <section className={`section ${styles.packages}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Popular Tour Packages</h2>
          <p>Explore the best of Visakhapatnam and surroundings</p>
        </div>
        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.image} style={{backgroundImage: `url(${pkg.image})`}}></div>
              <div className={styles.content}>
                <h3>{pkg.title}</h3>
                <p className={styles.price}>Starts from <span>{pkg.price}</span></p>
                <p className={styles.desc}>{pkg.desc}</p>
                <Button href="/packages" variant="outline" className={styles.btn}>View Details</Button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.centerBtn}>
          <Button href="/packages" variant="primary">View All Packages</Button>
        </div>
      </div>
    </section>
  );
}
