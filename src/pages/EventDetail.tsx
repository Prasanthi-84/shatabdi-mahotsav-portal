import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, MapPin, User, Download, Globe, Clock, ArrowLeft, Phone, Mail, Info
} from "lucide-react";
import { eventsData } from "@/data/eventsData";

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
                    {event.about || event.description}
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
                  
                  {event.time && (
                    <div className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                        <Clock className="text-gold group-hover:text-navy transition-colors" size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1 font-body">Scheduled Time</p>
                        <p className="font-display text-lg font-bold text-white leading-snug">{event.time}</p>
                      </div>
                    </div>
                  )}

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
                  <Link to="/registration" className="flex items-center justify-center gap-3 w-full py-5 bg-gold text-[#0A1F44] font-black rounded-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-xl text-xs sm:text-sm uppercase tracking-widest">
                    <Globe size={20} /> REGISTER FOR THIS EVENT
                  </Link>
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
