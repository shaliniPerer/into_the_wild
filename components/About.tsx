"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-ivory overflow-hidden text-charcoal">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand font-semibold">The Sanctuary</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 font-light drop-shadow-sm text-charcoal">
              Where Luxury <br />
              <span className="italic text-brand text-glow">Meets Nature</span>
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-6 font-light text-lg text-justify">
              Nestled deep within a pristine ancient forest, "INTO THE WILD" is a sanctuary 
              for those who seek profound connection with nature without compromising on bespoke luxury. 
              Here, the symphony of the jungle meets world-class hospitality to create an experience 
              that transcends the ordinary.
            </p>
            <p className="text-charcoal/50 leading-relaxed mb-10 font-light text-justify">
              Every villa, every pathway, and every experience has been masterfully crafted to 
              ensure minimal environmental impact while providing maximum comfort. Discover a retreat 
              where time slows down, and the wild embraces you.
            </p>
            
            {/* <button className="text-[11px] text-charcoal font-semibold uppercase tracking-[0.3em] pb-2 border-b border-brand hover:text-brand transition-colors duration-300">
              Discover Our Story
            </button> */}
          </motion.div>

          {/* Image Composition */}
          <div className="flex-1 relative w-full h-[420px] md:h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-[80%] h-[80%] rounded-tr-[100px] overflow-hidden luxury-shadow"
            >
              <Image
                src="/hero1.jpeg"
                alt="Luxury Eco Lodge"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-tl-[60px] overflow-hidden luxury-shadow border-8 border-ivory"
            >
              <Image
                src="/20251016_101353.jpg.jpeg"
                alt="Fine Dining"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:block absolute top-[40%] -left-8 w-16 h-16 rounded-full border border-brand/30 backdrop-blur-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
