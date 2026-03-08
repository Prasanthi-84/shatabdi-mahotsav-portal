import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { FileText, GraduationCap, Building2, Users, Download } from "lucide-react";

const eligibility = [
  { icon: GraduationCap, title: "AU Students", desc: "Students from AU affiliated colleges" },
  { icon: Building2, title: "300+ Colleges", desc: "All affiliated colleges are eligible" },
  { icon: Users, title: "Multiple Events", desc: "Participate in multiple events" },
];

const documents = [
  "Bonafide Certificate",
  "ID Proof (Aadhaar / College ID)",
  "Registration Number",
  "College Name",
];

const Registration = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Event Registration"
            subtitle="Centenary Celebrations – Register now and be part of history"
            light
          />
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="font-display text-2xl text-navy text-center font-bold mb-8">Eligibility</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibility.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 text-center border border-gold/20"
              >
                <item.icon className="mx-auto mb-3 text-gold" size={32} />
                <h4 className="font-display text-lg text-navy font-semibold">{item.title}</h4>
                <p className="text-sm font-body text-muted-foreground mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="font-display text-2xl text-navy text-center font-bold mb-8">Required Documents</h3>
          <div className="glass-card rounded-xl p-8 border border-gold/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <motion.div
                  key={doc}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background"
                >
                  <FileText size={18} className="text-gold shrink-0" />
                  <span className="font-body text-sm text-foreground">{doc}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-gold font-body font-semibold rounded-full hover:bg-navy-light transition-colors"
              >
                <Download size={18} />
                Download Declaration Form
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Embed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="font-display text-2xl text-navy text-center font-bold mb-8">Registration Form</h3>
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-gold">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdDummyFormId/viewform?embedded=true"
              width="100%"
              height="800"
              className="border-0 w-full"
              title="Registration Form"
            >
              Loading…
            </iframe>
          </div>
          <p className="text-center text-sm text-muted-foreground font-body mt-4">
            If the form doesn't load, please{" "}
            <a href="#" className="text-gold underline">click here</a> to open it in a new tab.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Registration;
