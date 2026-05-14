"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Binoculars, Home, UtensilsCrossed, Leaf, Mountain } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Wildlife Safari",
    description: "Dawn expeditions through ancient forest trails with expert naturalist guides.",
    image: "/20251023_141902.jpg",
    icon: Binoculars,
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Forest Dining",
    description: "Elevated gastronomy beneath a living canopy under the stars.",
    image: "/home.jpeg",
    icon: UtensilsCrossed,
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Nature Wellness",
    description: "Ancient rituals and holistic therapies rooted in forest healing.",
    image: "/ayurvedic-relaxing-health-beauty-happy-blonde-woma-2026-01-05-23-13-51-utc.jpg.jpeg",
    icon: Leaf,
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "Adventure Trails",
    description: "Guided summit hikes and river crossings through untamed wilderness.",
    image: "/094A0142.JPG.jpeg",
    icon: Mountain,
    colSpan: "md:col-span-2",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="py-32 bg-ivory text-charcoal relative overflow-hidden flex flex-col">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="mb-20 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4 justify-center md:justify-start"
          >
            <div className="w-8 h-[1px] bg-brand" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold">Curated Journeys</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl text-charcoal font-light leading-tight max-w-2xl"
            >
              Signature <br/><span className="italic text-brand drop-shadow-lg">Experiences</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/60 max-w-sm text-sm leading-relaxed font-light mx-auto md:mx-0 text-justify"
            >
              Engage with the wilderness through our bespoke activities designed to awaken your senses and restore your spirit.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:h-[600px] w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-[2px] overflow-hidden group cursor-pointer h-[350px] lg:h-auto ${exp.colSpan}`}
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-8 w-full border-t border-transparent group-hover:border-brand/40 transition-colors duration-700">
                <div className="flex items-center gap-4 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-6 h-[1px] bg-brand" />
                  <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-brand">Discover</span>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-serif text-3xl text-white group-hover:text-white transition-colors duration-300 drop-shadow-sm mb-2 font-light">
                    {exp.title}
                  </h3>
                  <exp.icon className="w-5 h-5 text-brand/60 shrink-0 mb-2 group-hover:text-brand transition-colors duration-500" />
                </div>
                <p className="text-white/50 text-sm font-light leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-700 ease-in-out">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
