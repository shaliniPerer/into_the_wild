"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function BookingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="book"
      className="py-32 relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/bookingbg/1920/1080"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-black" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand/8 blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-brand/60" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand font-semibold">Reserve Your Sanctuary</span>
          <div className="w-12 h-[1px] bg-brand/60" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl lg:text-8xl text-white font-light leading-tight max-w-4xl"
        >
          Begin Your <br />
          <span className="italic text-brand text-glow">Wild Escape</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="text-white/40 text-sm font-light mt-6 max-w-md tracking-wide text-justify"
        >
          Exclusive availability. Private sanctuaries. World-class eco-luxury awaits.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-16 py-5 bg-brand text-black text-[11px] uppercase tracking-[0.35em] font-semibold overflow-hidden group shadow-[0_8px_40px_rgba(245,217,122,0.3)] hover:shadow-[0_8px_60px_rgba(245,217,122,0.5)] transition-shadow duration-500"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Book Your Escape</span>
            <motion.div
              className="absolute inset-0 bg-white origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            "Best Price Guarantee",
            "Free Cancellation — 48h",
            "Private Transfers Included",
            "Complimentary Welcome Gift",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-brand" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-light">{item}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

