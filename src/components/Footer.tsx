import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-gold-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-2xl text-gold mb-4">Andhra University</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Celebrating 100 years of excellence in education, research, and innovation.
              Shatabdi Mahotsav 1926–2026.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Organizing Team", path: "/organizing-team" },
                { name: "Registration", path: "/registration" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>0891-2844197</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>enquiry@andhrauniversity.edu.in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Shatabdi Mahotsav</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              April 18–20, 2026<br />
              Andhra University Campus<br />
              Visakhapatnam
            </p>
            <Link
              to="/registration"
              className="inline-block mt-4 px-6 py-2 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />

        <div className="text-center text-xs opacity-60">
          <p>© 2026 Andhra University. All Rights Reserved. | Shatabdi Mahotsav 1926–2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
