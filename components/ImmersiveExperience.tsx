"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "motion/react";

const hotspots = [
  { id: 1, x: 18, y: 45, label: "Infinity Pool", desc: "Suspended above the canopy" },
  { id: 2, x: 38, y: 55, label: "Forest Spa", desc: "Ancient healing rituals" },
  { id: 3, x: 62, y: 40, label: "Wildlife Trail", desc: "Dawn safari walks" },
  { id: 4, x: 80, y: 50, label: "Canopy Dining", desc: "Elevated fine dining" },
];

export function ImmersiveExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0));
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current.offsetLeft);
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);
  const onMouseLeave = useCallback(() => setIsDragging(false), []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0));
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - (trackRef.current.offsetLeft);
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="360-experience"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand/3 blur-[150px] rounded-full" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-brand" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand font-semibold">Immersive Journey</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal font-light leading-tight"
            >
              Explore the <br />
              <span className="italic text-brand text-glow">360° Sanctuary</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-charcoal/50 max-w-xs text-sm leading-relaxed font-light hidden md:block text-justify"
          >
            Drag to explore our wilderness sanctuary. Discover hidden gems through an immersive panoramic journey.
          </motion.p>
        </div>
      </div>

      {/* Panoramic Viewport */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative mx-4 md:mx-12 rounded-2xl overflow-hidden"
        style={{ height: "70vh", minHeight: 360 }}
      >
        {/* Drag Track */}
        <div
          ref={trackRef}
          className="absolute inset-0 overflow-x-scroll scrollbar-hide select-none"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onMouseUp}
        >
          {/* Panoramic image strip — 3× viewport width to simulate 360° scroll */}
          <div className="relative h-full" style={{ width: "300vw" }}>
            {/* Equirectangular panorama tiled across the strip width */}
            <img
              src="/rotate.JPG.jpeg"
              alt="Resort 360° Panorama"
              className="absolute inset-0 w-1/3 h-full object-cover object-center"
              style={{ left: "0%" }}
              draggable={false}
            />
            <img
              src="/rotate.JPG.jpeg"
              alt=""
              aria-hidden
              className="absolute inset-0 w-1/3 h-full object-cover object-center"
              style={{ left: "33.333%" }}
              draggable={false}
            />
            <img
              src="/rotate.JPG.jpeg"
              alt=""
              aria-hidden
              className="absolute inset-0 w-1/3 h-full object-cover object-center"
              style={{ left: "66.666%" }}
              draggable={false}
            />
            {/* Dark luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-10" />
            <div className="absolute inset-0 bg-brand/5 mix-blend-soft-light z-10" />

            {/* Hotspots */}
            {hotspots.map((hs) => (
              <div
                key={hs.id}
                className="absolute z-20"
                style={{ left: `${hs.x}%`, top: `${hs.y}%`, transform: "translate(-50%,-50%)" }}
                onMouseEnter={() => setActiveHotspot(hs.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                {/* Pulsing ring */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-10 h-10 rounded-full border border-brand/60"
                  />
                  <div className="w-4 h-4 rounded-full bg-brand/80 border-2 border-brand shadow-[0_0_20px_rgba(245,217,122,0.6)] cursor-pointer" />
                </div>

                {/* Label */}
                <motion.div
                  initial={false}
                  animate={{ opacity: activeHotspot === hs.id ? 1 : 0, y: activeHotspot === hs.id ? 0 : 8, scale: activeHotspot === hs.id ? 1 : 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                >
                  <div className="bg-black/70 backdrop-blur-xl border border-brand/30 px-4 py-3 rounded-xl shadow-xl">
                    <p className="text-brand text-[10px] uppercase tracking-[0.3em] font-semibold mb-0.5">{hs.label}</p>
                    <p className="text-white/60 text-[10px] font-light">{hs.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Edge fade gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

        {/* Drag hint overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isDragging || progress > 0.02 ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
        >
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-4 rounded-full">
            <motion.div
              animate={{ x: [-6, 6, -6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand">
                <path d="M5 12h14M5 12l4-4M5 12l4 4M19 12l-4-4M19 12l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <span className="text-white/70 text-[10px] uppercase tracking-[0.3em]">Drag to Explore</span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-white/10 z-40 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="container mx-auto px-6 md:px-12 mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
      >
        {[
          { num: "42", unit: "Acres", label: "Pristine Wilderness" },
          { num: "12", unit: "Villas", label: "Private Sanctuaries" },
          { num: "360°", unit: "", label: "Immersive Nature" },
          { num: "5★", unit: "", label: "Luxury Rating" },
        ].map((stat) => (
          <div key={stat.label} className="border-l border-brand/20 pl-6">
            <p className="font-serif text-3xl md:text-4xl text-charcoal font-light">
              {stat.num}<span className="text-brand text-xl ml-1">{stat.unit}</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
