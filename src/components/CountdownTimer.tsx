import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-04-18T00:00:00+05:30").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, targetDate - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring" }}
          className="flex flex-col items-center"
        >
          <motion.div
            key={unit.value}
            initial={{ rotateX: -90 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-navy flex items-center justify-center border border-gold/30 shadow-gold"
          >
            <span className="text-2xl md:text-4xl font-display text-gold font-bold">
              {String(unit.value).padStart(2, "0")}
            </span>
          </motion.div>
          <span className="text-xs md:text-sm font-body text-navy mt-2 font-medium">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
