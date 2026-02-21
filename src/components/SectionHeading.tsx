import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const SectionHeading = ({ title, subtitle, children, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 md:mb-16 ${className}`}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="gold-divider max-w-xs mx-auto mt-6" />
      {children}
    </motion.div>
  );
};

export default SectionHeading;
