"use client";

import { motion } from "motion/react";

export function LocationMap() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/4 blur-[140px] rounded-full pointer-events-none" />

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
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#3b3439] font-medium">Find Us</span>
            <div className="w-8 h-[1px] bg-brand/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-brand font-light"
          >
            Where The Wild Awaits
          </motion.h2>
        </div>

        {/* Map — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-[#e8e4e0] shadow-sm"
        >
          <iframe
            title="Into The Wild Hotel — Sigiriya Location"
            src="https://maps.google.com/maps?q=7.9353579,80.705771&z=17&output=embed"
            width="100%"
            height="500"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
