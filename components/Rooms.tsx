"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Wifi, Coffee, Wind, Bath } from "lucide-react";

const rooms = [
  {
    id: 1,
    title: "Canopy Pool Villa",
    description: "Elevated above the forest floor with a private infinity plunge pool.",
    image: "/20251016_153610.avif",
    price: "$850",
  },
  {
    id: 2,
    title: "The Wild Suite",
    description: "Expansive open-plan living with panoramic floor-to-ceiling wilderness views.",
    image: "/20251016_144553.avif",
    price: "$1,200",
  },
  {
    id: 3,
    title: "Riverfront Pavilion",
    description: "Set along the gentle river with a private deck and outdoor soaking tub.",
    image: "/20251023_135406.avif",
    price: "$650",
  }
];

export function Rooms() {
  return (
    <section id="villas" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-charcoal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-brand" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold">Accommodations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-charcoal mb-6 font-light"
          >
            Exclusive <span className="italic text-brand text-glow">Sanctuaries</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col relative"
            >
              <div className="relative h-[600px] w-full rounded-[4px] overflow-hidden mb-6 shadow-2xl">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                
                {/* Overlay Text & Glassmorphism */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 opacity-90 group-hover:opacity-100 border border-white/10 group-hover:border-brand/40">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-3xl text-white font-light leading-tight">
                        {room.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/70 font-light leading-relaxed mb-6 text-justify">
                      {room.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                       <div className="flex gap-4 text-white/50">
                         <Wifi className="w-4 h-4" />
                         <Coffee className="w-4 h-4" />
                         <Wind className="w-4 h-4" />
                         <Bath className="w-4 h-4" />
                       </div>
                       <span className="text-[11px] uppercase font-semibold text-brand tracking-[0.2em]">
                         {room.price} <span className="text-white/40 text-[9px]">/ Night</span>
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
