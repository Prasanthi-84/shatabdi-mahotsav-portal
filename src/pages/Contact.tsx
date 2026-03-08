import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle title="Contact Us" subtitle="We'd love to hear from you" light />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl text-navy font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-body text-sm text-foreground mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gold/30 bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-body text-sm text-foreground mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gold/30 bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-gold font-body font-semibold rounded-full hover:bg-navy-light transition-colors"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl text-navy font-bold mb-6">Find Us</h3>
              <div className="rounded-xl overflow-hidden border border-gold/20 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3!2d83.3197!3d17.7334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943e2b1c9a1f5%3A0x5e4e7e5e4e7e5e4e!2sAndhra+University!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="300"
                  className="border-0"
                  loading="lazy"
                  title="Andhra University Map"
                />
              </div>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Andhra University, Visakhapatnam, Andhra Pradesh, India – 530003" },
                  { icon: Phone, text: "0891-2844197, 2755993" },
                  { icon: Mail, text: "enquiry@andhrauniversity.edu.in" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="text-gold mt-1 shrink-0" size={18} />
                    <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
