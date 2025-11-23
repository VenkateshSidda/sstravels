import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Packages from "@/components/home/Packages";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";

export const metadata = {
  title: "SS Travels - Best Cab Services & Tour Packages in Vizag",
  description: "Book reliable cabs for local, outstation, and airport transfers in Visakhapatnam. Explore Araku and temple tour packages with SS Travels.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Packages />
      <Testimonials />
      <Cta />
    </main>
  );
}
