"use client";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    bookings: 0,
    packages: 0,
    fleet: 0
  });

  useEffect(() => {
    // In a real app, fetch these stats from an API
    // For now, we'll just mock or fetch counts if we had endpoints for counts
    async function fetchStats() {
      try {
        const [bookingsRes, packagesRes, fleetRes] = await Promise.all([
          fetch("/api/bookings"),
          fetch("/api/packages"),
          fetch("/api/fleet")
        ]);
        
        const bookings = await bookingsRes.json();
        const packages = await packagesRes.json();
        const fleet = await fleetRes.json();

        setStats({
          bookings: Array.isArray(bookings) ? bookings.length : 0,
          packages: Array.isArray(packages) ? packages.length : 0,
          fleet: Array.isArray(fleet) ? fleet.length : 0
        });
      } catch (e) {
        console.error("Failed to fetch stats");
      }
    }
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Dashboard Overview</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Total Bookings</h3>
          <p className={styles.number}>{stats.bookings}</p>
        </div>
        <div className={styles.card}>
          <h3>Active Packages</h3>
          <p className={styles.number}>{stats.packages}</p>
        </div>
        <div className={styles.card}>
          <h3>Fleet Size</h3>
          <p className={styles.number}>{stats.fleet}</p>
        </div>
      </div>
    </div>
  );
}
