import { motion,useScroll,useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Award, BookOpen, Users, Globe, GraduationCap, Building2, MapPin, Calendar, Star } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import TimeZoneClocks from "@/components/TimeZoneClocks";
import SectionTitle from "@/components/SectionTitle";
import campusHero from "@/assets/campus-hero.jpg";
import campusGate from "@/assets/campus-gate.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import library from "@/assets/library.webp";
import engineering from "@/assets/engineering.jpg";
import convocation from "@/assets/convocation.jpg";
import schoolOfBusiness from "@/assets/School of Bussiness.jpg";
import aucew from "@/assets/aucew.jpg";
import department from "@/assets/deptarment.webp";
import lawClg from "@/assets/lawclg.jpeg";
import pharmacy from "@/assets/pharmacy-profile.jpg";
import { useRef } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const timelineEvents = [
  { year: "1926", event: "Andhra University established", highlight: true },
  { year: "1927", event: "Arts and Science departments started" },
  { year: "1931", event: "Headquarters moved to Waltair" },
  { year: "1938", event: "AU College of Engineering established" },
  { year: "1946", event: "Science and technology expansion" },
  { year: "1956", event: "Formation of Andhra Pradesh boosted growth" },
  { year: "1972", event: "School of Distance Education established" },
  { year: "1986", event: "Recognized as major research university by UGC" },
  { year: "1994", event: "International collaborations started" },
  { year: "2003", event: "IT and modern technology programs introduced" },
  { year: "2007", event: "Advanced biotechnology research centers" },
  { year: "2016", event: "90 years of Andhra University celebrated" },
  { year: "2020", event: "Expansion into AI and Data Science" },
  { year: "2026", event: "Centenary Celebrations – Shatabdi Mahotsav", highlight: true },
];


const stats = [
  { icon: Calendar, label: "Established", value: "1926" },
  { icon: MapPin, label: "Location", value: "Visakhapatnam" },
  { icon: Building2, label: "Affiliated Colleges", value: "300+" },
  { icon: GraduationCap, label: "Programs", value: "100+" },
];

const achievements = [
  { icon: Award, title: "One of India's Oldest", desc: "Among the most historic universities in the country" },
  { icon: Star, title: "Top Ranked", desc: "Ranked among top universities in India" },
  { icon: Globe, title: "Marine Sciences", desc: "Strong research in Marine Sciences globally" },
  { icon: Users, title: "Global Alumni", desc: "Extensive worldwide alumni network" },
  { icon: BookOpen, title: "100+ Programs", desc: "Comprehensive academic offerings" },
  { icon: Building2, title: "300+ Colleges", desc: "Vast network of affiliated institutions" },
];

const campusImages = [
  { src: campusGate, label: "Main Gate" },
  { src: campusAerial, label: "Aerial View" },
  { src: library, label: "AU Library" },
  { src: engineering, label: "Engineering College" },
  { src: convocation, label: "Convocation" },
  { src: schoolOfBusiness, label: "School of Business" },
  { src: aucew, label: "AU College of Engineering" },
  { src: department, label: "Departments" },
  { src: lawClg, label: "Law College" },
  { src: pharmacy, label: "Pharmacy College" },
];

const upcomingEvents = [
  { day: "Day 1 – April 18", highlights: ["Cycling Rally", "Inauguration of Stalls", "Cultural Performances", "Sid Sriram Live Concert"] },
  { day: "Day 2 – April 19", highlights: ["Rangoli Competition", "Tribute to Ghantasala", "Dhimsa Dance", "Classical Cultural Performances"] },
  { day: "Day 3 – April 20", highlights: ["Walkathon", "Blood Donation Camp", "Magic Show", "Laser Show & DJ Night"] },
];

const Index = () => {
     const ref = useRef(null);

     const { scrollYProgress } = useScroll({
         target: ref,
         offset: ["start center", "end center"]
      });

const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
const ballPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://andhrauniversity.edu.in/img/gallery/455.jpeg" alt="Andhra University Campus" className="w-full h-full object-cover brightness-150" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 rounded-full border border-gold/100 text-gold text-lg font-body tracking-widest uppercase">
              శతాబ్ది మహోత్సవం
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-4"
          >
            Andhra University
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-2xl md:text-3xl text-gold-light italic"
          >
            100 Years of Excellence
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-6 mt-8 text-gold/80 font-display text-xl md:text-2xl tracking-[0.3em]"
          >
            <span>1926</span>
            <div className="w-16 h-px bg-gold/80" />
            <span>2026</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-gold-light/80 font-body text-sm md:text-base max-w-xl mx-auto"
          >
            Celebrating a century of knowledge, innovation, and intellectual freedom.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-10"
          >
            <Link
              to="/registration"
              className="inline-block px-8 py-3 bg-gold text-navy font-body font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              Register for Centenary Events
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 text-gold/60"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Countdown */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <SectionTitle title="Countdown to Celebrations" subtitle="April 18, 2026 – Mark Your Calendars!" />
          <CountdownTimer />
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold text-sm font-body tracking-widest uppercase">Our Founder</span>
              <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mt-2">
                Sir C.R. Reddy
              </h2>
              <p className="text-muted-foreground font-body text-sm mt-1">
                Cattamanchi Ramalinga Reddy – First Vice Chancellor
              </p>
              <blockquote className="mt-6 pl-4 border-l-4 border-gold italic font-display text-lg text-foreground/80">
                "A university must be the home of free thought, fearless inquiry, and intellectual adventure."
              </blockquote>
              <p className="mt-6 font-body text-muted-foreground leading-relaxed">
                Sir C.R. Reddy envisioned Andhra University as a place where knowledge, innovation, and intellectual
                freedom flourish. His leadership laid the foundation for one of India's most respected universities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl border-2 border-gold/20 rotate-3" />
               <motion.img
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Sir_Reddy.jpg/500px-Sir_Reddy.jpg"
                 alt="Sir C.R. Reddy"
                 className="w-72 h-80 object-cover rounded-2xl shadow-gold relative z-10"
                 initial={{ opacity: 0, x: 80 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 animate={{ y: [0, -10, 0] }}
                 viewport={{ once: true }}
                 transition={{
                     x: { duration: 1 },
                     y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About AU */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="About Andhra University"
            subtitle="Established on 26 April 1926, one of the oldest and most prestigious universities in India."
            light
          />
          <p className="text-center text-gold-light/70 font-body max-w-3xl mx-auto mb-12">
            Located in Visakhapatnam, Andhra University has played a major role in shaping education, research,
            and innovation in South India. Known for Engineering, Marine Sciences, Geology, Pharmacy, and Management.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-gold/20 bg-navy-light/50"
              >
                <stat.icon className="mx-auto mb-3 text-gold" size={28} />
                <p className="font-display text-2xl text-gold font-bold">{stat.value}</p>
                <p className="text-gold-light/60 text-xs font-body mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
        <section ref={ref} className="py-24 bg-cream">

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-display text-center text-navy font-bold mb-16">
          Our Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Background Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold/20 -translate-x-1/2"/>

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-1 bg-gold -translate-x-1/2 origin-top"
          />

          {/* Moving Ball */}
          <motion.div
            style={{ top: ballPosition }}
            className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"
          />

          {timelineEvents.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center mb-20 gap-8 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >

              <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>

                <div
                  className={`inline-block p-6 rounded-xl border ${
                    event.highlight
                      ? "bg-navy border-gold shadow-[0_0_25px_rgba(212,175,55,0.6)]"
                      : "bg-white border-gold/20"
                  }`}
                >

                  <h3
                    className={`text-xl font-display font-bold ${
                      event.highlight ? "text-gold" : "text-navy"
                    }`}
                  >
                    {event.year}
                  </h3>

                  <p className="text-lg mt-2 text-gray-600">
                    {event.event}
                  </p>

                </div>

              </div>

              <div className="flex-1"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>

      {/* Campus Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Campus" subtitle="Explore the beautiful campuses of Andhra University" />
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {campusImages.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="snap-center shrink-0 w-72 md:w-80 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-gold font-display text-lg">{img.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle title="Achievements" subtitle="A legacy of excellence spanning 100 years" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl border border-gold/20 bg-navy-light/30 hover:border-gold/50 transition-colors"
              >
                <a.icon className="text-gold mb-4" size={32} />
                <h3 className="font-display text-lg text-gold font-semibold">{a.title}</h3>
                <p className="text-gold-light/60 font-body text-sm mt-2">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionTitle title="Centenary Celebration Events" subtitle="April 18–20, 2026 – Three Days of Grand Celebrations" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((evt, i) => (
              <motion.div
                key={evt.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-xl p-6 border border-gold/20"
              >
                <h3 className="font-display text-xl text-navy font-bold mb-4">{evt.day}</h3>
                <ul className="space-y-2">
                  {evt.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/events"
              className="inline-block px-8 py-3 bg-navy text-gold font-body font-semibold rounded-full hover:bg-navy-light transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Time Zones */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle title="Global Time Zones" subtitle="Join us from anywhere in the world" />
          <div className="max-w-3xl mx-auto">
            <TimeZoneClocks />
          </div>
        </div>
      </section>

      {/* Visitor Counter */}
      <section className="py-12 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3"
          >
            <Users className="text-gold" size={20} />
            <span className="text-gold-light font-body text-sm">
              Website Visitors: <span className="text-gold font-display text-lg font-bold">12,847</span>
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
