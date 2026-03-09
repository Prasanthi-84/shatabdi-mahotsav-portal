import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";

import campusGate from "@/assets/campus-gate.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import convocation from "@/assets/convocation.jpg";
import library from "@/assets/library.webp";
import engineering from "@/assets/engineering.jpg";


const AboutFest = () => {
  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="About the Fest"
            subtitle="Shatabdi Mahotsav – Celebrating 100 Years of Excellence"
            light
          />
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-background">

        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* Moving Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

              <motion.img
                src={campusGate}
                alt="AU Gate"
                className="w-full h-40 object-cover rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <motion.img
                src={campusAerial}
                alt="Campus Aerial"
                className="w-full h-40 object-cover rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <motion.img
                src={convocation}
                alt="Convocation"
                className="w-full h-40 object-cover rounded-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.img
                src={library}
                alt="Library"
                className="w-full h-40 object-cover rounded-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              />

              <motion.img
                src={engineering}
                alt="Engineering"
                className="w-full h-40 object-cover rounded-xl sm:col-span-2"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

            </div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              {/* VC Highlight */}
              <div className="flex items-center gap-4 mb-6 bg-cream p-4 rounded-xl shadow-sm border border-gold/20">

                <motion.img
                  src="https://www.andhrauniversity.edu.in/administration/Prof%20G%20P%20Raja%20Sekhar.jpeg"
                  alt="Vice Chancellor"
                  className="w-20 h-20 object-cover rounded-full border-2 border-gold"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div>
                  <p className="text-sm text-muted-foreground">
                    Presented under the leadership of
                  </p>

                  <h3 className="font-semibold text-navy">
                    Prof. G. P. Raja Sekhar
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    Vice-Chancellor, Andhra University
                  </p>
                </div>

              </div>

              <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">
                Centenary Celebrations <span className="text-gold">1926–2026</span>
              </h2>

              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Andhra University celebrates its historic milestone of completing
                <span className="text-navy font-semibold"> 100 years of academic excellence</span>
                through the grand Shatabdi Mahotsav.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                The festival provides a platform for
                <span className="text-navy font-semibold"> student collaboration,
                academic exchange, and leadership development</span>.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Students from more than
                <span className="text-navy font-semibold"> 300 affiliated colleges</span>
                participate in various cultural, academic, and social events
                that celebrate the spirit of Andhra University.
              </p>

              <Link
                to="/events"
                className="inline-block px-8 py-3 bg-navy text-gold font-semibold rounded-full hover:bg-navy-light transition-colors"
              >
                Explore Events
              </Link>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutFest;