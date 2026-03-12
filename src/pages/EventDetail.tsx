import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, MapPin, User, Download, Globe, Clock, ArrowLeft, Phone, Mail, Info
} from "lucide-react";

// --- Types ---
interface EventDetailData {
  id: number;
  date: string;
  title: string;
  convenor: string;
  venue: string;
  description: string;
  time: string;
  theme?: string;
}

// --- Data ---
const eventsData: EventDetailData[] = [
  { 
    id: 12, 
    date: "14 Mar 2026 (Sat)", 
    title: "Pharma Anveshan 2026 – Industry Academia Conclave", 
    convenor: "Principal, AU College of Pharmaceutical Sciences", 
    venue: "A.U. Convention Centre", 
    description: "Industry Academia Conclave at the AU College of Pharmaceutical Sciences. Theme: Future Pharma Ecosystem: Fostering Synergy Among Academia, Industry, Research, Regulatory and Practice. Full day event with Inaugural Ceremony, Keynote Address by Dr. Veer Raju P, Address by Sri K. Raja Bhanu, Panel Discussion & Pharma Ideathon. Free registration for all eligible candidates.", 
    time: "09:30 AM onwards" 
  },
  { 
    id: 13, 
    date: "17 Mar 2026 (Tue)", 
    title: "Classical Music Concert by Dept. of Music", 
    convenor: "Prof. K. Saraswathi Vidyardhi, HoD Music", 
    venue: "Y.V.S. Murthy Auditorium", 
    description: "An evening of serene classical melodies celebrating our cultural heritage and musical legacy. Featuring performances by distinguished faculty and guest artists of international repute.", 
    time: "4:00 PM onwards" 
  },
  { 
    id: 19, 
    date: "6-8 Apr 2026", 
    title: "Grand Cultural Programme", 
    convenor: "Prof. K. Saraswati Vidyardhi", 
    venue: "AU Convention Centre", 
    description: "Grand Cultural Programme as part of Andhra University Centenary Celebrations. A spectacular showcase of heritage music, classical dance, and drama. Chief Patron: Vice-Chancellor Prof. G. P. Raja Sekhar. Guest of Honor: Rector Prof. Pulipati King and Registrar Prof. K. Rambabu. All faculty, students, alumni and guests are warmly invited to witness this celebration of artistic excellence.", 
    time: "4:00 PM onwards" 
  },
  { id: 14, date: "18 Mar (Wed)", title: "IIC Cluster Meet", convenor: "Prof. G.M.J. Raju", venue: "Convention Centre", description: "Focusing on innovation and start-up culture across local university clusters. Encouraging young entrepreneurs to pitch revolutionary ideas.", time: "10:00 AM" },
  { id: 15, date: "22-23 Mar", title: "Geotechnical Solutions Workshop", convenor: "HoD Civil Engineering", venue: "YVS Murthy Auditorium", description: "Advancing geotechnical engineering practices for modern infrastructure challenges. Expert lectures and hands-on case study analysis.", time: "09:00 AM - 5:00 PM" },
  { id: 16, date: "22 Mar (Sun)", title: "International Food Festival", convenor: "Prof. S. Paul Douglas", venue: "Convention Centre", description: "A culinary journey with dishes from 40+ countries prepared by international students studying at Andhra University.", time: "11:00 AM onwards" },
  { id: 17, date: "25 Mar (Wed)", title: "Combined Convocation", convenor: "Prof. S. Paul Douglas", venue: "Convention Centre", description: "Celebrating the achievements of graduates in a combined 91st & 92nd convocation. A historic moment for centenary scholars.", time: "10:30 AM" },
  { id: 18, date: "26 Mar (Thu)", title: "International Cultural Festival", convenor: "Dean, International Affairs", venue: "Convention Centre", description: "A showcase of worldwide cultural diversity through performance and art by our global student community.", time: "5:00 PM onwards" },
  { id: 20, date: "9-10 Apr", title: "Tech Innovation Conclave", convenor: "Principal, AU College of Engg.", venue: "Convention Centre", description: "Exploring the frontier of technology and industry 5.0 with academic experts and industry leaders.", time: "10:00 AM onwards" },
  { id: 21, date: "18 Apr (Sat)", title: "Affiliated Colleges Day", convenor: "Dean, CDC", venue: "Engg. College Grounds", description: "A special day to honor the contribution of our affiliated college network to AU's 100-year legacy.", time: "全天" },
  { id: 22, date: "19 Apr (Sun)", title: "Arts & Commerce Centenary", convenor: "Principal, AU College of A & C", venue: "Engg. College Grounds", description: "Celebrating the legacy of the College of Arts & Commerce in our 100th year with alumni and current students.", time: "9:00 AM onwards" },
  { id: 23, date: "21 Apr (Tue)", title: "Science & Pharmacy Day", convenor: "Principal, AU College of S & T", venue: "Engg. College Grounds", description: "Honoring the scientific and pharmacological breakthroughs nurtured at AU over the past century.", time: "10:00 AM" },
  { id: 24, date: "22 Apr (Wed)", title: "Engineering Centenary Day", convenor: "Principals, AUCE & AUCEW", venue: "Engg. College Grounds", description: "Focusing on the engineering excellence that has defined AU for a century. Innovation awards and tech exhibition.", time: "09:30 AM" },
  { id: 25, date: "23 Apr (Thu)", title: "Law & IASE Celebration", convenor: "University Administration", venue: "Engg. College Grounds", description: "Marking 100 years of the College of Law and educational advancements at IASE with senior legal experts.", time: "11:00 AM" },
  { id: 26, date: "24-25 Apr", title: "Foundation Rehearsals", convenor: "Organizing Committee", venue: "Engg. College Grounds", description: "Grand rehearsals for the historic Centenary Foundation Day ceremony to ensure a flawless presentation.", time: "Morning sessions" },
  { id: 27, date: "26 Apr 2026 (Sun)", title: "Centenary Foundation Day", convenor: "University Administration", venue: "Engg. College Grounds", description: "The main historic celebration marking 100 years since the inception of Andhra University. Presence of national dignitaries.", time: "10:00 AM onwards" },
  { id: 28, date: "Planned", title: "Centenary Marathon", convenor: "Sports Coordinator", venue: "RK Beach", description: "Running for the legacy of AU across the coast of Visakhapatnam. Open to students, alumni, and citizens.", time: "06:00 AM" },
  { id: 29, date: "Planned", title: "Heritage Photo Walk", convenor: "Dept of Journalism", venue: "Main Campus", description: "Discovering the historic architecture and hidden stories of AU through the camera lens.", time: "TBA" },
  { id: 30, date: "Planned", title: "Science Expo 2026", convenor: "Science College Faculty", venue: "Science College Grounds", description: "Showcasing groundbreaking student projects and research discoveries for the public and schools.", time: "09:00 AM - 4:00 PM" },
  { id: 31, date: "Planned", title: "Alumni Global Meet", convenor: "AU Alumni Association", venue: "Convention Centre", description: "Welcoming back our distinguished alumni from across the world to discuss the next century's vision.", time: "TBA" },
  { id: 32, date: "Planned", title: "Centenary Souvenir Launch", convenor: "Senate Committee", venue: "Senate Hall", description: "Unveiling the official centenary photo book and souvenir volume documenting 100 years of AU.", time: "TBA" },
  { id: 33, date: "Planned", title: "Centenary Time Capsule", convenor: "Registrar's Office", venue: "Administration Block", description: "Preserving the architectural and intellectual essence of 2026 for the scholars of 2126.", time: "TBA" },
  { id: 34, date: "Planned", title: "Mega Job Fair", convenor: "Placement Cell", venue: "Engg. College Grounds", description: "Connecting our students with top tier global opportunities as part of the centenary year celebrations.", time: "09:00 AM" },
  { id: 35, date: "Mar 2026", title: "Youth Festival", convenor: "Student Welfare Dean", venue: "Gymnasium Grounds", description: "A vibrant competition of talent, art, and youth spirit across all university departments.", time: "TBA" },
  { id: 36, date: "Mar 2026", title: "Startup Pitch Day", convenor: "Innovation Cell", venue: "Incubation Center", description: "Pitching revolutionary ideas to a panel of venture capitalists and industry experts.", time: "10:00 AM" },
  { id: 37, date: "Apr 2026", title: "Women's Conclave", convenor: "Director, Women's Studies", venue: "AUCEW Auditorium", description: "Celebrating the role of women in leadership, science, and arts over AU's 100-year history.", time: "TBA" },
  { id: 38, date: "Planned", title: "Centenary Cricket Cup", convenor: "Director of Physical Ed.", venue: "Gold Field Ground", description: "An inter-departmental tournament celebrating a century of sportsmanship and university spirit.", time: "TBA" },
  { id: 39, date: "Planned", title: "Art Gallery Opening", convenor: "Head, Fine Arts", venue: "Fine Arts Museum", description: "Showcasing a century of student art, rare artifacts, and new visual expressions of AU.", time: "TBA" },
  { id: 40, date: "Mar 2026", title: "Green Campus Initiative", convenor: "Environmental Science Dept", venue: "Campus Wide", description: "Planting a 'Centenary Forest' to promote sustainability as we move into the next century.", time: "TBA" },
  { id: 41, date: "Apr 2026", title: "Centenary Book Fair", convenor: "Chief Librarian", venue: "Campus Library", description: "A week-long celebration of literature and knowledge with publishers from across India.", time: "TBA" },
  { id: 42, date: "Planned", title: "Digital Heritage Portal", convenor: "IT Infrastructure Team", venue: "Online Launch", description: "Unveiling the comprehensive digital archive of AU's century-long journey and major achievements.", time: "TBA" },
  { id: 43, date: "Planned", title: "Centenary Film Fest", convenor: "Journalism Dept", venue: "Convocation Hall", description: "Screening documentaries and historic films about the evolution and impact of Andhra University.", time: "TBA" },
  { id: 44, date: "Mar 2026", title: "Poetry Symposium", convenor: "Telugu Dept Head", venue: "Telugu Dept Hall", description: "A gathering of regional and national poets celebrating the literary legacy of our university.", time: "TBA" },
  { id: 45, date: "Apr 2026", title: "Centenary Gala Dinner", convenor: "University Board", venue: "Beachfront Grounds", description: "A formal dinner to honor faculty, staff, and distinguished guests of the centenary year.", time: "TBA" }
];

// --- Sub-components ---
const LotusSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C50 10 40 30 30 45C20 60 10 70 10 80C10 90 20 95 35 95C50 95 50 85 50 85C50 85 50 95 65 95C80 95 90 90 90 80C90 70 80 60 70 45C60 30 50 10 50 10Z" opacity="0.3" />
    <path d="M50 20C50 20 42 35 35 48C28 61 22 70 22 78C22 85 28 90 40 90C50 90 50 82 50 82C50 82 50 90 60 90C72 90 78 85 78 78C78 70 72 61 65 48C58 35 50 20 50 20Z" opacity="0.5" />
    <circle cx="50" cy="75" r="4" fill="currentColor" />
  </svg>
);

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = eventsData.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5ee] p-6 text-center">
        <LotusSVG className="w-24 h-24 text-gold/20 mb-8" />
        <h2 className="font-display text-4xl text-navy font-bold mb-4">Event Not Found</h2>
        <button onClick={() => navigate("/events")} className="px-10 py-4 bg-navy text-gold rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
          <ArrowLeft size={20} /> Back to All Events
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#f8f5ee] font-body text-navy selection:bg-gold/30 relative overflow-hidden pt-28 pb-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Back Navigation */}
        <button onClick={() => navigate("/events")} className="inline-flex items-center gap-2 text-gold hover:text-navy transition-all mb-10 font-bold text-sm uppercase tracking-widest group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Events
        </button>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-gold font-display text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Celebration Details</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#800000] leading-tight mb-8">
              {event.title}
            </h1>
            <div className="w-24 h-1.5 bg-gold rounded-full mb-8 shadow-[0_0_15px_rgba(201,163,71,0.3)]" />
            
            <p className="font-body text-gray-500 text-xl leading-relaxed italic border-l-4 border-gold/10 pl-6 py-2 max-w-4xl">
              "{event.description}"
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-12 xl:col-span-8 order-2 lg:order-1">
              <section className="bg-white/40 p-8 sm:p-12 rounded-[2.5rem] border border-gold/10 relative overflow-hidden">
                {/* Subtle Watermark Decoration */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 text-gold/5 pointer-events-none -rotate-12 translate-x-8 -translate-y-8">
                  <LotusSVG className="w-full h-full" />
                </div>
              
                <h3 className="font-display text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                  <Info size={24} className="text-gold" /> About This Event
                </h3>
                
                <div className="prose prose-lg max-w-none text-gray-600 font-body space-y-6 lg:space-y-8 leading-relaxed">
                  <p>
                    As Andhra University celebrates its historic <strong>Centenary Milestone</strong>, we are proud to present {event.title}. 
                    This event is designed to foster a spirit of academic inquiry and cultural celebration among our students, faculty, and the global alumni network.
                  </p>
                  <p>
                    {event.description}
                  </p>
                  <div className="pt-8 border-t border-gold/5 flex flex-col md:flex-row gap-8">
                     <div className="space-y-2">
                        <h4 className="font-display font-bold text-navy text-sm uppercase tracking-widest text-gold">Heritage Quote</h4>
                        <p className="italic text-gray-400">"Honoring the past, celebrating the present, and envisioning the next century of excellence in higher education."</p>
                     </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-12 xl:col-span-4 order-1 lg:order-2">
              <div className="bg-[#0A1F44] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl space-y-8 sticky top-32 overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 text-gold/10 pointer-events-none -translate-y-4 translate-x-4">
                  <LotusSVG className="w-full h-full" />
                </div>
                
                <h3 className="font-display text-2xl sm:text-3xl font-bold relative z-10">Event Particulars</h3>
                
                <div className="space-y-6 sm:space-y-10 relative z-10">
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <Calendar className="text-gold group-hover:text-navy transition-colors" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1 font-body">Date</p>
                      <p className="font-display text-lg font-bold text-gold-light leading-snug">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <Clock className="text-gold group-hover:text-navy transition-colors" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1 font-body">Scheduled Time</p>
                      <p className="font-display text-lg font-bold text-white leading-snug">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <MapPin className="text-gold group-hover:text-navy transition-colors" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1 font-body">Venue Location</p>
                      <p className="font-display text-lg font-bold text-white leading-snug">{event.venue}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <User className="text-gold group-hover:text-navy transition-colors" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1 font-body">Convenor / Coordinator</p>
                      <p className="font-display text-lg font-bold text-white leading-snug">{event.convenor}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 space-y-4 sm:space-y-6 relative z-10">
                  <a href="/registration" className="flex items-center justify-center gap-3 w-full py-5 bg-gold text-[#0A1F44] font-black rounded-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-xl text-xs sm:text-sm uppercase tracking-widest">
                    <Globe size={20} /> REGISTER FOR THIS EVENT
                  </a>
                  <button className="flex items-center justify-center gap-3 w-full py-4 border-2 border-gold text-gold font-black rounded-2xl hover:bg-gold hover:text-navy transition-all text-xs sm:text-sm uppercase tracking-widest">
                    <Download size={20} /> DOWNLOAD DETAILS
                  </button>
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="mt-12 hidden lg:flex items-center gap-4 opacity-10">
                 <div className="h-[1px] flex-grow bg-gold" />
                 <LotusSVG className="w-8 h-8 text-gold" />
                 <div className="h-[1px] flex-grow bg-gold" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetail;
