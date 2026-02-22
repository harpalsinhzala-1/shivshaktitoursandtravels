import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-wedding-car.jpg";
import weddingImg from "@/assets/wedding-car-decorated.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import corporateImg from "@/assets/corporate-car.jpg";
import tempoImg from "@/assets/van-1-2-5.webp";
import heroImg3 from "@/assets/BMW 5.webp";
import heroImg4  from "@/assets/Defender.webp";
import heroImg5 from "@/assets/Range-Rover-Sport-1.avif";
import heroImg6 from "@/assets/2017-Jaguar-XF-Review.jpg";
import heroImg7 from "@/assets/Thar_Earth_Edition.avif";
import heroImg8 from "@/assets/toyota-fortuner-front-angle-low-view-609840.avif";
import heroImg9 from "@/assets/toyota-innova-crysta-front-left-side-exterior.webp";
import heroImg10 from "@/assets/used-convertible-cars-in-india.jpg";
import heroImg11 from "@/assets/pfa-classic-white-vintage-car-pictures-on-rent.jpeg";
import heroImg12 from "@/assets/volvo-9600-big@2x.jpg";

const galleryItems = [
  { src: heroImg, title: "Wedding Mercedes S-Class", category: "Wedding" },
  { src: weddingImg, title: "Decorated Wedding Car", category: "Wedding" },
  { src: airportImg, title: "Airport Transfer BMW", category: "Airport" },
  { src: corporateImg, title: "Corporate Audi A6", category: "Corporate" },
  { src: tempoImg, title: "Tempo Traveller Urbania", category: "Group Travel" },
  { src: heroImg3, title: "BMW", category: "Trip" },
  { src: heroImg4, title: "Defender", category: "Off-Roading" },
  { src: heroImg5, title: "Range Rover", category: "Wedding" },
  { src: heroImg6, title: "Jaguar", category: "Wedding" },
  { src: heroImg7, title: "Thar", category: "Off-Roading" },
  { src: heroImg8, title: "Fortuner", category: "Wedding" },
  { src: heroImg9, title: "Crysta", category: "Wedding" },
  { src: heroImg10, title: "Convertible", category: "Wedding" },
  { src: heroImg11, title: "Vintage", category: "Wedding" },
  { src: heroImg12, title: "Bus", category: "Lounge" },
];

const Gallery = () => {
  return (
    <Layout>
      <title>Gallery | Luxury Cars Photos | Shiv Shakti Tours & Travels Ahmedabad</title>
      <meta name="description" content="View our gallery of luxury wedding cars, airport transfer vehicles, and decorated cars. Shiv Shakti Tours & Travels Ahmedabad." />

      <section className="section-padding bg-background min-h-screen">
        <SectionHeading title="Our Gallery" subtitle="Browse our collection of premium luxury vehicles" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{item.category}</span>
                <p className="text-sm font-heading font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
