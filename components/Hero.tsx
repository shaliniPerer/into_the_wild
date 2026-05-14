"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Media */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-overlay z-15" />
        <Image
          src="/20251016_142529.jpg"
          alt="Into the Wild Resort — Aerial Pool View"
          fill
          priority
          className="object-cover object-center transform scale-105 animate-[slowZoom_20s_ease-out_infinite_alternate]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="absolute hidden lg:block left-12 top-1/2 -translate-y-1/2 rotate-180" style={{ writingMode: "vertical-rl" }}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-brand/80">Eco-Luxury Reimagined — Sigiriya, Sri Lanka</p>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-light tracking-tight mb-4 drop-shadow-2xl">
            INTO THE <span className="italic text-brand text-glow">WILD</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-white/90 italic tracking-wider max-w-xl drop-shadow-md mb-10">
            Where Wilderness Meets Elegance
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-4 bg-brand text-black text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-500 luxury-shadow">
              Explore Retreat
            </button>
            <button className="px-10 py-4 bg-transparent border border-white/30 text-white text-[11px] uppercase tracking-[0.2em] font-semibold hover:border-brand hover:text-brand transition-colors duration-500 backdrop-blur-sm">
              Book Your Escape
            </button>
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
      >
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-brand" 
          />
        </div>
      </motion.div>
    </section>
  );
}