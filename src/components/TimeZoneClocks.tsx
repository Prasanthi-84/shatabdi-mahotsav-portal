import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const zones = [
  { name: "India (IST)", tz: "Asia/Kolkata" },
  { name: "USA (EST)", tz: "America/New_York" },
  { name: "UK (GMT)", tz: "Europe/London" },
  { name: "Canada (PST)", tz: "America/Vancouver" },
  { name: "Australia (AEST)", tz: "Australia/Sydney" },
  { name: "Germany (CET)", tz: "Europe/Berlin" },
  { name: "Japan (JST)", tz: "Asia/Tokyo" },
  { name: "UAE (GST)", tz: "Asia/Dubai" },
];

const TimeZoneClocks = () => {
  const [times, setTimes] = useState<string[]>([]);

  useEffect(() => {
    const update = () => {
      setTimes(
        zones.map((z) =>
          new Date().toLocaleTimeString("en-US", {
            timeZone: z.tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
        )
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {zones.map((zone, i) => (
        <motion.div
          key={zone.tz}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-4 text-center"
        >
          <Clock size={16} className="mx-auto mb-2 text-gold" />
          <p className="text-xs font-body text-muted-foreground">{zone.name}</p>
          <p className="text-sm font-display text-foreground font-semibold mt-1">{times[i] || "--"}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TimeZoneClocks;
