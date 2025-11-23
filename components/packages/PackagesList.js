"use client";
import { useState, useEffect } from "react";
import styles from "@/app/(site)/packages/packages.module.css";
import Button from "@/components/ui/Button";

const allPackages = [
  {
    title: "Araku Package – 1 Day",
    description: "Visakhapatnam to Araku and back. Sightseeing of Borra Caves, Coffee Museum, Tribal Museum, and Padmapuram Gardens.",
    prices: { sedan: "₹6,500", suv: "₹9,500", luxury: "₹15,000" },
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Araku Package – 2 Days",
    description: "Extended stay in Araku. Includes all 1-day spots plus Chaparai Waterfalls and Galikonda Viewpoint. Overnight stay accommodation not included in transport price.",
    prices: { sedan: "₹9,000", suv: "₹12,500", luxury: "₹18,000" },
    image: "https://images.unsplash.com/photo-1596324073912-15487f123673?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Annavaram – One Day Trip",
    description: "Pilgrimage to Sri Veera Venkata Satyanarayana Swamy Temple. Includes pickup, darshan waiting time, and drop back.",
    prices: { sedan: "₹6,000", suv: "₹9,000", luxury: "₹13,000" },
    image: "https://images.unsplash.com/photo-1623941008388-2b9d44573193?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Simhachalam Temple Visit",
    description: "Half-day trip to the famous Narasimha Swamy temple. Ideal for quick darshan.",
    prices: { sedan: "₹2,300", suv: "₹3,500", luxury: "₹4,200" },
    image: "https://images.unsplash.com/photo-1605628121554-330452601c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Srikurmam, Arasavalli & Ramanarayanam",
    description: "Complete temple circuit covering the Sun God temple (Arasavalli) and Kurmanatha Swamy temple (Srikurmam).",
    prices: { sedan: "₹7,000", suv: "₹9,500", luxury: "₹13,000" },
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
];

export default function PackagesList() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const res = await fetch("/api/packages");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPackages(data);
        } else {
          setPackages(allPackages);
        }
      } catch (e) {
        setPackages(allPackages);
      }
    }
    fetchPackages();
  }, []);

  return (
    <div className={styles.grid}>
      {packages.map((pkg, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.image} style={{backgroundImage: `url(${pkg.image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80'})`}}></div>
          <div className={styles.content}>
            <h2>{pkg.title}</h2>
            <p className={styles.desc}>{pkg.description || pkg.desc}</p>
            <div className={styles.pricing}>
              <div className={styles.priceRow}>
                <span>Sedan:</span> <strong>{pkg.priceSedan || pkg.prices?.sedan}</strong>
              </div>
              <div className={styles.priceRow}>
                <span>SUV:</span> <strong>{pkg.priceSuv || pkg.prices?.suv}</strong>
              </div>
              <div className={styles.priceRow}>
                <span>Luxury:</span> <strong>{pkg.priceLuxury || pkg.prices?.luxury}</strong>
              </div>
            </div>
            <Button href="/contact" variant="primary" className={styles.btn}>Book This Package</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
