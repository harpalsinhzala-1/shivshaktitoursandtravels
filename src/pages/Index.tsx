import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";
import { Phone, Clock, Shield, Car, Star, Users, Sparkles, MapPin, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-wedding-car.jpg";
import weddingImg from "@/assets/wedding-car-decorated.jpg";
import airportImg from "@/assets/airport-transfer.jpg";
import corporateImg from "@/assets/corporate-car.jpg";
import tempoImg from "@/assets/van-1-2-5.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  { title: "Wedding Luxury Cars", desc: "Make your special day unforgettable with our decorated luxury fleet", image: weddingImg, link: "/wedding-cars" },
  { title: "Airport Transfers", desc: "Punctual, comfortable airport pickup & drop services", image: airportImg, link: "/airport-taxi" },
  { title: "Corporate Travel", desc: "Professional chauffeur-driven cars for business needs", image: corporateImg, link: "/contact" },
  { title: "Tempo Traveller", desc: "17-seater Urbania for group trips & family outings", image: tempoImg, link: "/contact" },
];

const whyUs = [
  { icon: Clock, title: "24/7 Service", desc: "Round the clock availability for all your travel needs" },
  { icon: Users, title: "Professional Drivers", desc: "Experienced, courteous, and well-trained chauffeurs" },
  { icon: Sparkles, title: "Clean & Sanitized", desc: "Every vehicle is thoroughly cleaned before each trip" },
  { icon: CheckCircle, title: "On-Time Guarantee", desc: "We value your time — punctuality is our promise" },
  { icon: Shield, title: "Affordable Luxury", desc: "Premium experience at competitive pricing" },
];

const reviews = [
  { name: "Rahul Patel", review: "Best wedding car service in Ahmedabad! The Mercedes was spotless and beautifully decorated. Highly recommended!", rating: 5 },
  { name: "Priya Sharma", review: "Used their airport taxi service multiple times. Always on time, very professional drivers. 5 stars!", rating: 5 },
  { name: "Amit Desai", review: "Booked a Tempo Traveller for a family trip. Excellent condition, smooth ride. Will definitely book again.", rating: 5 },
  { name: "Neha Joshi", review: "Outstanding service for our wedding. The car was decorated so beautifully. Thank you Shiv Shakti Travels!", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Shiv Shakti Tours & Travels | Premium Wedding & Airport Car Rental Ahmedabad</title>
      <meta name="description" content="Premium luxury wedding car rental & airport taxi service in Ahmedabad. BMW, Mercedes, Audi. 24/7 service, professional drivers. Book now!" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury wedding car in Ahmedabad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary font-accent text-lg md:text-xl mb-3 tracking-widest uppercase">Shiv Shakti Tours & Travels</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Premium Wedding & Airport{" "}
              <span className="text-gradient-gold">Car Rental</span> in Ahmedabad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 font-accent"
            >
              Arrive in Style with Shiv Shakti Tours & Travels
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gold" size="xl" asChild>
                <a href="https://wa.me/917096013200?text=Hi%2C%20I%20want%20to%20book%20a%20car" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
              <Button variant="gold-outline" size="xl" asChild>
                <a href="tel:+917096013200">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /> 5.0 Google Rating</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 24/7 Available</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Ahmedabad, Gujarat</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <SectionHeading title="Our Services" subtitle="From grand weddings to seamless airport transfers, we deliver luxury at every mile" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to={service.link} className="group block glass-card overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <SectionHeading title="Why Choose Us" subtitle="Trusted by hundreds of families in Ahmedabad for premium travel experiences" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading text-base font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-background">
        <SectionHeading title="Customer Reviews" subtitle="What our valued customers say about us" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex gap-1 mb-3 text-primary">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{review.review}"</p>
              <p className="text-sm font-semibold text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-10" />
        <div className="absolute inset-0 bg-secondary" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Book Your Ride Today</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience luxury travel in Ahmedabad. Call us now or book via WhatsApp for instant confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <a href="https://wa.me/917096013200?text=Hi%2C%20I%20want%20to%20book%20a%20ride" target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <a href="tel:+917096013200">
                <Phone className="w-5 h-5" /> +91 70960 13200
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
