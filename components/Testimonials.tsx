"use client";

import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    quote: "A transformative experience that redefined our approach to luxury travel. The attention to detail and reverence for nature is unparalleled.",
    author: "Elena R.",
    role: "Travel Magazine Editor"
  },
  {
    id: 2,
    quote: "Falling asleep to the sounds of the jungle in an ultra-luxurious bed was magical. A hidden gem that we will return to.",
    author: "James & Sarah T.",
    role: "Honeymoon Guests"
  },
  {
    id: 3,
    quote: "The private dining under the canopy was cinematic. Every moment felt exclusive, peaceful, and perfectly orchestrated.",
    author: "Maximilian V.",
    role: "Venture Capitalist"
  },
  {
    id: 4,
    quote: "Waking up to the mist over the treetops every morning was indescribable. This place redefines what luxury really means.",
    author: "Priya S.",
    role: "Lifestyle Blogger"
  },
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export function Testimonials() {
  const [[active, direction], setActive] = useState([0, 0]);

  const paginate = useCallback((dir: number) => {
    setActive(([prev]) => [(prev + dir + testimonials.length) % testimonials.length, dir]);
  }, []);

  // Auto-advance every 5 s
  useEffect(() => {
    const id = setInterval(() => paginate(1), 5000);
    return () => clearInterval(id);
  }, [paginate]);

  const t = testimonials[active];

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-brand/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand font-semibold">Guest Voices</span>
            <div className="w-8 h-[1px] bg-brand/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-charcoal font-light"
          >
            Whispers From The <span className="italic text-brand">Wild</span>
          </motion.h2>
        </div>

        {/* Carousel card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="bg-brand/5 backdrop-blur-md p-10 md:p-14 border border-brand/15 relative"
              >
                <Quote className="w-14 h-14 text-brand/10 absolute top-8 right-8" />

                <p className="font-serif text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-10 italic font-light text-justify">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full border border-brand/50 flex items-center justify-center text-brand font-serif shrink-0 text-xl font-light">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-charcoal font-medium text-[11px] tracking-[0.2em] uppercase">{t.author}</h4>
                    <p className="text-charcoal/40 text-[9px] uppercase tracking-[0.3em] mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="absolute -left-5 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal/50 hover:border-brand hover:text-brand transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="absolute -right-5 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal/50 hover:border-brand hover:text-brand transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive([i, i > active ? 1 : -1])}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-400 rounded-full ${
                i === active
                  ? "w-6 h-1.5 bg-brand"
                  : "w-1.5 h-1.5 bg-charcoal/20 hover:bg-charcoal/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
