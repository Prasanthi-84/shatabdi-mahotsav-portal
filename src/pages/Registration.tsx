import { motion, type Variants } from "framer-motion";
import { FileText, GraduationCap, Building2, Users, Download, ExternalLink, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

/* ─── Data ─────────────────────────────────────────────── */
const eligibility = [
  {
    icon: GraduationCap,
    title: "AU Students",
    desc: "Students enrolled in Andhra University affiliated colleges are eligible to participate.",
    badge: "Primary",
  },
  {
    icon: Building2,
    title: "300+ Colleges",
    desc: "Students from all 300+ affiliated colleges across the region can register and compete.",
    badge: "Eligible",
  },
  {
    icon: Users,
    title: "Multiple Events",
    desc: "Participants can register and compete in more than one event across the celebration.",
    badge: "Allowed",
  },
];

const documents = [
  { label: "Bonafide Certificate", note: "From your respective college" },
  { label: "ID Proof", note: "Aadhaar Card or College ID" },
  { label: "Registration Number", note: "Andhra University reg. number" },
  { label: "College Name", note: "Full official name of your college" },
];



/* ─── Animation variants ────────────────────────────────── */
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] },
  }),
};

// Google Form URLs
const GOOGLE_FORM_SHARE = "https://forms.gle/qsUkfoFCzar29uXR9";

/* ─── Component ─────────────────────────────────────────── */
const Registration = () => {
  return (
    <div className="pt-20 overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────── */}
      <section className="relative py-28 bg-navy overflow-hidden">
        {/* decorative rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-gold/10 opacity-40" />
          <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full border border-gold/15 opacity-40" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-gold/10 opacity-30 translate-x-1/3 translate-y-1/3" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 40px,hsl(43 72% 52%/1) 40px,hsl(43 72% 52%/1) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,hsl(43 72% 52%/1) 40px,hsl(43 72% 52%/1) 41px)",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 rounded-full border border-gold/50 text-gold text-sm font-body tracking-[0.25em] uppercase mb-6"
          >
            శతాబ్ది మహోత్సవం · 1926–2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            Event{" "}
            <span className="text-gradient-gold">Registration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-body text-gold-light/80 text-lg md:text-xl max-w-2xl mx-auto mt-2"
          >
            Centenary Celebrations – Register now and be part of history
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-8 w-24 h-1 rounded-full bg-gradient-gold"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-gold text-navy font-body font-bold rounded-full shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:scale-105 transition-all duration-300"
            >
              Register Now <ChevronRight size={18} />
            </a>
            <a
              href="/declaratioform.pdf"
              download="AU-Centenary-Declaration-Form.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/50 text-gold font-body font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300"
            >
              <Download size={18} /> Declaration Form
            </a>
          </motion.div>
        </div>
      </section>

      {/* gold divider */}
      <div className="gold-divider" />

      {/* ── 2. ELIGIBILITY ────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Eligibility Criteria"
            subtitle="Who can participate in the Centenary Celebrations?"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {eligibility.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0 16px 40px hsl(43 72% 52% / 0.2)" }}
                className="glass-card rounded-2xl p-8 border border-gold/20 text-center relative overflow-hidden group transition-all duration-300"
              >
                {/* hover glow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-5 shadow-lg shadow-navy/30">
                    <item.icon className="text-gold" size={30} />
                  </div>
                  <span className="inline-block px-3 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-body font-semibold tracking-wider uppercase mb-3">
                    {item.badge}
                  </span>
                  <h3 className="font-display text-xl text-navy font-bold mb-2">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. REQUIRED DOCUMENTS ─────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle
            title="Required Documents"
            subtitle="Please keep the following documents ready before filling the registration form"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 border border-gold/20 shadow-gold"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <motion.div
                  key={doc.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gold/10 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy text-sm">{doc.label}</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{doc.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Alert */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-gold/5 border border-gold/20"
            >
              <AlertCircle className="text-gold shrink-0 mt-0.5" size={18} />
              <p className="text-xs font-body text-muted-foreground leading-relaxed">
                All documents will be verified by the organizing committee. Incomplete or false documents may result in disqualification.
              </p>
            </motion.div>

            {/* Download Button */}
            <div className="text-center mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="/declaratioform.pdf"
                download="AU-Centenary-Declaration-Form.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-gold font-body font-bold rounded-full shadow-lg shadow-navy/30 hover:shadow-navy/50 hover:bg-navy-light transition-all duration-300 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Declaration Form
              </motion.a>
              <p className="text-xs text-muted-foreground font-body mt-3">
                Download the official PDF form, fill it, and get it signed by your college office.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* gold divider */}
      <div className="gold-divider" />

      {/* ── 4. GOOGLE FORM ────────────────────────────────── */}
      <section id="register" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle
            title="Official Registration Form"
            subtitle="Fill in your details below to register for the Centenary Celebrations events"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-xl shadow-navy/10"
          >
            {/* Form header bar */}
            <div className="bg-navy px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                  <FileText className="text-gold" size={16} />
                </div>
                <div>
                  <p className="text-white font-body font-semibold text-sm">AU Centenary – Registration Form</p>
                  <p className="text-gold/60 font-body text-xs">Powered by Google Forms</p>
                </div>
              </div>
              <a
                href={GOOGLE_FORM_SHARE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold/15 text-gold font-body text-xs font-semibold hover:bg-gold/25 transition-colors"
              >
                <ExternalLink size={13} />
                Open in Tab
              </a>
            </div>

            {/* iFrame – the short link is used so the real form ID is resolved automatically */}
            <div className="w-full bg-white">
              <iframe
                src={GOOGLE_FORM_SHARE}
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="AU Centenary Registration Form"
                className="block w-full"
                allow="camera; microphone"
              >
                Loading form…
              </iframe>
            </div>

            {/* Fallback */}
            <div className="bg-cream border-t border-gold/20 px-6 py-5 flex flex-col items-center gap-4">
              <div className="text-center">
                <p className="text-sm font-body text-navy font-semibold mb-2">Direct Registration Link:</p>
                <code className="px-4 py-2 bg-white border border-gold/20 rounded-lg text-gold font-mono text-xs break-all block">
                  {GOOGLE_FORM_SHARE}
                </code>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 mt-2">
                <p className="text-xs font-body text-muted-foreground text-center sm:text-left">
                  Form not loading? Click the button to open it directly in a new tab.
                </p>
                <a
                  href={GOOGLE_FORM_SHARE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-gold font-body font-semibold text-sm rounded-full hover:bg-navy-light transition-colors shrink-0"
                >
                  Open Form in New Tab <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. FOOTER NOTE ────────────────────────────────── */}
      <section className="py-10 bg-navy">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
              <AlertCircle className="text-gold" size={20} />
            </div>
            <p className="text-gold-light/80 font-body text-sm leading-relaxed max-w-xl">
              Only students from <span className="text-gold font-semibold">Andhra University affiliated colleges</span> are eligible to participate.
              All documents will be verified by the organizing committee before final confirmation.
            </p>
            <div className="mt-2 flex items-center gap-4 text-gold/40 font-body text-xs">
              <span>Andhra University · Visakhapatnam</span>
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              <span>Shatabdi Mahotsav 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Registration;
