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

      {/* Hero Section */}
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

          <h3 className="font-display text-2xl text-navy text-center font-bold mb-8">
            Eligibility
          </h3>

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
                <h4 className="font-display text-lg text-navy font-semibold">
                  {item.title}
                </h4>
                <p className="text-sm font-body text-muted-foreground mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl">

          <h3 className="font-display text-2xl text-navy text-center font-bold mb-8">
            Required Documents
          </h3>

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
                  <span className="font-body text-sm text-foreground">
                    {doc}
                  </span>
                </motion.div>
              ))}

            </div>

            <div className="text-center mt-8">

              <motion.a
                href="/declaration-form.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-gold font-body font-semibold rounded-full hover:bg-navy-light transition-colors"
              >
                <Download size={18} />
                Download Declaration Form
              </motion.a>

            </div>

          </div>

        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle
            title="Official Registration Form"
            subtitle="Click the button below to fill the official Google Form and participate in the celebrations"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10 text-center border border-gold/30 shadow-2xl bg-gradient-to-br from-navy/5 to-gold/5"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-gold" size={40} />
              </div>
              <h3 className="font-display text-2xl text-navy font-bold mb-4">
                Andhra University Centenary Registration
              </h3>
              <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
                The registration process is hosted on Google Forms. Please ensure you have your required documents ready before proceeding with the application.
              </p>
            </div>

            <motion.a
              href="https://forms.gle/qsUkfoFCzar29uXR9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-navy text-gold font-body text-lg font-bold rounded-full hover:bg-navy-light transition-all shadow-lg"
            >
              Start Registration Process
              <Download size={20} className="rotate-[-90deg]" />
            </motion.a>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                Secure Form
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                Document Upload Required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                Verification within 48h
              </span>
            </div>
          </motion.div>

          <p className="text-center text-xs text-muted-foreground font-body mt-12 max-w-2xl mx-auto">
            Note: Only students from Andhra University affiliated colleges are
            eligible to register. Your registration is subject to document verification by the
            organizing committee.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Registration;