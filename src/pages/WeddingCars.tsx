import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Car, Info, MessageCircle } from "lucide-react";
import weddingImg from "@/assets/corporate-car.jpg";
import heroImg from "@/assets/hero-wedding-car.jpg";
import heroImg2 from "@/assets/airport-transfer.jpg";
import heroImg3 from "@/assets/BMW 5.webp";
import heroImg4  from "@/assets/Defender.webp";
import heroImg5 from "@/assets/Range-Rover-Sport-1.avif";
import heroImg6 from "@/assets/2017-Jaguar-XF-Review.jpg";
import heroImg7 from "@/assets/Thar_Earth_Edition.avif";
import heroImg8 from "@/assets/toyota-fortuner-front-angle-low-view-609840.avif";
import heroImg9 from "@/assets/toyota-innova-crysta-front-left-side-exterior.webp";
import heroImg10 from "@/assets/used-convertible-cars-in-india.jpg";
import vintage from "@/assets/pfa-classic-white-vintage-car-pictures-on-rent.jpeg";
import bus from "@/assets/volvo-9600-big@2x.jpg";
import heli from "@/assets/helicopter.jpg";

const cars = [
  { name: "Mercedes-Benz S-Class", imgPath : heroImg, type: "Ultra Luxury Sedan", price: "On Request", features: ["Chauffeur Driven", "AC & Music System", "300 KM/Day Limit"] },
  { name: "BMW 7 Series", imgPath : heroImg2, type: "Premium Luxury Sedan", price: "On Request", features: ["Chauffeur Driven", "Premium Interior", "300 KM/Day Limit"] },
  { name: "BMW 5 Series", imgPath : heroImg3, type: "Premium Luxury Sedan", price: "On Request", features: ["Chauffeur Driven", "Premium Interior", "300 KM/Day Limit"] },
  { name: "Defender", imgPath : heroImg4, type: "Premium Luxury SUV", price: "On Request", features: ["Chauffeur Driven", "Premium Interior", "300 KM/Day Limit"] },
  { name: "Range Rover", imgPath : heroImg5, type: "Premium Luxury SUV", price: "On Request", features: ["Chauffeur Driven", "Premium Interior", "300 KM/Day Limit"] },
  { name: "Audi A6", type: "Executive Sedan", imgPath : weddingImg, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] },
  { name: "Jaguar", type: "Executive Sedan", imgPath : heroImg6, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] },
  { name: "Thar", type: "SUV", imgPath : heroImg7, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] },
  { name: "Fortuner", type: "Executive SUV", imgPath : heroImg8, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] },
  { name: "Crysta", type: "Executive SUV", imgPath : heroImg9, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] },
  { name: "Convertible", type: "Executive hatchback", imgPath : heroImg10, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] },
  { name: "Vintage", type: "Wedding", imgPath : vintage, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] },
  { name: "Bus", type: "Executive Lounge", imgPath : bus, price: "On Request", features: ["Chauffeur Driven", "Leather Seats", "300 KM/Day Limit"] }
];

const rules = [
  "Extra decoration charges will apply",
  "Per day KM limit: 300 KM",
  "Extra KM charges: varies on car",
  "Extra hour charges: ₹1000 per hour",
  "Fuel, driver allowance & toll charges included (for wedding cars only)",
  "Advance booking required (minimum 1 days)"
];

const WeddingCars = () => {
  return (
    <Layout>
      <title>Wedding Car Rental Ahmedabad | Luxury Cars for Wedding | Shiv Shakti Travels</title>
      <meta name="description" content="Book luxury wedding cars in Ahmedabad. Mercedes, BMW, Audi with decoration. Professional chauffeurs, on-time service. Book now!" />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Luxury wedding car rental Ahmedabad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient-gold">Luxury Wedding Cars</span>
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
        <SectionHeading title="Our Wedding Fleet" subtitle="Choose from our premium collection of luxury sedans" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={car.imgPath} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{car.type}</p>
                <h3 className="font-heading text-xl font-bold mb-3">{car.name}</h3>
                <ul className="space-y-2 mb-6">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <p className="text-primary font-heading font-bold text-lg mb-4">{car.price}</p>
                <Button variant="gold" className="w-full" asChild>
                  <a href="https://wa.me/917096013200?text=Hi%2C%20I%20want%20to%20book%20a%20wedding%20car" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" /> Book on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decoration Rules */}
      <section className="section-padding bg-secondary">
        <SectionHeading title="Booking Details" subtitle="Important information about wedding car bookings" />
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <ul className="space-y-4">
              {rules.map((rule, i) => (
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
