import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Search, Calendar, MapPin, User, Users, X, ExternalLink } from "lucide-react";
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

// Floating lotus petal component
const FloatingLotus = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    className="absolute pointer-events-none opacity-[0.07]"
    style={{ left: x, top: "-5%" }}
    animate={{ y: ["0vh", "110vh"], rotate: [0, 360], scale: [1, 0.7, 1] }}
    transition={{ duration: 18 + delay * 2, repeat: Infinity, delay, ease: "linear" }}
  >
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="40" rx="18" ry="22" fill="hsl(43 72% 52%)" />
      <ellipse cx="32" cy="36" rx="12" ry="16" fill="hsl(43 60% 70%)" />
      <ellipse cx="32" cy="32" rx="6" ry="10" fill="hsl(40 30% 95%)" />
    </svg>
  </motion.div>
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy overflow-hidden">
        {/* Floating lotuses */}
        <FloatingLotus delay={0} x="10%" size={48} />
        <FloatingLotus delay={4} x="30%" size={36} />
        <FloatingLotus delay={2} x="55%" size={52} />
        <FloatingLotus delay={6} x="75%" size={40} />
        <FloatingLotus delay={8} x="90%" size={32} />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Events – Shatabdi Mahotsav 2026"
            subtitle="March & April 2026 • Celebrating 100 Years of Excellence"
            light
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center font-display text-lg tracking-[0.3em] text-gold-light/60 mt-2"
          >
            1926 – 2026
          </motion.p>
        </div>
      </section>

      {/* Sticky Filters */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-gold/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-navy text-gold shadow-gold"
                      : "bg-background text-muted-foreground hover:bg-gold/10 border border-gold/20"
                  }`}
                >
                  {tab.label}
                </button>
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
                className="w-full pl-9 pr-4 py-2 rounded-full border border-gold/20 bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-gold/40 text-foreground"
              />
            </div>

            {/* Register Button */}
            <Link
              to="/registration"
              className="px-6 py-2 rounded-full bg-navy text-gold font-body font-semibold text-sm hover:bg-navy-light transition-colors whitespace-nowrap"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          {/* Parchment container */}
          <div className="relative max-w-6xl mx-auto p-6 md:p-10 rounded-2xl border border-gold/20 bg-background/80 shadow-gold">
            {/* Corner lotus accents */}
            {["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180"].map((pos, i) => (
              <div key={i} className={`absolute ${pos} opacity-10 pointer-events-none`}>
                <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
                  <ellipse cx="20" cy="30" rx="14" ry="18" fill="hsl(43 72% 52%)" />
                  <ellipse cx="20" cy="26" rx="8" ry="12" fill="hsl(43 60% 70%)" />
                </svg>
              </div>
            ))}

            {filteredEvents.length === 0 ? (
              <p className="text-center text-muted-foreground font-body py-12">No events match your search.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((evt, i) => (
                  <motion.div
                    key={evt.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: (i % 6) * 0.08, duration: 0.5 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 32px hsl(43 72% 52% / 0.25)" }}
                    onClick={() => setSelectedEvent(evt)}
                    className="cursor-pointer rounded-xl border border-gold/15 bg-card p-5 flex flex-col gap-3 transition-shadow hover:shadow-gold group"
                  >
                    {/* Date */}
                    <span className="font-display text-lg font-bold text-gold">{evt.date}</span>

                    {/* Title */}
                    <h3 className="font-display text-base font-bold text-navy leading-snug group-hover:text-navy-light transition-colors">
                      {evt.title}
                    </h3>

                    {/* Meta */}
                    <div className="space-y-1 text-xs font-body text-muted-foreground">
                      <p className="flex items-center gap-1.5"><User size={12} className="text-gold" />{evt.convenor}</p>
                      <p className="flex items-center gap-1.5"><MapPin size={12} className="text-gold" />{evt.venue}</p>
                      {evt.chiefGuest && (
                        <p className="flex items-center gap-1.5"><Users size={12} className="text-gold" />{evt.chiefGuest}</p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs font-body text-muted-foreground line-clamp-2 mt-auto">{evt.description}</p>

                    <span className="text-xs font-body font-semibold text-gold flex items-center gap-1 mt-1">
                      Learn More <ExternalLink size={12} />
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-lg border-gold/30 bg-cream rounded-2xl">
          {/* Lotus frame top accent */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <ellipse cx="40" cy="30" rx="30" ry="20" fill="hsl(43 72% 52%)" />
              <ellipse cx="40" cy="26" rx="18" ry="14" fill="hsl(43 60% 70%)" />
              <ellipse cx="40" cy="22" rx="8" ry="8" fill="hsl(40 30% 95%)" />
            </svg>
          </div>

          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-navy pr-6">
              {selectedEvent?.title}
            </DialogTitle>
            <DialogDescription className="font-display text-lg text-gold font-semibold">
              {selectedEvent?.date}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            <div className="space-y-2 text-sm font-body">
              <p className="flex items-center gap-2"><User size={14} className="text-gold" /><span className="text-muted-foreground">Convenor:</span> <span className="text-foreground font-medium">{selectedEvent?.convenor}</span></p>
              <p className="flex items-center gap-2"><MapPin size={14} className="text-gold" /><span className="text-muted-foreground">Venue:</span> <span className="text-foreground font-medium">{selectedEvent?.venue}</span></p>
              {selectedEvent?.chiefGuest && (
                <p className="flex items-center gap-2"><Users size={14} className="text-gold" /><span className="text-muted-foreground">Chief Guest:</span> <span className="text-foreground font-medium">{selectedEvent?.chiefGuest}</span></p>
              )}
            </div>

            <div className="gold-divider w-full" />

            <p className="font-body text-foreground leading-relaxed">{selectedEvent?.description}</p>

            <Link
              to="/registration"
              className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-gold font-body font-semibold rounded-full hover:bg-navy-light transition-colors w-full justify-center mt-2"
            >
              <Calendar size={16} />
              Register for this Event
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
