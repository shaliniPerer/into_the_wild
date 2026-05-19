"use client";

import { motion } from "motion/react";
import Image from "next/image";

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
            <Image src="/lotus-icon.png" alt="" width={20} height={20} className="w-5 h-5 opacity-80" unoptimized />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#3b3439] font-medium">Find Us</span>
            <Image src="/lotus-icon.png" alt="" width={20} height={20} className="w-5 h-5 opacity-80" unoptimized />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6830835490456!2d80.7031961!3d7.9353579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca40dd89f4acb%3A0xa8ee58a87589b104!2sInto%20The%20Wild%20Hotel!5e0!3m2!1sen!2slk!4v1716000000000!5m2!1sen!2slk"
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
