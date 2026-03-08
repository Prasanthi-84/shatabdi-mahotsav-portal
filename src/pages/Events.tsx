import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { ChevronDown, Check, X as XIcon } from "lucide-react";

const eventDays = [
  {
    day: "Day 1 – 18 April",
    color: "from-navy to-navy-light",
    events: [
      "Cycling Rally (AU Convention Centre → Beach Road Bheemili)",
      "Inauguration of Stalls",
      "Tree Plantation",
      "Music by Live Bands",
      "Cultural Performances",
      "Address by Vice Chancellor",
      "Chief Guest Shri N. Lokesh",
      "Sid Sriram Live Concert",
      "Vote of Thanks",
    ],
  },
  {
    day: "Day 2 – 19 April",
    color: "from-navy-light to-navy",
    events: [
      "Rangoli Competition",
      "Winner Announcement",
      "Tribute to Ghantasala",
      "Cultural Performances",
      "Address by Home Minister Shri Anitha",
      "Dhimsa Dance by Araku Team",
      "Address by Shri Pawan Kalyan",
      "Classical Cultural Performances",
    ],
  },
  {
    day: "Day 3 – 20 April",
    color: "from-navy to-navy-light",
    events: [
      "Walkathon (AU Convention → RK Beach)",
      "Blood Donation Camp",
      "Cultural Programs",
      "Address by MP Shri M. Bharat",
      "Magic Show",
      "Address by MLA Shri Vamsi Yadav",
      "Laser Show",
      "Address by Shri K. Ram Mohan Naidu",
      "DJ Night",
    ],
  },
];

const dosAndDonts = [
  {
    event: "Cycling Rally",
    dos: ["Wear helmet", "Follow route markers", "Carry water bottle", "Start on time"],
    donts: ["No rash riding", "Don't block traffic", "No overtaking in crowded areas"],
  },
  {
    event: "Tree Plantation",
    dos: ["Bring gardening gloves", "Follow instructions", "Water the sapling"],
    donts: ["Don't uproot existing plants", "No littering", "Don't leave without planting"],
  },
  {
    event: "Music Bands",
    dos: ["Enjoy responsibly", "Stay hydrated", "Follow security instructions"],
    donts: ["No pushing or shoving", "No outside food in concert area", "No recording for commercial use"],
  },
  {
    event: "Cultural Performances",
    dos: ["Be on time", "Appreciate performers", "Stay seated"],
    donts: ["No flash photography", "Don't disturb performers", "No loud conversations"],
  },
  {
    event: "Rangoli Competition",
    dos: ["Register in advance", "Bring own materials", "Complete within time"],
    donts: ["No copying designs", "Don't disturb others", "No use of stencils"],
  },
  {
    event: "Walkathon",
    dos: ["Wear comfortable shoes", "Carry ID", "Stay hydrated"],
    donts: ["No running on busy roads", "Don't litter", "No shortcuts"],
  },
  {
    event: "Blood Donation Camp",
    dos: ["Eat well before donating", "Carry ID proof", "Rest after donation"],
    donts: ["Don't donate on empty stomach", "No alcohol 24hrs before", "Don't hide medical conditions"],
  },
  {
    event: "Magic Show",
    dos: ["Arrive early for good seats", "Enjoy the show", "Keep phones silent"],
    donts: ["No recording", "Don't reveal tricks", "No disruptions"],
  },
  {
    event: "Laser Show",
    dos: ["Find a good viewing spot", "Follow safety guidelines"],
    donts: ["Don't look directly at laser source", "No flash photography", "Don't cross barriers"],
  },
  {
    event: "DJ Night",
    dos: ["Have fun responsibly", "Stay hydrated", "Follow security rules"],
    donts: ["No substance abuse", "No aggressive behavior", "Don't damage property"],
  },
];

const Events = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <SectionTitle title="Centenary Celebration Events" subtitle="Three days of grand celebrations – April 18-20, 2026" light />
        </div>
      </section>

      {/* Event Days */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-12 max-w-4xl">
          {eventDays.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: di * 0.15 }}
              className="rounded-2xl overflow-hidden border border-gold/20 shadow-gold"
            >
              <div className={`bg-gradient-to-r ${day.color} p-6`}>
                <h3 className="font-display text-2xl text-gold font-bold">{day.day}</h3>
              </div>
              <div className="p-6 bg-card space-y-3">
                {day.events.map((evt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="font-body text-foreground">{evt}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle title="Event Do's & Don'ts" subtitle="Guidelines for a safe and enjoyable celebration" />
          <div className="space-y-4">
            {dosAndDonts.map((item, i) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gold/20 overflow-hidden glass-card"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-display text-lg text-navy font-semibold">{item.event}</span>
                  <motion.div animate={{ rotate: openAccordion === i ? 180 : 0 }}>
                    <ChevronDown className="text-gold" size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openAccordion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-body font-semibold text-green-700 mb-2 flex items-center gap-1">
                            <Check size={16} /> Do's
                          </h4>
                          <ul className="space-y-1">
                            {item.dos.map((d) => (
                              <li key={d} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                                <Check size={14} className="text-green-600 mt-0.5 shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-body font-semibold text-red-700 mb-2 flex items-center gap-1">
                            <XIcon size={16} /> Don'ts
                          </h4>
                          <ul className="space-y-1">
                            {item.donts.map((d) => (
                              <li key={d} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                                <XIcon size={14} className="text-red-600 mt-0.5 shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
