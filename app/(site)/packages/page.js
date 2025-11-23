import styles from "./packages.module.css";
import PackagesList from "@/components/packages/PackagesList";

export const metadata = {
  title: "Tour Packages - Araku, Annavaram & Simhachalam | SS Travels",
  description: "Explore our curated tour packages for Araku Valley, Annavaram, and Simhachalam. Affordable rates and comfortable vehicles.",
};

export default function PackagesPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <h1>Tour Packages</h1>
          <p>Discover the beauty of Andhra Pradesh with our curated tours.</p>
        </div>
      </section>

      <section className="section container">
        <PackagesList />
      </section>
    </main>
  );
}
