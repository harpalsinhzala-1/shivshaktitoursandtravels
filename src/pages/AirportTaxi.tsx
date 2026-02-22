import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Phone, Plane, Clock, CheckCircle, MessageCircle, Shield, Zap } from "lucide-react";
import airportImg from "@/assets/airport-transfer.jpg";
import heroImg from "@/assets/mercedes-benz-mayback-s-class-front-angle-low-view-582368.avif";
import Swift from "@/assets/dzireBlack.avif";
import HondaCity from "@/assets/hondacity.jpg";
import innova from "@/assets/Innova-Crysta.webp";


const features = [
  { icon: Plane, title: "Flight Tracking", desc: "We monitor your flight status to adjust pickup times accordingly" },
  { icon: Clock, title: "Early Morning Pickup", desc: "Available for early morning and late night flights — 24/7 service" },
  { icon: Zap, title: "Instant Confirmation", desc: "Get immediate booking confirmation via WhatsApp or call" },
  { icon: Shield, title: "Fixed Pricing", desc: "No surge pricing, no hidden charges — transparent rates always" },
  { icon: CheckCircle, title: "Meet & Greet", desc: "Our driver will be waiting at the arrival gate with a name board" },
];

const carOptions = [
  { name: "Sedan (Swift Dzire / Etios)", capacity: "3 Passengers", carImg : Swift},
  { name: "Premium Sedan (Honda City / Ciaz)", capacity: "3 Passengers", carImg :HondaCity},
  { name: "Luxury Sedan (Mercedes / BMW)", capacity: "3 Passengers", carImg : heroImg },
  { name: "SUV (Innova / Innova Crysta)", capacity: "6 Passengers", carImg : innova },
];

const AirportTaxi = () => {
  return (
    <Layout>
      <title>Airport Taxi Ahmedabad | Airport Pickup Drop Service | Shiv Shakti Travels</title>
      <meta name="description" content="Reliable airport taxi service in Ahmedabad. Flight tracking, meet & greet, early morning pickup. Fixed prices, no surge. Book now!" />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={airportImg} alt="Airport taxi service Ahmedabad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient-gold">Airport Taxi Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold font-accent"
          >
            Ahmedabad Airport Pickup & Drop — Always On Time
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <SectionHeading title="Why Our Airport Service" subtitle="Stress-free airport transfers with premium comfort" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-sm font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Car Options */}
      <section className="section-padding bg-secondary">
        <SectionHeading title="Airport Transfer Cabs" subtitle="Choose the perfect vehicle for your airport transfer" />
        <div className="container mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {carOptions.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="imgDiv">
                <img src={car.carImg} alt="Airport taxi service Ahmedabad" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-heading text-lg font-semibold my-2">{car.name}</h4>
              <p className="text-muted-foreground text-sm mb-1">{car.capacity}</p>
              {/* <p className="text-primary font-bold text-lg">{car.price}</p> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient-gold">Book Airport Transfer</span>
        </h2>
        <p className="text-muted-foreground mb-8">Available 24/7 — Book now for instant confirmation</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/917096013200?text=Hi%2C%20I%20need%20airport%20pickup" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> Book on WhatsApp
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

export default AirportTaxi;
