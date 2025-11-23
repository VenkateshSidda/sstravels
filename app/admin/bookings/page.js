"use client";
import { useEffect, useState } from "react";
import styles from "./bookings.module.css";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      if (Array.isArray(data)) {
        setBookings(data);
      }
    } catch (e) {
      console.error("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className={styles.title}>Bookings</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Customer</th>
              <th>Route</th>
              <th>Vehicle</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="5" className={styles.empty}>No bookings found</td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <div className={styles.date}>{booking.date}</div>
                    <div className={styles.time}>{booking.time}</div>
                  </td>
                  <td>
                    <div className={styles.name}>{booking.name}</div>
                    <div className={styles.phone}>{booking.phone}</div>
                  </td>
                  <td>
                    <div className={styles.route}>{booking.pickup} → {booking.drop}</div>
                    <div className={styles.type}>{booking.type}</div>
                  </td>
                  <td>{booking.vehicle}</td>
                  <td>
                    <span className={`${styles.status} ${styles[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
