import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary mb-4">Shiv Shakti Tours & Travels</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium luxury car rental services in Ahmedabad. Wedding cars, airport transfers, and corporate travel.
            </p>
            <div className="flex items-center gap-2 text-primary">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
              <span className="text-sm text-muted-foreground ml-1">5.0 Google Reviews</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Wedding Cars", path: "/wedding-cars" },
                { label: "Airport Taxi", path: "/airport-taxi" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wedding Luxury Cars</li>
              <li>Airport Pickup & Drop</li>
              <li>Corporate Travel</li>
              <li>Tempo Traveller Booking</li>
              <li>Outstation Trips</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                Madhupura, Police Line Rd, Shahibag, Ahmedabad – 380004
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+917096013200" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 70960 13200
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                Open 24 Hours
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info.shivshaktitoursandtravels@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info.shivshaktitoursandtravels@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shiv Shakti Tours & Travels. All rights reserved.</p>
          <p className="mt-1">Premium Wedding & Airport Car Rental in Ahmedabad, Gujarat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
