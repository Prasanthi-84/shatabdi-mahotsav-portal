import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, Users, Tag, ArrowLeft, Download, ExternalLink } from "lucide-react";
import { eventsData } from "@/data/eventsData";
import { Button } from "@/components/ui/button";

const LotusSVG = ({ size = 64, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <ellipse cx="32" cy="40" rx="18" ry="22" fill="hsl(43 72% 52% / 0.4)" />
    <ellipse cx="32" cy="36" rx="12" ry="16" fill="hsl(43 60% 70% / 0.3)" />
    <ellipse cx="32" cy="32" rx="6" ry="10" fill="hsl(40 30% 95% / 0.5)" />
  </svg>
);

const FloatingLotus = ({ delay, x, size, duration = 20 }: { delay: number; x: string; size: number; duration?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: "-8%" }}
    animate={{
      y: ["0vh", "115vh"],
      rotate: [0, 180 + Math.random() * 180],
      opacity: [0, 0.08, 0.12, 0.06, 0],
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
  >
    <LotusSVG size={size} />
  </motion.div>
);

const categoryColors: Record<string, string> = {
  Workshop: "bg-accent/20 text-accent-foreground",
  Cultural: "bg-secondary/20 text-secondary-foreground",
  Academic: "bg-primary/10 text-primary-foreground",
  Technical: "bg-accent/15 text-accent-foreground",
  Sports: "bg-secondary/15 text-secondary-foreground",
  Exhibition: "bg-accent/20 text-accent-foreground",
  Ceremony: "bg-secondary/25 text-secondary-foreground",
  Other: "bg-muted text-muted-foreground",
};

const EventDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="pt-20 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-navy mb-4">Event Not Found</h1>
          <p className="font-body text-muted-foreground mb-6">The event you're looking for doesn't exist.</p>
          <Link to="/events" className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:underline">
            <ArrowLeft size={16} /> Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="pt-20 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
        <FloatingLotus delay={0} x="10%" size={50} duration={22} />
        <FloatingLotus delay={4} x="50%" size={40} duration={26} />
        <FloatingLotus delay={7} x="85%" size={55} duration={20} />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> All Events
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-body font-semibold mb-4 ${categoryColors[event.category] || categoryColors.Other}`}
            >
              {event.category}
            </span>

            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gold tracking-wide mb-4"
              style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
            >
              {event.title}
            </h1>

            <motion.div
              className="gold-divider w-32 mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{ transformOrigin: "left" }}
            />

            <div className="flex flex-wrap gap-6 text-sm font-body text-gold/80">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-gold" />
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                {event.venue}
              </span>
              <span className="flex items-center gap-2">
                <User size={14} className="text-gold" />
                {event.convenor}
              </span>
              {event.chiefGuest && (
                <span className="flex items-center gap-2">
                  <Users size={14} className="text-gold" />
                  {event.chiefGuest}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Details Card */}
            <motion.div
              className="relative rounded-2xl border border-gold/20 bg-card p-8 md:p-12 shadow-gold mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Corner accents */}
              <div className="absolute top-2 left-2 opacity-[0.08] pointer-events-none"><LotusSVG size={40} /></div>
              <div className="absolute top-2 right-2 opacity-[0.08] pointer-events-none rotate-90"><LotusSVG size={40} /></div>
              <div className="absolute bottom-2 left-2 opacity-[0.08] pointer-events-none -rotate-90"><LotusSVG size={40} /></div>
              <div className="absolute bottom-2 right-2 opacity-[0.08] pointer-events-none rotate-180"><LotusSVG size={40} /></div>

              <h2
                className="text-xl md:text-2xl font-bold text-navy tracking-wide mb-6"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                About This Event
              </h2>

              <div className="gold-divider w-20 mb-6" />

              <p className="font-body text-foreground leading-relaxed text-base md:text-lg mb-8">
                {event.description}
              </p>

              {/* Info grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-gold/10 bg-cream/50">
                  <Calendar size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-body text-muted-foreground">Date</p>
                    <p className="font-body font-semibold text-foreground">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-gold/10 bg-cream/50">
                  <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-body text-muted-foreground">Venue</p>
                    <p className="font-body font-semibold text-foreground">{event.venue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-gold/10 bg-cream/50">
                  <User size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-body text-muted-foreground">Convenor</p>
                    <p className="font-body font-semibold text-foreground">{event.convenor}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-gold/10 bg-cream/50">
                  <Tag size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-body text-muted-foreground">Category</p>
                    <p className="font-body font-semibold text-foreground">{event.category}</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                {event.registrationLink && (
                  <motion.a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-navy text-gold font-bold rounded-full hover:bg-navy-light transition-all shadow-gold"
                    style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.08em" }}
                  >
                    <ExternalLink size={16} />
                    Register Now
                  </motion.a>
                )}
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/registration"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-gold/30 text-navy font-bold rounded-full hover:bg-accent/10 transition-all"
                    style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.08em" }}
                  >
                    General Registration
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Brochure Section */}
            {event.brochure && (
              <motion.div
                className="relative rounded-2xl border border-gold/20 bg-card p-8 md:p-12 shadow-gold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2
                  className="text-xl md:text-2xl font-bold text-navy tracking-wide mb-6"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Event Brochure
                </h2>
                <div className="gold-divider w-20 mb-6" />

                {/* PDF Viewer */}
                <div className="w-full rounded-xl overflow-hidden border border-gold/15 mb-6" style={{ height: "600px" }}>
                  <iframe
                    src={event.brochure}
                    title={`${event.title} Brochure`}
                    className="w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>

                {/* Download button */}
                <motion.a
                  href={event.brochure}
                  download
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-gold/30 text-navy font-bold rounded-full hover:bg-accent/10 transition-all"
                  style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.08em" }}
                >
                  <Download size={16} />
                  Download Brochure
                </motion.a>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default EventDetails;
