'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/DJI_20260504173915_0079_D_1778177359348.jpg', caption: 'Aerial View',         aspect: 'aspect-video'  },
  { src: '/20251016_141228.jpg',   caption: 'Deluxe Room Interior',   aspect: 'aspect-[3/4]'  },
  { src: '/20251016_142613.jpg',   caption: 'Room Details',           aspect: 'aspect-square' },
  { src: '/20251016_142529.jpg',   caption: 'Garden Suite Terrace',   aspect: 'aspect-[4/3]'  },
  { src: '/20251016_141102.jpg',   caption: 'Garden View',            aspect: 'aspect-[3/4]'  },
  { src: '/20251023_135406.jpg',   caption: 'Triple Room',            aspect: 'aspect-[3/4]'  },
  { src: '/20251016_143023.jpg',   caption: 'Outdoor Seating',        aspect: 'aspect-[4/3]'  },
  { src: '/20251016_141206.jpg',   caption: 'Forest Walkway',         aspect: 'aspect-[3/4]'  },
  { src: '/20251016_123549.jpg',   caption: 'Superior Room',          aspect: 'aspect-[4/3]'  },
  { src: '/20251016_124246.jpg',   caption: 'Bathroom Details',       aspect: 'aspect-[3/4]'  },
  { src: '/20251016_122855.jpg',   caption: 'Room Entrance',          aspect: 'aspect-square' },
  { src: '/20251023_134530.jpg',   caption: 'King Bedroom',           aspect: 'aspect-[4/3]'  },
  { src: '/20251016_124422.jpg',   caption: 'Window Light',           aspect: 'aspect-[4/3]'  },
  { src: '/20251023_143021.jpg',   caption: 'Private Balcony',        aspect: 'aspect-[3/4]'  },
  { src: '/20251016_125447.jpg',   caption: 'Lounge Area',            aspect: 'aspect-square' },
  { src: '/20251023_143215.jpg',   caption: 'Treetop View',           aspect: 'aspect-[3/4]'  },
  { src: '/20251023_134155.jpg',   caption: 'Morning Light',          aspect: 'aspect-[4/3]'  },
  { src: '/20251016_144553.jpg',   caption: 'The Suite',              aspect: 'aspect-[4/3]'  },
  { src: '/20251016_151607.jpg',   caption: 'Suite Living Area',      aspect: 'aspect-[3/4]'  },
  { src: '/images/DSC00747.jpg',   caption: 'Poolside',               aspect: 'aspect-[4/3]'  },
  { src: '/20251016_153610.jpg',   caption: 'Pool Deck',              aspect: 'aspect-video'  },
  { src: '/20251016_153103.jpg',   caption: 'Suite Bathroom',         aspect: 'aspect-square' },
  { src: '/20251016_144821.jpg',   caption: 'Suite Terrace',          aspect: 'aspect-[4/3]'  },
  { src: '/images/DSC00568-HDR.jpg', caption: 'Nature Views',         aspect: 'aspect-video'  },
  { src: '/20251023_141902.jpg',   caption: 'Wildlife Encounter',     aspect: 'aspect-[4/3]'  },
  { src: '/hero2.jpeg',            caption: 'Resort Grounds',         aspect: 'aspect-[4/3]'  },
  { src: '/about.jpeg',            caption: 'Serene Nature',          aspect: 'aspect-[3/4]'  },
  { src: '/hero3.jpeg',            caption: 'Into the Wild',          aspect: 'aspect-[3/4]'  },
  { src: '/20251016_153307.jpg',   caption: 'Evening Light',          aspect: 'aspect-[4/3]'  },
  { src: '/home.jpeg',             caption: 'Resort Overview',        aspect: 'aspect-video'  },
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
            Photo Gallery
          </motion.h1>
          <div className="w-24 h-[2px] bg-brand mx-auto" />
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-brand text-[10px] uppercase tracking-[0.4em] font-semibold block mb-3">Capture the Moments</span>
            <p className="text-charcoal/50 max-w-xl mx-auto font-light text-sm leading-relaxed">
              A visual journey through our resort — moments captured in perfect harmony with nature.
            </p>
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: (i % 8) * 0.055 }}
                onClick={() => openLightbox(i)}
                className="group relative w-full mb-3 md:mb-4 overflow-hidden rounded-xl bg-ivory focus:outline-none break-inside-avoid block"
              >
                <div className={`relative ${img.aspect}`}>
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 p-3">
                    <Maximize2 className="w-5 h-5 text-white drop-shadow" />
                    <span className="text-white text-[9px] uppercase tracking-widest font-light text-center leading-relaxed drop-shadow">{img.caption}</span>
                  </div>
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
