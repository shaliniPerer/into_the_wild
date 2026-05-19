"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/Drone/DJI_20260504174020_0082_D_1778177342387.avif",
    title: "Into the Wild, From Every Angle",
    subtitle:
      "Discover a peaceful nature escape surrounded by greenery, comfort, and calm views.",
  },
  {
    image: "/images/Pool Area/DSC00751.avif",
    title: "Relax by the Pool, Surrounded by Nature",
    subtitle:
      "Enjoy refreshing poolside moments in a calm outdoor setting after exploring Sigiriya.",
  },
  {
    image: "/images/Room Outside/DSC00630.avif",
    title: "Stay in Comfort, Close to Nature",
    subtitle:
      "Comfortable rooms designed for a peaceful stay with a relaxing nature-inspired atmosphere.",
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#3b3439]">
      {/* Background Slides with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

        {/* Crossfade slides */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              priority
              className="object-cover object-center scale-105 animate-[slowZoom_20s_ease-out_infinite_alternate]"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-20"
      >
        {/* Vertical side label */}
        <div
          className="absolute hidden lg:block left-12 top-1/2 -translate-y-1/2 rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/70">
            Eco-Luxury Reimagined — Sigiriya, Sri Lanka
          </p>
        </div>

        {/* Slide text — animates per slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-[5rem] text-white font-light tracking-tight mb-6 drop-shadow-2xl leading-tight max-w-3xl">
              {slides[currentSlide].title}
            </h1>
            <p className="font-sans text-sm md:text-base text-white/85 tracking-wide leading-relaxed max-w-2xl drop-shadow-md mb-10">
              {slides[currentSlide].subtitle}
            </p>

            <Link
              href="/accommodation"
              className="px-10 py-4 bg-brand text-[#3b3439] text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#3b3439] transition-colors duration-500 luxury-shadow rounded-full"
            >
              Explore Retreat
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${
                i === currentSlide
                  ? "w-8 h-[3px] bg-brand"
                  : "w-[10px] h-[10px] bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>


    </section>
  );
}