"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Timer({ startDate }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    function getTimeSince(start) {
      const now = new Date();
      const diff = now - start;
      return {
        years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
        months: Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12),
        days: Math.floor((diff / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }

    const start = new Date(startDate);
    setTime(getTimeSince(start));
    const interval = setInterval(() => {
      setTime(getTimeSince(start));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <motion.div className="fade-in">
      {time ? (
        <p className="text-2xl font-mono text-gray-700">
          {time.years} anos, {time.months} meses, {time.days} dias,<br />
          {time.hours} horas, {time.minutes} minutos e {time.seconds} segundos.
        </p>
      ) : (
        <p className="text-2xl font-mono text-gray-500">Carregando...</p>
      )}
    </motion.div>
  );
}
