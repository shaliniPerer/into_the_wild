"use client";

import { motion } from "motion/react";
import {
  Waves,
  PlaneTakeoff,
  Users,
  ConciergeBell,
  UtensilsCrossed,
  ParkingCircle,
  Coffee,
  GlassWater,
  Sunrise,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Waves,
    title: "Outdoor Swimming Pool",
    description: "Unwind in our open-air pool surrounded by lush jungle greenery.",
  },
  {
    icon: PlaneTakeoff,
    title: "Airport Shuttle",
    description: "Seamless transfers from the airport directly to your retreat.",
  },
  {
    icon: Users,
    title: "Family Rooms",
    description: "Spacious accommodations thoughtfully arranged for families.",
  },
  {
    icon: ConciergeBell,
    title: "Room Service",
    description: "Attentive in-room dining and service available around the clock.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Savour curated menus inspired by local flavours and forest-to-table ingredients.",
  },
  {
    icon: ParkingCircle,
    title: "Free Parking",
    description: "Complimentary secure parking for all our guests.",
  },
  {
    icon: Coffee,
    title: "Tea & Coffee Maker",
    description: "In-room tea and coffee facilities for a perfect start to every morning.",
  },
  {
    icon: GlassWater,
    title: "Bar",
    description: "Handcrafted cocktails and fine spirits served amid nature's ambience.",
  },
  {
    icon: Sunrise,
    title: "Breakfast",
    description: "Start your day with a wholesome breakfast crafted from fresh local produce.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand/5 blur-[160px] rounded-full pointer-events-none" />
      {/* Lotus — centered, full */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <Image src="/images/Tranparent Favicon.png" alt="" width={360} height={360} className="opacity-[0.06]" unoptimized />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-4"
          >
            <Image src="/lotus-icon.png" alt="" width={20} height={20} className="w-5 h-5" unoptimized />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#3b3439] font-medium">
              Amenities &amp; Facilities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-brand font-light leading-tight"
          >
            Our Services
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className="group flex flex-col items-center text-center p-10 rounded-2xl border border-brand/10 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-500 bg-white"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-brand/8 group-hover:bg-brand/15 transition-colors duration-400 mb-6">
                  <Icon className="w-9 h-9 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[#2a2026] text-lg font-medium leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-[#3b3439]/70 text-[15px] font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
