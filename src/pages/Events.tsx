import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Search, Calendar, MapPin, User, Users, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface EventItem {
  id: number;
  date: string;
  month: "march" | "april" | "planned";
  title: string;
  convenor: string;
  venue: string;
  chiefGuest?: string;
  description: string;
}

const eventsData: EventItem[] = [
  // March 2026
  { id: 1, date: "11 Mar (Wed)", month: "march", title: "FDP – AU CPDC & University of Western Australia", convenor: "Dean, CPDC", venue: "Convention Centre", description: "Faculty Development Program in collaboration with the University of Western Australia." },
  { id: 2, date: "14 Mar (Sat)", month: "march", title: "Pharma Anveshan 2026 – Industry Academia Conclave", convenor: "Principal, AU College of Pharmaceutical Sciences", venue: "Convention Centre", description: "A landmark conclave bridging pharmaceutical industry and academic research." },
  { id: 3, date: "17 Mar (Tue)", month: "march", title: "Classical Music Concert by Dept. of Music", convenor: "Prof. Saraswathi Vidyardhi, HoD Music", venue: "Y.V.S. Murthy Auditorium", description: "An evening of classical Indian music performed by the Department of Music." },
  { id: 4, date: "18 Mar (Wed)", month: "march", title: "Institute Innovation Council Cluster Meet", convenor: "Prof. G.M.J. Raju, President IIC", venue: "Convention Centre", chiefGuest: "Hon'ble MP, Minister for HRD (Expected)", description: "Hosting the IIC Cluster Meet to foster innovation and entrepreneurship." },
  { id: 5, date: "22–23 Mar", month: "march", title: "Two-Day National Workshop on Geotechnical Solutions", convenor: "HoD Civil Engineering", venue: "YVS Murthy Auditorium", description: "A national workshop exploring modern geotechnical engineering solutions." },
  { id: 6, date: "22 Mar (Sun)", month: "march", title: "International Food Festival by Foreign Students of 40 Countries", convenor: "Prof. S. Paul Douglas, Dean International Affairs", venue: "Convention Centre", description: "A vibrant food festival showcasing cuisines from 40 countries by international students." },
  { id: 7, date: "25 Mar (Wed)", month: "march", title: "91st & 92nd Combined Convocation", convenor: "Prof. S. Paul Douglas", venue: "Convention Centre", description: "The historic combined convocation ceremony celebrating academic achievement." },
  { id: 8, date: "26 Mar (Thu)", month: "march", title: "International Cultural Festival by Foreign Students", convenor: "Dean, International Affairs", venue: "Convention Centre", description: "Cultural performances and exhibitions by international students." },
  // April 2026
  { id: 9, date: "6–8 Apr", month: "april", title: "Mega Cultural Event", convenor: "Prof. Asha Emmanuel Raju", venue: "Engg. College Grounds", description: "Three days of grand cultural performances, competitions, and celebrations." },
  { id: 10, date: "9–10 Apr", month: "april", title: "Technology & Innovation Conclave", convenor: "Principal, AU College of Engineering", venue: "Convention Centre", description: "A conclave showcasing cutting-edge technology and innovation from AU." },
  { id: 11, date: "18 Apr (Sat)", month: "april", title: "Affiliated Colleges Centenary Day Celebrations", convenor: "Dean, CDC", venue: "Engg. College Grounds", description: "Centenary celebrations with participation from 300+ affiliated colleges." },
  { id: 12, date: "19 Apr (Sun)", month: "april", title: "College of Arts & Commerce + AU SIB", convenor: "Principal, AU College of A & C", venue: "Engg. College Grounds", description: "Special centenary programs by the College of Arts & Commerce and AU SIB." },
  { id: 13, date: "21 Apr (Tue)", month: "april", title: "College of Science & Tech. & Pharmacy", convenor: "Principal, AU College of S & T", venue: "Engg. College Grounds", description: "Academic and cultural celebrations by Science, Technology & Pharmacy colleges." },
  { id: 14, date: "22 Apr (Wed)", month: "april", title: "College of Engineering + AUCEW", convenor: "Principals, AUCE", venue: "Engg. College Grounds", description: "Engineering and women's engineering college centenary celebrations." },
  { id: 15, date: "23 Apr (Thu)", month: "april", title: "College of Law + IASE", convenor: "Rector & Registrar", venue: "Engg. College Grounds", description: "Law college and IASE centenary commemorative events." },
  { id: 16, date: "24–25 Apr", month: "april", title: "Preparation, Rehearsal & Final Arrangements", convenor: "—", venue: "Engg. College Grounds", description: "Final preparations and rehearsals for the grand centenary foundation day." },
  { id: 17, date: "26 Apr (Sun)", month: "april", title: "Centenary Foundation Day Celebrations", convenor: "—", venue: "Engg. College Grounds", description: "The grand culmination — celebrating 100 glorious years of Andhra University." },
  // Planned Events
  { id: 18, date: "TBD", month: "planned", title: "Alumni Global Meet", convenor: "Dean, Alumni Relations", venue: "Convention Centre", description: "A global gathering of AU alumni to celebrate the centenary milestone." },
  { id: 19, date: "TBD", month: "planned", title: "Research Excellence Symposium", convenor: "Director, Research & Development", venue: "Convention Centre", description: "Showcasing 100 years of research excellence and future directions." },
  { id: 20, date: "TBD", month: "planned", title: "Sports Tournament – Centenary Cup", convenor: "Director of Physical Education", venue: "AU Sports Complex", description: "Inter-college sports tournament commemorating the centenary." },
  { id: 21, date: "TBD", month: "planned", title: "Heritage Walk & Campus History Exhibition", convenor: "Department of History", venue: "AU Campus", description: "A guided heritage walk through AU's historic campus and exhibition." },
  { id: 22, date: "TBD", month: "planned", title: "Science & Technology Expo", convenor: "Dean, Faculty of Science", venue: "Convention Centre", description: "Exhibition of scientific innovations and technological advancements from AU." },
  { id: 23, date: "TBD", month: "planned", title: "Literary & Debate Festival", convenor: "Department of English", venue: "YVS Murthy Auditorium", description: "Literary competitions, debates, and cultural discussions." },
  { id: 24, date: "TBD", month: "planned", title: "Centenary Art & Photography Exhibition", convenor: "Department of Fine Arts", venue: "AU Art Gallery", description: "A curated exhibition of art and photography celebrating AU's 100-year journey." },
];

const filterTabs = [
  { key: "all", label: "All Events" },
  { key: "march", label: "March 2026" },
  { key: "april", label: "April 2026" },
  { key: "planned", label: "Planned Events" },
];

// Lotus SVG component for reuse
const LotusSVG = ({ size = 64, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <ellipse cx="32" cy="40" rx="18" ry="22" fill="hsl(43 72% 52% / 0.4)" />
    <ellipse cx="32" cy="36" rx="12" ry="16" fill="hsl(43 60% 70% / 0.3)" />
    <ellipse cx="32" cy="32" rx="6" ry="10" fill="hsl(40 30% 95% / 0.5)" />
  </svg>
);

// Floating lotus particle for hero/modal backgrounds
const FloatingLotus = ({ delay, x, size, duration = 20 }: { delay: number; x: string; size: number; duration?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: "-8%" }}
    animate={{
      y: ["0vh", "115vh"],
      rotate: [0, 180 + Math.random() * 180],
      opacity: [0, 0.08, 0.12, 0.06, 0],
      scale: [0.8, 1, 0.9, 0.7],
    }}
    transition={{ duration: duration, repeat: Infinity, delay, ease: "linear" }}
  >
    <LotusSVG size={size} />
  </motion.div>
);

// Corner lotus accent for parchment containers
const CornerLotus = ({ position }: { position: string }) => (
  <div className={`absolute ${position} opacity-[0.08] pointer-events-none`}>
    <LotusSVG size={44} />
  </div>
);

const Events = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filteredEvents = useMemo(() => {
    return eventsData.filter((e) => {
      const matchTab = activeTab === "all" || e.month === activeTab;
      const matchSearch =
        !search ||
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.venue.toLowerCase().includes(search.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, search]);

  return (
    <motion.div
      className="pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative py-28 md:py-36 bg-navy overflow-hidden">
        {/* Multi-layer floating lotuses */}
        <FloatingLotus delay={0} x="8%" size={56} duration={22} />
        <FloatingLotus delay={3} x="22%" size={38} duration={26} />
        <FloatingLotus delay={5} x="42%" size={62} duration={19} />
        <FloatingLotus delay={7} x="65%" size={44} duration={24} />
        <FloatingLotus delay={2} x="80%" size={50} duration={21} />
        <FloatingLotus delay={9} x="92%" size={34} duration={28} />
        <FloatingLotus delay={4} x="50%" size={28} duration={30} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-gold mb-4"
              style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
            >
              Events
            </h1>
            <motion.div
              className="gold-divider w-40 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "center" }}
            />
            <h2 className="font-display text-xl md:text-2xl text-gold-light/90 font-medium tracking-wider mb-3">
              Shatabdi Mahotsav 2026
            </h2>
            <p className="font-body text-sm md:text-base text-gold-light/60 tracking-widest">
              March & April 2026 • Celebrating 100 Years of Excellence
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center mt-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span className="text-lg md:text-xl tracking-[0.5em] text-gold/40 font-medium">
              1926 — 2026
            </span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════ STICKY FILTERS ═══════════ */}
      <motion.div
        className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-gold/20 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-navy text-gold shadow-gold"
                      : "bg-background text-muted-foreground hover:bg-accent/10 border border-gold/20"
                  }`}
                  style={activeTab === tab.key ? { fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" } : {}}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.div
                      className="absolute -bottom-0.5 left-1/2 h-0.5 bg-gold rounded-full"
                      layoutId="activeTab"
                      style={{ width: "60%", x: "-50%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <motion.div className="relative flex-1 max-w-xs" whileFocusWithin={{ scale: 1.02 }}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search events or venues..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gold/20 bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:shadow-gold transition-shadow text-foreground"
              />
            </motion.div>

            {/* Register Button */}
            <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/registration"
                className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-navy text-gold font-body font-bold text-sm hover:bg-navy-light transition-colors shadow-gold whitespace-nowrap"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.08em" }}
              >
                <Sparkles size={14} />
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ═══════════ EVENTS GRID ═══════════ */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          {/* Parchment container */}
          <motion.div
            className="relative max-w-6xl mx-auto p-6 md:p-12 rounded-2xl border border-gold/20 bg-background/80 shadow-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Corner lotus accents */}
            <CornerLotus position="top-2 left-2" />
            <CornerLotus position="top-2 right-2 rotate-90" />
            <CornerLotus position="bottom-2 left-2 -rotate-90" />
            <CornerLotus position="bottom-2 right-2 rotate-180" />

            {/* Section header inside parchment */}
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl font-bold text-navy tracking-wide"
                style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
              >
                Centenary Celebration Events
              </h2>
              <div className="gold-divider w-24 mx-auto mt-4" />
              <p className="text-sm text-muted-foreground font-body mt-3">
                {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filteredEvents.length === 0 ? (
              <p className="text-center text-muted-foreground font-body py-16 text-lg">
                No events match your search.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredEvents.map((evt, i) => (
                    <motion.div
                      key={evt.id}
                      layout
                      initial={{ opacity: 0, y: 40, rotate: -1 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ delay: (i % 6) * 0.07, duration: 0.55, ease: "easeOut" }}
                      whileHover={{
                        y: -12,
                        boxShadow: "0 12px 40px hsl(43 72% 52% / 0.3)",
                        borderColor: "hsl(43 72% 52% / 0.5)",
                      }}
                      onClick={() => setSelectedEvent(evt)}
                      className="cursor-pointer rounded-xl border border-gold/15 bg-card p-6 flex flex-col gap-3 transition-all group relative overflow-hidden"
                    >
                      {/* Subtle hover lotus bloom */}
                      <motion.div
                        className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                      >
                        <LotusSVG size={80} />
                      </motion.div>

                      {/* Date */}
                      <motion.span
                        className="text-xl font-bold text-gold tracking-wider"
                        style={{ fontFamily: "'Cinzel', serif" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {evt.date}
                      </motion.span>

                      {/* Title */}
                      <h3 className="font-display text-lg font-bold text-navy leading-snug group-hover:text-navy-light transition-colors">
                        {evt.title}
                      </h3>

                      {/* Meta */}
                      <div className="space-y-1.5 text-xs font-body text-muted-foreground">
                        <p className="flex items-center gap-1.5">
                          <User size={12} className="text-gold shrink-0" />
                          <span className="truncate">{evt.convenor}</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-gold shrink-0" />
                          {evt.venue}
                        </p>
                        {evt.chiefGuest && (
                          <p className="flex items-center gap-1.5">
                            <Users size={12} className="text-gold shrink-0" />
                            {evt.chiefGuest}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs font-body text-muted-foreground line-clamp-2 mt-auto leading-relaxed">
                        {evt.description}
                      </p>

                      {/* Learn More */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-body font-bold text-gold mt-2 group-hover:tracking-wider transition-all relative">
                        Learn More
                        <ExternalLink size={12} />
                        <motion.span
                          className="absolute -bottom-0.5 left-0 h-px bg-gold"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        />
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ EVENT DETAIL MODAL ═══════════ */}
      <AnimatePresence>
        {selectedEvent && (
          <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
            <DialogContent className="max-w-lg border-gold/30 bg-cream rounded-2xl overflow-hidden">
              {/* Floating lotus accents in modal */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 opacity-[0.05]"
                  animate={{ rotate: [0, 360], y: [0, -8, 0] }}
                  transition={{ duration: 20, repeat: Infinity }}
                >
                  <LotusSVG size={90} />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4 opacity-[0.04]"
                  animate={{ rotate: [0, -180], y: [0, 6, 0] }}
                  transition={{ duration: 16, repeat: Infinity }}
                >
                  <LotusSVG size={70} />
                </motion.div>
              </div>

              {/* Top accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none">
                <LotusSVG size={80} />
              </div>

              <DialogHeader className="relative z-10">
                <DialogTitle
                  className="text-2xl md:text-3xl text-navy pr-6 tracking-wide"
                  style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
                >
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription
                  className="text-lg font-bold text-gold tracking-widest"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {selectedEvent.date}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 mt-3 relative z-10">
                <div className="space-y-2.5 text-sm font-body">
                  <p className="flex items-center gap-2">
                    <User size={14} className="text-gold" />
                    <span className="text-muted-foreground">Convenor:</span>
                    <span className="text-foreground font-semibold">{selectedEvent.convenor}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    <span className="text-muted-foreground">Venue:</span>
                    <span className="text-foreground font-semibold">{selectedEvent.venue}</span>
                  </p>
                  {selectedEvent.chiefGuest && (
                    <p className="flex items-center gap-2">
                      <Users size={14} className="text-gold" />
                      <span className="text-muted-foreground">Chief Guest:</span>
                      <span className="text-foreground font-semibold">{selectedEvent.chiefGuest}</span>
                    </p>
                  )}
                </div>

                <div className="gold-divider w-full" />

                <p className="font-body text-foreground leading-relaxed text-base">
                  {selectedEvent.description}
                </p>

                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/registration"
                    className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-navy text-gold font-bold rounded-full hover:bg-navy-light transition-all w-full mt-2 shadow-gold"
                    style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.1em" }}
                  >
                    <Calendar size={16} />
                    Register for this Event
                  </Link>
                </motion.div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Events;
