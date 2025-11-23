"use client";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import styles from "./content.module.css";

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState("packages");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchItems();
  }, [activeTab]);

  async function fetchItems() {
    setLoading(true);
    try {
      const res = await fetch(`/api/${activeTab}`);
      const data = await res.json();
      if (Array.isArray(data)) setItems(data);
      else setItems([]);
    } catch (e) {
      console.error("Failed to fetch items");
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${activeTab}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({});
        fetchItems();
        alert("Item added successfully!");
      } else {
        alert("Failed to add item");
      }
    } catch (e) {
      console.error("Failed to submit");
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Content Management</h1>
      
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === "packages" ? styles.active : ""}`}
          onClick={() => setActiveTab("packages")}
        >
          Packages
        </button>
        <button 
          className={`${styles.tab} ${activeTab === "fleet" ? styles.active : ""}`}
          onClick={() => setActiveTab("fleet")}
        >
          Fleet
        </button>
        <button 
          className={`${styles.tab} ${activeTab === "services" ? styles.active : ""}`}
          onClick={() => setActiveTab("services")}
        >
          Services
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <h3>Add New {activeTab.slice(0, -1)}</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            {activeTab === "packages" && (
              <>
                <input name="title" placeholder="Package Title" onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description" onChange={handleInputChange} required />
                <input name="priceSedan" placeholder="Price (Sedan)" onChange={handleInputChange} required />
                <input name="priceSuv" placeholder="Price (SUV)" onChange={handleInputChange} required />
                <input name="priceLuxury" placeholder="Price (Luxury)" onChange={handleInputChange} required />
                <input name="image" placeholder="Image URL" onChange={handleInputChange} />
              </>
            )}
            {activeTab === "fleet" && (
              <>
                <input name="serviceType" placeholder="Service Type (e.g. Local 8hr)" onChange={handleInputChange} required />
                <input name="sedanPrice" placeholder="Sedan Price" onChange={handleInputChange} required />
                <input name="suvPrice" placeholder="SUV Price" onChange={handleInputChange} required />
                <input name="luxuryPrice" placeholder="Luxury Price" onChange={handleInputChange} required />
              </>
            )}
            {activeTab === "services" && (
              <>
                <input name="title" placeholder="Service Title" onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description" onChange={handleInputChange} required />
                <input name="icon" placeholder="Icon Name (e.g. Plane)" onChange={handleInputChange} required />
              </>
            )}
            <Button type="submit" variant="primary">Add Item</Button>
          </form>
        </div>

        <div className={styles.listSection}>
          <h3>Existing Items</h3>
          {loading ? <p>Loading...</p> : (
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <strong>{item.title || item.serviceType}</strong>
                  {item.description && <p>{item.description.substring(0, 50)}...</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
