import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import campusGate from "@/assets/campus-gate.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import convocation from "@/assets/convocation.jpg";
import { Link } from "react-router-dom";

const AboutFest = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle title="About the Fest" subtitle="Shatabdi Mahotsav – Celebrating 100 Years of Excellence" light />
        </div>
      </section>

      {/* Two Column */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={campusGate}
                alt="AU Main Gate"
                className="rounded-xl w-full h-40 object-cover col-span-2"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={campusAerial}
                alt="Campus Aerial View"
                className="rounded-xl w-full h-40 object-cover"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={convocation}
                alt="Convocation"
                className="rounded-xl w-full h-40 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl text-navy font-bold mb-6">
                Centenary Celebrations 1926–2026
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Andhra University, established in 1926, marks its 100th anniversary with the grand Shatabdi Mahotsav.
                This three-day celebration honors a century of academic excellence, research breakthroughs, and
                cultural heritage that has shaped generations of scholars, scientists, and leaders.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                The festivities include cultural performances, academic conferences, sports events, alumni reunions,
                and much more. Join us in celebrating this historic milestone as we look back at our glorious past
                and envision an even brighter future.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                From the visionary leadership of Sir C.R. Reddy to the cutting-edge research of today,
                Andhra University continues to be a beacon of knowledge and innovation.
              </p>
              <Link
                to="/events"
                className="inline-block px-8 py-3 bg-navy text-gold font-body font-semibold rounded-full hover:bg-navy-light transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFest;
