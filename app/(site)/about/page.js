import styles from "./about.module.css";

export default function About() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>About SS Travels</h1>
          <p>Your trusted travel partner in Visakhapatnam for over a decade.</p>
        </div>
      </section>

      <section className="section container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Our Story</h2>
            <p>
              Established more than 10 years ago, SS Travels has grown from a small local operator 
              to one of Visakhapatnam's most trusted travel agencies. We specialize in providing 
              reliable cab services, airport transfers, and curated tour packages.
            </p>
            <p>
              Our success is built on a foundation of punctuality, safety, and guest-centric hospitality. 
              Whether you are a corporate traveler, a family on vacation, or a local resident, 
              we ensure your journey is smooth and comfortable.
            </p>
            
            <h3>Why We Are Different</h3>
            <ul className={styles.list}>
              <li>Experienced and professional team</li>
              <li>Well-maintained fleet of vehicles</li>
              <li>Strong network of local partners and hotel associations</li>
              <li>Commitment to customer satisfaction</li>
              <li>24/7 availability</li>
            </ul>
          </div>
          <div className={styles.image}>
             <div className={styles.placeholder}>
                {/* Placeholder for About Image */}
                <span>10+ Years of Excellence</span>
             </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>To provide safe, reliable, and affordable travel solutions that exceed customer expectations.</p>
          </div>
          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>To be the leading travel partner in Andhra Pradesh, known for excellence in hospitality and transport.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
