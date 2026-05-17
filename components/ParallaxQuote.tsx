"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden flex items-center justify-center">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img
          src="/hero1.jpeg"
          alt="Into the Wild"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        {/* Luxury cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        {/* Yellow ambient glow */}
        <div className="absolute inset-0 bg-brand/8 mix-blend-soft-light" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent" />
      </motion.div>

      {/* Horizontal gold line decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[15vw] h-[1px] bg-gradient-to-r from-transparent to-brand/40 pointer-events-none z-10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[15vw] h-[1px] bg-gradient-to-l from-transparent to-brand/40 pointer-events-none z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Decorative top mark */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-[1px] bg-brand mx-auto mb-10 origin-center"
        />

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] tracking-tight drop-shadow-2xl"
        >
          Escape the Ordinary.{" "}
          <span className="italic text-brand text-glow block mt-2">Enter the Wild.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-[1px] bg-brand mx-auto mt-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/50 text-[11px] uppercase tracking-[0.4em] font-light mt-8"
        >
          Into The Wild — Sigiriya, Sri Lanka
        </motion.p>
      </motion.div>
    </section>
  );
}
