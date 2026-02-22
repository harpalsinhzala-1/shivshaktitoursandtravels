import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/brand_logo-removebg-preview.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Wedding Cars", path: "/wedding-cars" },
  { label: "Airport Taxi", path: "/airport-taxi" },
  { label: "Book Helicopter", path: "/book-helicopter" },
  { label: "Customise Tour Package", path: "/customise-package" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-24 px-4 ">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Shiv Shakti Tours & Travels" className="h-16 md:h-20 w-auto" />
          <div className="">
            <p className="text-xl font-heading font-bold text-primary leading-tight">Shiv Shakti</p>
            <p className="text-md text-muted-foreground leading-tight">Tours & Travels</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-md font-medium transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="gold-outline" size="sm" asChild>
            <a href="tel:+917096013200">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
          <Button variant="gold" size="sm" asChild>
            <a href="https://wa.me/917096013200" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3 border-t border-border">
              <Button variant="gold-outline" size="sm" className="flex-1" asChild>
                <a href="tel:+917096013200">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="gold" size="sm" className="flex-1" asChild>
                <a href="https://wa.me/917096013200" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
