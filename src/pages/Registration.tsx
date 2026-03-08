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

      {/* Registration Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Official Registration Form" subtitle="Please fill in your details to participate in the Centenary Celebrations" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-gold/20 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">AU Registration Number</label>
                  <input
                    type="text"
                    placeholder="XXXX-XXXX-XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-navy mb-2">College Name</label>
                <input
                  type="text"
                  placeholder="Enter your affiliated college name"
                  className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-sm"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">Department</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-sm appearance-none">
                    <option>Engineering</option>
                    <option>Science & Technology</option>
                    <option>Arts & Commerce</option>
                    <option>Law</option>
                    <option>Pharmacy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-navy mb-2">Category</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-sm appearance-none">
                    <option>Student</option>
                    <option>Alumni</option>
                    <option>Faculty</option>
                    <option>Staff</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-navy mb-2">Interested Events</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Cycling Rally", "Music Night", "Rangoli", "Walkathon", "Laser Show", "Art Expo"].map((event) => (
                    <label key={event} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold" />
                      <span className="text-xs font-body text-muted-foreground group-hover:text-navy transition-colors">{event}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-12 py-4 bg-navy text-gold font-body font-bold rounded-full shadow-lg hover:shadow-gold/20 transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    import("sonner").then(({ toast }) => toast.success("Registration Successful! Welcome to the Centenary Celebrations."));
                  }}
                >
                  Submit Registration
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          <p className="text-center text-xs text-muted-foreground font-body mt-8">
            Note: All registrations are subject to verification with university records. 
            For help, please visit the <a href="/contact" className="text-gold underline">Contact Page</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Registration;

