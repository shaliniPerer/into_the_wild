"use client";

import { motion } from "motion/react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Wildlife Safari",
    subtitle: "Dawn expeditions",
    image: "/images/Drone/DJI_20260504174259_0083_D_1778177332595.avif",
  },
  {
    id: 2,
    title: "Forest Dining",
    subtitle: "Under the canopy",
    image: "/Reastuarent Area/Reastuarent Area/DSC00784-HDR.avif",
  },
  {
    id: 3,
    title: "Nature Wellness",
    subtitle: "Ancient healing rituals",
    image: "/images/Room Outside/DSC00649.avif",
  },
  {
    id: 4,
    title: "Adventure Trails",
    subtitle: "Untamed wilderness",
    image: "/images/Room Outside/DSC00659.avif",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="py-32 bg-ivory text-charcoal relative overflow-hidden">
      {/* Lotus — centered full, very faint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <Image src="/images/Tranparent Favicon.png" alt="" width={600} height={600} className="w-[45vw] max-w-[480px] opacity-[0.05]" unoptimized />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <Image src="/lotus-icon.png" alt="" width={20} height={20} className="w-5 h-5" unoptimized />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#3b3439] font-medium">Curated Journeys</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-brand font-light leading-tight"
          >
            Signature Experiences
          </motion.h2>
        </div>

        {/* Image Grid — equal square cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              {/* label */}
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-brand text-[8px] uppercase tracking-[0.35em] font-medium mb-0.5">{exp.subtitle}</p>
                <h3 className="font-serif italic text-white text-lg font-light leading-tight">{exp.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
