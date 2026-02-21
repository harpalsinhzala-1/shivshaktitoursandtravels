import { Phone, MessageCircle } from "lucide-react";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <a
        href="tel:+917096013200"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
      <a
        href="https://wa.me/917096013200?text=Hi%2C%20I%20want%20to%20book%20a%20car"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-[hsl(0,0%,100%)]" />
      </a>
    </div>
  );
};

export default StickyButtons;
