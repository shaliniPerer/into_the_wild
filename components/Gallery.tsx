"use client";

import { motion } from "motion/react";
import Image from "next/image";

const images = [
  "/20251016_141228.jpg",
  "/20251016_123549.jpg",
  "/20251016_144821.jpg",
  "/20251023_134530.jpg",
  "/hero2.jpeg",
  "/hero3.jpeg",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-ivory relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
             <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] tracking-[0.4em] text-brand uppercase font-semibold">Visual Journal</span>
              <div className="w-12 h-[1px] bg-brand" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-7xl text-charcoal font-light leading-tight"
            >
              Immerse in <span className="italic text-brand">Beauty</span>
            </motion.h2>
          </div>
          <button className="text-[11px] text-charcoal/70 font-semibold uppercase tracking-[0.3em] pb-2 border-b border-brand hover:text-brand transition-colors duration-300">
             Explore Full Gallery
          </button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.2 }}
              className="relative overflow-hidden group inline-block w-full cursor-pointer break-inside-avoid"
            >
              <img 
                src={src} 
                alt="Resort Experience" 
                className="w-full h-auto object-cover transform transition-transform duration-[2s] group-hover:scale-105"
                loading="lazy"
              />
              {/* Luxury hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-700 delay-100">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
