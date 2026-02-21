import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Car, Info, MessageCircle } from "lucide-react";
import weddingImg from "@/assets/corporate-car.jpg";
import heroImg from "@/assets/hero-wedding-car.jpg";
import heroImg2 from "@/assets/airport-transfer.jpg";
import heroImg3 from "@/assets/BMW 5.webp";
import heroImg4 from "@/assets/Defender.webp";
import heroImg5 from "@/assets/Range-Rover-Sport-1.avif";
import heroImg6 from "@/assets/2017-Jaguar-XF-Review.jpg";
import heroImg7 from "@/assets/Thar_Earth_Edition.avif";
import heroImg8 from "@/assets/toyota-fortuner-front-angle-low-view-609840.avif";
import heroImg9 from "@/assets/toyota-innova-crysta-front-left-side-exterior.webp";
import heroImg10 from "@/assets/used-convertible-cars-in-india.jpg";
import vintage from "@/assets/pfa-classic-white-vintage-car-pictures-on-rent.jpeg";
import bus from "@/assets/volvo-9600-big@2x.jpg";
import heli from "@/assets/wedding-helicopter-service.jpg";
import heli2 from "@/assets/HeliWed.jpg";



const rules = [
  "Minimum 100 x 100 feet clear space",
  "No electric wires / trees nearby",
  "Dust-free ground",
  "Proper crowd control arrangement",
];
const rules2 = [
  "Local Police NOC",
  "District Administration Permission",
  "ATC Clearance",
  "Land Owner NOC (if private land)",
];
const rules3 = [
  "Wedding Entry Package: ₹3.5 lakh onwards",
  "Charges depend on location, date & availability",
  "50% Advance at booking",
  "Land Owner NOC (if private land)",
];
const rules4 = [
  "Service is subject to weather conditions",
  "Advance booking recommended (20–30 days prior)",
  "Refund & cancellation policy as per aviation norms",
];

const WeddingCars = () => {
  return (
    <Layout>
      <title>Wedding Car Rental Ahmedabad | Luxury Cars for Wedding | Shiv Shakti Travels</title>
      <meta name="description" content="Book luxury wedding cars in Ahmedabad. Mercedes, BMW, Audi with decoration. Professional chauffeurs, on-time service. Book now!" />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={heli} alt="Luxury wedding car rental Ahmedabad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient-gold">Book a Helicopter</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-accent"
          >
            Make your grand entry unforgettable
          </motion.p>
        </div>
      </section>

      {/* Car Options */}
      <section className="section-padding bg-background">
        <SectionHeading title="Helicopter Rental for Weddings & Special Events" subtitle="Make your big day unforgettable." />
        <div className="container mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img src={heli2} alt="Luxury wedding car rental Ahmedabad" className="inset-0 w-full h-full object-cover" />
          </div>
          <div className="heliDesc mt-5">
            <p className="text-lg">
              We provide luxury helicopter services for weddings, engagements, grand entries, pre-wedding shoots, corporate events, temple visits, political rallies, and VIP transfers. Whether you want a royal groom entry or a dramatic bride arrival, we turn your special moment into a lifetime memory.
            </p>
            <p className="mt-3 text-lg font-medium">What We Offer:</p>
            <ul className="list-disc ml-4">
              <li>Grand wedding entry by helicopter</li>
              <li>Bride & groom aerial arrival</li>
              <li>Flower shower from helicopter</li>
              <li>Corporate & special event bookings</li>
              <li>Temple and destination wedding transfers</li>
            </ul>

            <p className="mt-3 text-lg font-medium">Available Across:</p>
            <p>

              We provide services across major cities and destination wedding locations. Custom packages are available based on event type, location, and flying time.
            </p>

          </div>
        </div>
      </section>

      {/* Decoration Rules */}
      <section className="section-padding bg-secondary">
        <SectionHeading title="Booking Details" subtitle="Important information about wedding helicopter bookings" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <ul className="space-y-4"> <p className="mb-3">📍 Landing Requirements</p>
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <ul className="space-y-4"><p className="mb-3">📄 Required Documents & Permissions </p>
              {rules2.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-3">Our team guides you through complete process.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <ul className="space-y-4"><p className="mb-3"> 💰 Pricing (Approximate) </p>
              {rules3.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
           <p className="mt-3"> GST Extra as applicable</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <ul className="space-y-4"><p className="mb-3"> ⚠ Important Notes </p>
              {rules4.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient-gold">Ready to Book?</span>
        </h2>
        <p className="text-muted-foreground mb-8">Contact us now for the best wedding car experience in Ahmedabad</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/917096013200?text=Hi%2C%20I%20want%20to%20book%20a%20wedding%20car" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> WhatsApp Booking
            </a>
          </Button>
          <Button variant="gold-outline" size="xl" asChild>
            <a href="tel:+917096013200">
              <Phone className="w-5 h-5" /> Call +91 70960 13200
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WeddingCars;
