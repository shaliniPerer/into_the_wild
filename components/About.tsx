"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Lotus — bottom-right corner peeking */}
      <div className="absolute -bottom-16 -right-16 pointer-events-none select-none">
        <Image src="/images/Tranparent Favicon.png" alt="" width={380} height={380} className="opacity-[0.06]" unoptimized />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-lg"
          >
            {/* Overline */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-brand" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#3b3439] font-medium">About Us</span>
            </div>

            {/* Heading — italic gold */}
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 font-light text-brand">
              Where Luxury Meets Nature
            </h2>

            

            <p className="text-[#3b3439] leading-relaxed mb-5 font-light text-[17px] text-justify">
              Nestled deep within a pristine ancient forest, &ldquo;INTO THE WILD&rdquo; is a sanctuary
              for those who seek profound connection with nature without compromising on bespoke luxury.
              Here, the symphony of the jungle meets world-class hospitality to create an experience
              that transcends the ordinary.
            </p>
            <p className="text-[#3b3439] leading-relaxed mb-5 font-light text-[17px] text-justify">
              Every villa, every pathway, and every experience has been masterfully crafted to
              ensure minimal environmental impact while providing maximum comfort. Discover a retreat
              where time slows down, and the wild embraces you.
            </p>
          </motion.div>

          {/* 3-Image overlapping cascade */}
          <div className="flex-1 w-full">
            <div className="relative h-[400px] md:h-[480px] w-full">

              {/* Image 1 — back layer, top-right */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-[28%] right-0 h-[72%] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/DJI_20260504173915_0079_D_1778177359348.jpg"
                  alt="Resort landscape"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </motion.div>

              {/* Image 2 — middle layer */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[14%] left-[14%] right-[14%] h-[72%] rounded-xl overflow-hidden z-10 border-[3px] border-white shadow-xl"
              >
                <Image
                  src="/images/DJI_20260504173915_0079_D_1778177359348.jpg"
                  alt="Into The Wild Hotel"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[2s]"
                  priority
                />
              </motion.div>

              {/* Image 3 — front layer, bottom-left */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-[28%] left-0 right-[28%] h-[72%] rounded-xl overflow-hidden z-20 border-[3px] border-white shadow-2xl"
              >
                <Image
                  src="/images/DJI_20260504173915_0079_D_1778177359348.jpg"
                  alt="Dining experience"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
