"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dulmin Hashan",
    initials: "DH",
    avatarColor: "bg-emerald-500",
    timeAgo: "3 days ago",
    tripType: "Holiday | Couple",
    quote:
      "An absolutely amazing resort with exceptional staff. I truly enjoyed every moment of my vacation, thanks to the peaceful atmosphere and wonderful hospitality at Into The Wild Sigiriya. The food was amazing as well, and the...",
  },
  {
    id: 2,
    name: "Jelle Vanmol",
    initials: "JV",
    avatarColor: "bg-sky-500",
    timeAgo: "7 months ago",
    tripType: "Holiday | Family",
    quote:
      "Had an amazing stay at Into The Wild. Very friendly and helpful staff. The food was amazing.",
  },
  {
    id: 3,
    name: "Indi",
    initials: "I",
    avatarColor: "bg-amber-500",
    timeAgo: "9 months ago",
    tripType: "Holiday | Solo",
    quote:
      "Had a great time there. The service was outstanding and the view is great,,, going back next time again",
  },
  {
    id: 4,
    name: "Samantha & Daniel K.",
    initials: "SK",
    avatarColor: "bg-rose-500",
    timeAgo: "2 weeks ago",
    tripType: "Honeymoon | Couple",
    quote:
      "A truly magical escape. Waking up to birdsong in the jungle and stepping out to that beautiful pool — we were completely at peace. The staff anticipated every need before we even asked.",
  },
  {
    id: 5,
    name: "Priya S.",
    initials: "PS",
    avatarColor: "bg-violet-500",
    timeAgo: "1 month ago",
    tripType: "Holiday | Solo",
    quote:
      "Into The Wild redefined what luxury means to me. The forest dining under the canopy was cinematic. Every moment felt exclusive, peaceful, and perfectly orchestrated.",
  },
  {
    id: 6,
    name: "Hiroshi & Yuki N.",
    initials: "HN",
    avatarColor: "bg-teal-500",
    timeAgo: "5 months ago",
    tripType: "Holiday | Couple",
    quote:
      "This is unreal — where nature meets hospitality. The pool views, the food, the ambience. A must-visit place unlike anything we have experienced in Sri Lanka.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function Testimonials() {
  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((dir: number) => {
    setPage(([prev]) => [(prev + dir + totalPages) % totalPages, dir]);
  }, [totalPages]);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 15000);
    return () => clearInterval(id);
  }, [paginate]);

  const visibleCards = testimonials.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section id="testimonials" className="py-28 bg-[#faf9f7] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand/4 blur-[160px] rounded-full pointer-events-none" />
      {/* Lotus — bottom-left corner peeking */}
      <div className="absolute -bottom-24 -left-24 pointer-events-none select-none">
        <Image src="/images/Tranparent Favicon.png" alt="" width={420} height={420} className="opacity-[0.07]" unoptimized />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-brand/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#3b3439] font-medium">Guest Voices</span>
            <div className="w-8 h-[1px] bg-brand/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-brand font-light"
          >
            What Our Guests Say
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
                  center: { opacity: 1, x: 0 },
                  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {visibleCards.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white rounded-2xl p-6 border border-[#e8e4e0] hover:shadow-md transition-shadow duration-300 flex flex-col"
                  >
                    {/* Top row: avatar + name/time + Google icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-full ${t.avatarColor} flex items-center justify-center shrink-0`}>
                          <span className="text-white font-medium text-sm">{t.initials}</span>
                        </div>
                        <div>
                          <h4 className="text-[#1a1a1a] font-medium text-sm leading-tight">{t.name}</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[#6b6b6b] text-[12px]">{t.timeAgo}</span>
                            <span className="text-[#6b6b6b] text-[12px]">•</span>
                            <StarRating />
                          </div>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>

                    {/* Quote */}
                    <p className="text-[#444] text-[13.5px] leading-relaxed flex-1 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Trip type badge */}
                    <div className="mt-5 pt-4 border-t border-[#f0ece8] flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand/60" />
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#3b3439]/60 font-medium">
                        {t.tripType}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous"
            className="absolute -left-5 md:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#e8e4e0] bg-white flex items-center justify-center text-[#3b3439]/50 hover:border-brand hover:text-brand transition-all duration-300 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next"
            className="absolute -right-5 md:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#e8e4e0] bg-white flex items-center justify-center text-[#3b3439]/50 hover:border-brand hover:text-brand transition-all duration-300 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              aria-label={`Page ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === page ? "w-6 h-1.5 bg-brand" : "w-1.5 h-1.5 bg-[#3b3439]/20 hover:bg-[#3b3439]/40"
              }`}
            />
          ))}
        </div>

        {/* Google reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/Into+The+Wild+Hotel/@7.9353579,80.7031961,17z/data=!4m11!3m10!1s0x3afca40dd89f4acb:0xa8ee58a87589b104!5m2!4m1!1i2!8m2!3d7.9353579!4d80.705771!9m1!1b1!16s%2Fg%2F11ggls64w5?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-brand/30 text-brand text-[11px] uppercase tracking-[0.35em] font-medium hover:bg-brand hover:text-white transition-all duration-300 rounded-full"
          >
            <GoogleIcon />
            Read Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
