import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, MapPin, User, Calendar, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
<<<<<<< Updated upstream
import { Search, Calendar, MapPin, User, Users, ExternalLink, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { eventsData } from "@/data/eventsData";


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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

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
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search events or venues..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gold/20 bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:shadow-gold transition-shadow text-foreground"
              />
            </div>

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
                      onClick={() => navigate(`/events/${evt.slug}`)}
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
=======

// --- Types ---
export interface EventData {
  id: number;
  date: string;
  month: "March 2026" | "April 2026" | "Planned Events";
  title: string;
  convenor?: string;
  venue: string;
  description: string;
}

// --- Data ---
export const EVENTS: EventData[] = [
  // MARCH 2026
  {
    id: 12,
    date: "14 Mar 2026 (Sat)",
    month: "March 2026",
    title: "Pharma Anveshan 2026",
    venue: "A.U. Convention Centre",
    convenor: "Principal, AU College of Pharmaceutical Sciences",
    description: "Future Pharma Ecosystem: Fostering Synergy Among Academia, Industry, Research, Regulatory and Practice."
  },
  {
    id: 13,
    date: "17 Mar 2026 (Tue)",
    month: "March 2026",
    title: "Classical Music Concert",
    convenor: "Prof. K. Saraswathi Vidyardhi, HoD Music",
    venue: "Y.V.S. Murthy Auditorium",
    description: "An evening of serene classical melodies celebrating our cultural heritage and musical legacy."
  },
  {
    id: 14,
    date: "18 Mar (Wed)",
    month: "March 2026",
    title: "IIC Cluster Meet",
    convenor: "Prof. G.M.J. Raju",
    venue: "Convention Centre",
    description: "Focusing on innovation and start-up culture across local university clusters."
  },
  {
    id: 15,
    date: "22-23 Mar",
    month: "March 2026",
    title: "Geotechnical Solutions Workshop",
    convenor: "HoD Civil Engineering",
    venue: "YVS Murthy Auditorium",
    description: "Advancing geotechnical engineering practices for modern infrastructure challenges."
  },
  {
    id: 16,
    date: "22 Mar (Sun)",
    month: "March 2026",
    title: "International Food Festival",
    convenor: "Prof. S. Paul Douglas",
    venue: "Convention Centre",
    description: "A culinary journey with dishes from 40+ countries prepared by international students."
  },
  {
    id: 17,
    date: "25 Mar (Wed)",
    month: "March 2026",
    title: "Combined Convocation",
    convenor: "Prof. S. Paul Douglas",
    venue: "Convention Centre",
    description: "Celebrating the achievements of graduates in a combined 91st & 92nd convocation."
  },
  {
    id: 18,
    date: "26 Mar (Thu)",
    month: "March 2026",
    title: "International Cultural Festival",
    convenor: "Dean, International Affairs",
    venue: "Convention Centre",
    description: "A showcase of worldwide cultural diversity through performance and art."
  },

  // APRIL 2026
  {
    id: 19,
    date: "6-8 Apr 2026",
    month: "April 2026",
    title: "Grand Cultural Programme",
    convenor: "Prof. K. Saraswati Vidyardhi",
    venue: "AU Convention Centre",
    description: "Spectacular multi-day cultural celebration featuring renowned artists and AU talent."
  },
  {
    id: 20,
    date: "9-10 Apr",
    month: "April 2026",
    title: "Tech Innovation Conclave",
    convenor: "Principal, AU College of Engg.",
    venue: "Convention Centre",
    description: "Exploring the frontier of technology and industry 5.0 with academic experts."
  },
  {
    id: 21,
    date: "18 Apr (Sat)",
    month: "April 2026",
    title: "Affiliated Colleges Day",
    convenor: "Dean, CDC",
    venue: "Engg. College Grounds",
    description: "A special day to honor the contribution of our affiliated college network."
  },
  {
    id: 22,
    date: "19 Apr (Sun)",
    month: "April 2026",
    title: "Arts & Commerce Centenary",
    convenor: "Principal, AU College of A & C",
    venue: "Engg. College Grounds",
    description: "Celebrating the legacy of the College of Arts & Commerce in our 100th year."
  },
  {
    id: 23,
    date: "21 Apr (Tue)",
    month: "April 2026",
    title: "Science & Pharmacy Day",
    convenor: "Principal, AU College of S & T",
    venue: "Engg. College Grounds",
    description: "Honoring the scientific and pharmacological breakthroughs nurtured at AU."
  },
  {
    id: 24,
    date: "22 Apr (Wed)",
    month: "April 2026",
    title: "Engineering Centenary Day",
    convenor: "Principals, AUCE & AUCEW",
    venue: "Engg. College Grounds",
    description: "Focusing on the engineering excellence that has defined AU for a century."
  },
  {
    id: 25,
    date: "23 Apr (Thu)",
    month: "April 2026",
    title: "Law & IASE Celebration",
    convenor: "University Administration",
    venue: "Engg. College Grounds",
    description: "Marking 100 years of the College of Law and educational advancements at IASE."
  },
  {
    id: 26,
    date: "24-25 Apr",
    month: "April 2026",
    title: "Foundation Rehearsals",
    convenor: "Organizing Committee",
    venue: "Engg. College Grounds",
    description: "Grand rehearsals for the historic Centenary Foundation Day ceremony."
  },
  {
    id: 27,
    date: "26 Apr 2026 (Sun)",
    month: "April 2026",
    title: "Centenary Foundation Day",
    convenor: "University Administration",
    venue: "Engg. College Grounds",
    description: "The main historic celebration marking 100 years since the inception of AU."
  },

  // PLANNED EVENTS & OTHERS (to reach 34 total)
  { id: 28, date: "Planned", month: "Planned Events", title: "Centenary Marathon", venue: "RK Beach", description: "Running for the legacy of AU across the coast of Visakhapatnam." },
  { id: 29, date: "Planned", month: "Planned Events", title: "Heritage Photo Walk", venue: "Main Campus", description: "Discovering the historic architecture of AU through the camera lens." },
  { id: 30, date: "Planned", month: "Planned Events", title: "Science Expo 2026", venue: "Science College", description: "Showcasing student projects and research for the public." },
  { id: 31, date: "Planned", month: "Planned Events", title: "Alumni Global Meet", venue: "Convention Centre", description: "Welcoming back our distinguished alumni from across the world." },
  { id: 32, date: "Planned", month: "Planned Events", title: "Centenary Souvenir Launch", venue: "Senate Hall", description: "Unveiling the commemorative volume documenting 100 years of AU." },
  { id: 33, date: "Planned", month: "Planned Events", title: "Centenary Time Capsule", venue: "Administration Block", description: "Preserving our present for the scholars of the future." },
  { id: 34, date: "Planned", month: "Planned Events", title: "Mega Job Fair", venue: "Engg. College Grounds", description: "Connecting our students with top tier global opportunities." },
  { id: 35, date: "Mar 2026", month: "March 2026", title: "Youth Festival", venue: "Gymnasium Grounds", description: "A vibrant competition of talent, art, and youth spirit." },
  { id: 36, date: "Mar 2026", month: "March 2026", title: "Startup Pitch Day", venue: "Incubation Center", description: "Pitching revolutionary ideas to a panel of venture capitalists." },
  { id: 37, date: "Apr 2026", month: "April 2026", title: "Women's Conclave", venue: "AUCEW Auditorium", description: "Celebrating the role of women in leadership and academia." },
  { id: 38, date: "Planned", month: "Planned Events", title: "Centenary Cricket Cup", venue: "Gold Field Ground", description: "An inter-departmental tournament of the century." },
  { id: 39, date: "Planned", month: "Planned Events", title: "Art Gallery Opening", venue: "Fine Arts Museum", description: "Showcasing century-old artifacts and new student creations." },
  { id: 40, date: "Mar 2026", month: "March 2026", title: "Green Campus Initiative", venue: "Campus Wide", description: "Planting the 'Centenary Forest' to promote sustainability." },
  { id: 41, date: "Apr 2026", month: "April 2026", title: "Centenary Book Fair", venue: "Campus Library", description: "A week-long celebration of literature and knowledge." },
  { id: 42, date: "Planned", month: "Planned Events", title: "Digital Heritage Portal", venue: "Virtual Launch", description: "Unveiling the digital archive of AU's century-long journey." },
  { id: 43, date: "Planned", month: "Planned Events", title: "Centenary Film Fest", venue: "Convocation Hall", description: "Screening documentaries and films about the history of AU." },
  { id: 44, date: "Mar 2026", month: "March 2026", title: "Poetry Symposium", venue: "Telugu Dept Hall", description: "A gathering of regional and national poets." },
  { id: 45, date: "Apr 2026", month: "April 2026", title: "Centenary Gala Dinner", venue: "Beachside Grounds", description: "A formal dinner for faculty, staff, and distinguished guests." }
];

// --- Sub-components ---

const FloatingDots = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gold/30 rounded-full"
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: Math.random() * 0.5 + 0.2 }}
        animate={{ y: [null, Math.random() * 100 + "%"], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
      />
    ))}
  </div>
);

const EventCard = ({ event }: { event: EventData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(201, 163, 71, 0.2)" }}
      className="group bg-white border border-gold/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 shadow-sm relative overflow-hidden"
    >
      <div className="flex-grow z-10">
        <div className="mb-4">
          <h4 className="font-display text-2xl font-bold text-gold uppercase tracking-tight">
            {event.date.split(" (")[0]}
          </h4>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 ml-1" />
        </div>

        <h3 className="font-display text-2xl leading-tight font-bold text-[#800000] mb-6 group-hover:text-gold transition-colors">
          {event.title}
        </h3>

        <div className="space-y-3 mb-6 text-[15px] font-body text-gray-500">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-gold shrink-0 opacity-80" />
            <span className="line-clamp-1">{event.venue}</span>
          </div>
          {event.convenor && (
            <div className="flex items-center gap-3">
              <User size={18} className="text-gold shrink-0 opacity-80" />
              <span className="line-clamp-1 font-medium">{event.convenor}</span>
            </div>
          )}
        </div>

        <p className="font-body text-[15px] text-gray-400 leading-relaxed mb-8 line-clamp-3 italic">
          "{event.description}"
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-gold/5 z-10">
        <Link
          to={`/events/${event.id}`}
          className="text-gold hover:text-navy font-body font-bold text-base transition-all duration-300 flex items-center gap-2 group/btn"
        >
          Learn More
          <motion.div whileHover={{ x: 4 }} className="transition-transform">
            <ExternalLink size={16} />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const TABS = ["All", "March 2026", "April 2026", "Planned Events"];

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const matchesTab = activeTab === "All" || event.month === activeTab;
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.convenor?.toLowerCase() || "").includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8f5ee] font-body text-navy overflow-x-hidden selection:bg-gold/30">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <FloatingDots />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="mb-6">
            <span className="inline-block px-4 py-1 rounded-full border border-gold/40 text-gold text-[13px] font-bold tracking-[0.4em] uppercase mb-6 font-body">
              1926 – 2026
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-4 tracking-tight relative inline-block"
            >
              Events – Shatabdi Mahotsav 2026
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent rounded-full shadow-[0_0_15px_rgba(201,163,71,0.5)]"
              />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display text-xl md:text-2xl text-gold-light italic tracking-wide max-w-2xl mx-auto opacity-80 mt-8"
            >
              Celebrating 100 Years of Excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Sticky Filters Bar */}
      <div className="sticky top-20 z-40 bg-[#f8f5ee]/95 backdrop-blur-md border-b border-gold/10 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-navy/5 p-1 rounded-full overflow-x-auto max-w-full hide-scrollbar relative">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 whitespace-nowrap z-10 ${
                    activeTab === tab 
                      ? "text-gold" 
                      : "text-navy/40 hover:text-navy"
                  }`}
                >
                  {tab === "All" ? "All Events" : tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeEventTab"
                      className="absolute inset-0 bg-navy rounded-full -z-10 shadow-lg ring-1 ring-gold/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-80 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                <input 
                  type="text"
                  placeholder="Search events, venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-2.5 bg-white border border-gold/20 rounded-full text-sm focus:outline-none"
                />
              </div>
              <Link to="/registration" className="px-10 py-2.5 bg-navy text-gold hover:bg-navy-light font-bold rounded-full transition-all shadow-md flex items-center gap-2 text-sm border border-gold/20">
                Register Now
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Event Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <SectionTitle 
            title="Calendar of Celebrations"
            subtitle="Explore our centenary events across campuses, featuring global conclaves, cultural festivals, and departmental celebrations."
          />

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.05 
                  }}
                >
                  <EventCard 
                    event={event} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
>>>>>>> Stashed changes
          </motion.div>
        </div>
      </section>

<<<<<<< Updated upstream
    </motion.div>
=======
      <div className="h-40 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none" />
    </div>
>>>>>>> Stashed changes
  );
};

export default Events;
