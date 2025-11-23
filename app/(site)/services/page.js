"use client";
import styles from "./services.module.css";
import Button from "@/components/ui/Button";
import { Plane, Car, Map, Info } from "lucide-react";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setServicesList(data);
        } else {
          // Fallback to static content if DB is empty
          // In a real app we might just show empty state or loading
          // But for this demo we want to keep the static content visible initially
          setServicesList([
             { title: "Airport Transfers", description: "Dedicated pick-up and drop-off services...", icon: "Plane" },
             { title: "Local & Outstation", description: "Hourly, daily or long-term rentals...", icon: "Car" },
             { title: "Sightseeing Tours", description: "Curated itineraries for popular spots...", icon: "Map" },
             { title: "Travel Assistance", description: "Information on local events...", icon: "Info" }
          ]);
        }
      } catch (e) {
         // Fallback
      }
    }
    fetchServices();
  }, []);

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive travel solutions tailored to your needs.</p>
        </div>
      </section>

      <section className="section container">
        <div className={styles.grid}>
          {servicesList.length > 0 ? servicesList.map((s, i) => (
             <div key={i} className={styles.service}>
                <div className={styles.icon}>
                   {/* Simple icon mapping or fallback */}
                   {s.icon === "Plane" && <Plane size={48} />}
                   {s.icon === "Car" && <Car size={48} />}
                   {s.icon === "Map" && <Map size={48} />}
                   {s.icon === "Info" && <Info size={48} />}
                   {!["Plane", "Car", "Map", "Info"].includes(s.icon) && <Car size={48} />}
                </div>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
             </div>
          )) : (
            // Fallback static content if state is empty (shouldn't happen with above logic but safe)
            <>
              <div className={styles.service}>
                <div className={styles.icon}><Plane size={48} /></div>
                <h2>Airport Transfers</h2>
                <p>We provide dedicated pick-up and drop-off services...</p>
              </div>
              {/* ... other static services ... */}
            </>
          )}
        </div>

        <div className={styles.cta}>
          <h3>Ready to book a service?</h3>
          <Button href="/contact" variant="primary">Plan a Service</Button>
        </div>
      </section>
    </main>
  );
}
