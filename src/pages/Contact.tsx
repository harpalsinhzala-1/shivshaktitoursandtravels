import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", date: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I need ${form.service} on ${form.date}. My phone: ${form.phone}`;
    window.open(`https://wa.me/917096013200?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <Layout>
      <title>Contact Us | Shiv Shakti Tours & Travels Ahmedabad</title>
      <meta name="description" content="Contact Shiv Shakti Tours & Travels for luxury car rental in Ahmedabad. Call +91 70960 13200. Open 24 hours." />

      <section className="section-padding bg-background min-h-screen">
        <SectionHeading title="Contact Us" subtitle="Get in touch for bookings and inquiries" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Our Address</h4>
                  <p className="text-sm text-muted-foreground">Madhupura, Police Line Rd, Shahibag, Ahmedabad – 380004</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Phone</h4>
                  <a href="tel:+917096013200" className="text-sm text-primary hover:underline">+91 70960 13200</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-1">Working Hours</h4>
                  <p className="text-sm text-muted-foreground">Open 24 Hours — 7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.58!3d23.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwMzQnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shiv Shakti Tours & Travels Location"
              />
            </div>

            <div className="flex gap-4">
              <Button variant="gold" className="flex-1" asChild>
                <a href="tel:+917096013200">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </Button>
              <Button variant="whatsapp" className="flex-1" asChild>
                <a href="https://wa.me/917096013200" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">
                <span className="text-gradient-gold">Quick Booking</span>
              </h3>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading text-xl font-semibold mb-2">Redirecting to WhatsApp!</h4>
                  <p className="text-muted-foreground text-sm">We'll respond within minutes.</p>
                  <Button variant="gold-outline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-md bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-md bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Travel Date</label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full h-12 px-4 rounded-md bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Type</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full h-12 px-4 rounded-md bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="Wedding Car Rental">Wedding Car Rental</option>
                      <option value="Airport Pickup">Airport Pickup</option>
                      <option value="Airport Drop">Airport Drop</option>
                      <option value="Corporate Travel">Corporate Travel</option>
                      <option value="Tempo Traveller">Tempo Traveller</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <Button variant="gold" size="lg" type="submit" className="w-full">
                    <Send className="w-4 h-4" /> Send via WhatsApp
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
