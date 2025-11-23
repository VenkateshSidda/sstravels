"use client";
import { useState } from "react";
import Button from "../ui/Button";
import styles from "./BookingForm.module.css";

export default function BookingForm({ className = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "sedan",
    type: "local"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        alert("Thank you! We will contact you shortly.");
        setFormData({
          name: "", phone: "", pickup: "", drop: "", 
          date: "", time: "", vehicle: "sedan", type: "local"
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Booking failed", error);
      alert("Error submitting form.");
    }
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Book Your Ride</h3>
      
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Name</label>
          <input type="text" name="name" required onChange={handleChange} placeholder="Your Name" />
        </div>
        <div className={styles.field}>
          <label>Mobile Number</label>
          <input type="tel" name="phone" required onChange={handleChange} placeholder="10-digit number" />
        </div>
        <div className={styles.field}>
          <label>Pickup Location</label>
          <input type="text" name="pickup" required onChange={handleChange} placeholder="Enter pickup" />
        </div>
        <div className={styles.field}>
          <label>Drop Location</label>
          <input type="text" name="drop" required onChange={handleChange} placeholder="Enter drop" />
        </div>
        <div className={styles.field}>
          <label>Date</label>
          <input type="date" name="date" required onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label>Time</label>
          <input type="time" name="time" required onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label>Vehicle Type</label>
          <select name="vehicle" onChange={handleChange}>
            <option value="sedan">Sedan (Dzire/Etios)</option>
            <option value="suv">SUV (Innova/Ertiga)</option>
            <option value="luxury">Luxury (Fortuner/Audi)</option>
          </select>
        </div>
        <div className={styles.field}>
          <label>Trip Type</label>
          <select name="type" onChange={handleChange}>
            <option value="local">Local City Ride</option>
            <option value="outstation">Outstation</option>
            <option value="airport">Airport Transfer</option>
            <option value="package">Tour Package</option>
          </select>
        </div>
      </div>

      <Button type="submit" variant="primary" className={styles.submitBtn}>Book Now</Button>
    </form>
  );
}
