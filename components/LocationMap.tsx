"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

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

        {/* Map + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-[#e8e4e0] shadow-sm">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 h-[380px] lg:h-auto min-h-[380px]"
          >
            <iframe
              title="Into The Wild — Sigiriya Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63246.73388025637!2d80.69!3d7.9573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb527f3b1b97bf%3A0x1234567890abcdef!2sSigiriya%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1716000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#faf9f7] p-10 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-serif italic text-2xl text-brand font-light mb-1">Into The Wild</h3>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#3b3439]/50">Sigiriya, Sri Lanka</p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-brand/8 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#3b3439]/50 mb-1">Address</p>
                    <p className="text-sm text-[#3b3439] leading-relaxed">123 Hidden Valley Trail<br />Sigiriya, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-brand/8 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#3b3439]/50 mb-1">Phone</p>
                    <a href="tel:+94112345678" className="text-sm text-[#3b3439] hover:text-brand transition-colors">+94 11 234 5678</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-brand/8 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#3b3439]/50 mb-1">Email</p>
                    <a href="mailto:stay@intothewild.lk" className="text-sm text-[#3b3439] hover:text-brand transition-colors">stay@intothewild.lk</a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Sigiriya,Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand/30 text-brand text-[10px] uppercase tracking-[0.35em] font-medium hover:bg-brand hover:text-white transition-all duration-300 rounded-full"
            >
              <MapPin className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
