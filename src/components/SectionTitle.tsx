import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className={`font-display text-3xl md:text-5xl font-bold ${light ? "text-gold" : "text-navy"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-3 text-base md:text-lg font-body max-w-2xl mx-auto ${light ? "text-gold-light/80" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className="gold-divider w-32 mx-auto mt-6" />
  </motion.div>
);

export default SectionTitle;
