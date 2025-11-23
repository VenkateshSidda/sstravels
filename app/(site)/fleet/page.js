"use client";
import styles from "./fleet.module.css";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";

const rateCard = [
  { type: "Local Rental (8hr/80km)", sedan: "₹3,200", suv: "₹4,400", luxury: "₹12,000" },
  { type: "Local Rental (10hr/100km)", sedan: "₹4,000", suv: "₹5,500", luxury: "₹15,000" },
  { type: "Outstation (Min 350km/12hr)", sedan: "₹17/km", suv: "₹23/km", luxury: "₹45/km" },
  { type: "Airport Pickup/Drop", sedan: "₹740", suv: "₹1,800", luxury: "₹3,000" },
  { type: "Railway Station Transfer", sedan: "₹900", suv: "₹1,800", luxury: "₹2,500" },
  { type: "Araku Package (1 Day)", sedan: "₹6,500", suv: "₹9,500", luxury: "₹15,000" },
  { type: "Araku Package (2 Days)", sedan: "₹9,000", suv: "₹12,500", luxury: "₹18,000" },
  { type: "Annavaram (1 Day)", sedan: "₹6,000", suv: "₹9,000", luxury: "₹13,000" },
  { type: "Simhachalam Temple", sedan: "₹2,300", suv: "₹3,500", luxury: "₹4,200" },
  { type: "Srikurmam & Arasavalli", sedan: "₹7,000", suv: "₹9,500", luxury: "₹13,000" },
];

export default function FleetPage() {
  const [fleet, setFleet] = useState([]);

  useEffect(() => {
    async function fetchFleet() {
      try {
        const res = await fetch("/api/fleet");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setFleet(data);
        } else {
          setFleet(rateCard);
        }
      } catch (e) {
        setFleet(rateCard);
      }
    }
    fetchFleet();
  }, []);

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>Fleet & Rate Card</h1>
          <p>Transparent pricing for all our vehicle categories.</p>
        </div>
      </section>

      <section className="section container">
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Service / Duty Type</th>
                <th>Sedan (Dzire/Etios)</th>
                <th>SUV (Innova/Ertiga)</th>
                <th>Luxury (Fortuner/Audi)</th>
              </tr>
            </thead>
            <tbody>
              {fleet.map((row, i) => (
                <tr key={i}>
                  <td className={styles.serviceType}>{row.type || row.serviceType}</td>
                  <td>{row.sedan || row.sedanPrice}</td>
                  <td>{row.suv || row.suvPrice}</td>
                  <td>{row.luxury || row.luxuryPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.notes}>
          <h4>Important Notes:</h4>
          <ul>
            <li>Extra Kms: Sedan ₹17/km, SUV ₹23/km</li>
            <li>Extra Hours: Sedan ₹250/hr, SUV ₹400/hr</li>
            <li>Tolls, Parking & Permit charges are extra as per actuals.</li>
            <li>Driver bata is included in outstation packages unless specified otherwise.</li>
          </ul>
        </div>

        <div className={styles.cta}>
          <Button href="/contact" variant="primary">Book Now</Button>
        </div>
      </section>
    </main>
  );
}
