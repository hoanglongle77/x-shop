"use client";
import { motion } from "framer-motion";
import "./pageHeader.css";

export default function PageHeader({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-center py-12 px-4 mt-6 sm:px-6 lg:mt-0 lg:px-8 bg-background/2 backdrop-blur-md border-2 border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.5)] rounded-[20px] neon-glow overflow-hidden"
    >
      <div className="absolute inset-0 border-4 border-transparent rounded-xl neon-glow-animation pointer-events-none"></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 drop-shadow-[0_0_8px_#00fff7]">
        {title}
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base drop-shadow-[0_0_6px_#00fff7]">
        {description}
      </p>
    </motion.div>
  );
}
