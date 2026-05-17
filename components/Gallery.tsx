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
              <span className="text-[10px] tracking-[0.4em] text-[#3b3439] uppercase font-medium">Visual Journal</span>
              <div className="w-12 h-[1px] bg-brand" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-brand font-light leading-tight"
            >
              Immerse in Beauty
            </motion.h2>
          </div>
          <button className="text-[11px] text-[#3b3439] font-medium uppercase tracking-[0.3em] hover:text-brand transition-colors duration-300">
            Explore Full Gallery
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer h-[200px] md:h-[220px]"
            >
              <img
                src={src}
                alt="Resort Experience"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl transform transition-transform duration-[2s] group-hover:scale-105"
                loading="lazy"
              />
              {/* Luxury hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-700 delay-100">
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
