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
import Himalay1 from "@/assets/himalaya11.webp";
import Himalay2 from "@/assets/Solo.jpg";



const rules = [
  "Book your tour online, via phone, or email.",
  "Booking is confirmed after payment and confirmation receipt.",
];
const rules2 = [
  "Advance payment is required to secure your booking.",
  "Full payment must be completed before the tour date.",
  "Refunds follow our cancellation policy.",
];
const rules3 = [
  "Cancel 7+ days before tour: 50% refund.",
  "Cancel <7 days before tour: No refund.",
  "Tours may be rescheduled or canceled due to safety or unforeseen circumstances.",
];
const rules4 = [
  "Changes in dates or itinerary must be requested 5 days prior.",
  "Custom requests (honeymoon setups, meals, special activities) should be communicated in advance.",
];
const rules5 = [
  "Guests must follow safety instructions and local regulations.",
  "Shiv Shakti Tours & Travels is not responsible for accidents due to negligence. Travel insurance is recommended.",
];
const rules6 = [
  "Package details (transport, accommodation, sightseeing) are included.",
  "Personal expenses, optional activities, and tips are not included.",
];

const WeddingCars = () => {
  return (
    <Layout>
      <title>Wedding Car Rental Ahmedabad | Luxury Cars for Wedding | Shiv Shakti Travels</title>
      <meta name="description" content="Book luxury wedding cars in Ahmedabad. Mercedes, BMW, Audi with decoration. Professional chauffeurs, on-time service. Book now!" />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={Himalay2} alt="Luxury wedding car rental Ahmedabad" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient-gold">Customise Tour Package</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold font-accent"
          >
            Turning Destinations into Beautiful Memories
          </motion.p>
        </div>
      </section>

      {/* Car Options */}
      <section className="section-padding bg-background">
        <SectionHeading title="About Our Customized Tours" subtitle="Make your tour unforgettable." />
        <div className="container mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img src={Himalay1} alt="Luxury wedding car rental Ahmedabad" className="inset-0 w-full h-full object-cover" />
          </div>
          <div className="heliDesc mt-5">
            <p className="text-lg">
             At Shiv Shakti Tours & Travels, we specialize in creating premium travel experiences tailored to your unique celebrations. Whether it’s a romantic honeymoon, a grand wedding event, a family trip, or a corporate outing, our expert team ensures every journey is seamless, comfortable, and memorable.

We take care of everything from travel planning, accommodations, local sightseeing, and special experiences, so you can enjoy every moment without any hassle.</p>
            <p className="mt-3 text-lg font-medium">Our Tour Services Include:</p>
            <ul className="list-disc ml-4">
              <li>Weddings & Honeymoons: Romantic getaways, royal entries, couple experiences.</li>
              <li>Family & Group Tours: Fun-filled trips designed for every age and interest.</li>
              <li>Corporate Outings & Team Events: Stress-free planning for corporate travel and team-building activities.</li>
              <li>Religious & Temple Tours: Comfortable travel to sacred destinations with all arrangements.</li>
              <li>Special Events & Celebrations: Birthday trips, anniversaries, and other special occasions.</li>
            </ul>

            <p className="mt-3 text-lg font-medium">Why Choose Us?</p>
            <ul className="list-disc ml-4">
              <li>Tailor-Made Itineraries: Every tour is customized to your preferences.</li>
              <li>Luxury & Comfort: Premium vehicles, accommodations, and travel experiences.</li>
              <li>Expert Planning: Experienced team handling logistics, bookings, and local arrangements.</li>
              <li>Memorable Experiences: Unique and personalized activities to create lasting memories.</li>
            </ul>

         
          </div>
        </div>
      </section>

      {/* Decoration Rules */}
      <section className="section-padding bg-secondary">
        <SectionHeading title="Booking Details" subtitle="Important information about tour bookings" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <ul className="space-y-4"> <p className="mb-3">Booking & Confirmation</p>
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
            <ul className="space-y-4"><p className="mb-3">Payments & Refunds </p>
              {rules2.map((rule, i) => (
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
            <ul className="space-y-4"><p className="mb-3">Cancellation Policy (Approximate) </p>
              {rules3.map((rule, i) => (
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
            <ul className="space-y-4"><p className="mb-3"> Changes & Special Requests </p>
              {rules4.map((rule, i) => (
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
            <ul className="space-y-4"><p className="mb-3"> Safety & Responsibility </p>
              {rules5.map((rule, i) => (
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
            <ul className="space-y-4"><p className="mb-3"> Inclusions & Exclusions </p>
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
