import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import auLogo from "@/assets/au-logo.png";
import auCentenary from "@/assets/og-image.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Fest", path: "/about-fest" },
  { name: "Events", path: "/events" },
  { name: "Organizing Team", path: "/organizing-team" },
  { name: "Registration", path: "/registration" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-navy/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Left: AU Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={auLogo} alt="Andhra University" className="h-10 md:h-14 object-contain" />
          <div className="hidden sm:block">
            <p className="text-gold font-display text-[10px] md:text-sm font-bold leading-tight uppercase tracking-[0.2em] mb-0.5">Andhra University</p>
            <p className="text-gold-light text-xl md:text-2xl font-bold leading-none">శతాబ్ది మహోత్సవం</p>
          </div>
        </Link>

        {/* Center: Nav Links (desktop) */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${location.pathname === link.path
                  ? "bg-gold text-navy"
                  : "text-gold-light hover:text-gold hover:bg-gold/10"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Centenary Logo */}
        <div className="flex items-center gap-3">
          <img src={auCentenary} alt="100 Years" className="h-10 md:h-14 object-contain rounded" />
          <button
            className="lg:hidden text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-gold/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-body font-medium transition-all ${location.pathname === link.path
                      ? "bg-gold text-navy"
                      : "text-gold-light hover:bg-gold/10"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
