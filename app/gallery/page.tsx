'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/20251016_142529.jpg', caption: 'Garden Suite Terrace' },
  { src: '/20251016_141228.jpg', caption: 'Deluxe Room Interior' },
  { src: '/20251016_142613.jpg', caption: 'Room Details' },
  { src: '/20251016_143023.jpg', caption: 'Outdoor Seating' },
  { src: '/20251016_141102.jpg', caption: 'Garden View' },
  { src: '/20251016_141206.jpg', caption: 'Forest Walkway' },
  { src: '/20251016_123549.jpg', caption: 'Superior Room' },
  { src: '/20251016_122855.jpg', caption: 'Room Entrance' },
  { src: '/20251016_124246.jpg', caption: 'Bathroom Details' },
  { src: '/20251016_124422.jpg', caption: 'Window Light' },
  { src: '/20251016_125447.jpg', caption: 'Lounge Area' },
  { src: '/20251023_135406.jpg', caption: 'Superior King Room' },
  { src: '/20251023_134530.jpg', caption: 'King Bedroom' },
  { src: '/20251023_143021.jpg', caption: 'Private Balcony' },
  { src: '/20251023_143215.jpg', caption: 'Treetop View' },
  { src: '/20251023_134155.jpg', caption: 'Morning Light' },
  { src: '/20251016_144553.jpg', caption: 'The Suite' },
  { src: '/20251016_151607.jpg', caption: 'Suite Living Area' },
  { src: '/20251016_153103.jpg', caption: 'Suite Bathroom' },
  { src: '/20251016_153610.jpg', caption: 'Pool Deck' },
  { src: '/20251016_144821.jpg', caption: 'Suite Terrace' },
  { src: '/home.jpeg', caption: 'Resort Overview' },
  { src: '/hero2.jpeg', caption: 'Resort Grounds' },
  { src: '/hero3.jpeg', caption: 'Into the Wild' },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/home.jpeg" alt="Gallery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand uppercase tracking-[0.35em] text-sm font-semibold mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white font-light mb-6"
          >
            Gallery
          </motion.h1>
          <div className="w-24 h-[2px] bg-brand mx-auto" />
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-charcoal/55 max-w-2xl mx-auto text-center font-light text-base leading-relaxed mb-14"
          >
            Visual tales from Into The Wild — a collection of moments captured in perfect harmony with nature.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.07 }}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/5] overflow-hidden rounded-none bg-ivory focus:outline-none"
              >
                <Image src={img.src} alt={img.caption} fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 gap-2">
                  <Maximize2 className="w-6 h-6 text-white" />
                  <span className="text-white text-[10px] uppercase tracking-widest font-light">{img.caption}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-white/50 text-[10px] uppercase tracking-widest font-light z-10">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].caption}
                fill
                className="object-contain"
              />
              <p className="absolute -bottom-8 left-0 right-0 text-center text-white/50 text-[10px] uppercase tracking-widest font-light">
                {images[lightboxIndex].caption}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
