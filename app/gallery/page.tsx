'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryImage = { src: string; caption: string; category: string; aspect: string };

const rawImages: GalleryImage[] = [
  // Aerial
  { src: '/images/Drone/DJI_20260504173711_0078_D_1778177363708.avif', caption: 'Aerial View',            category: 'Aerial',      aspect: 'aspect-video'  },
  { src: '/images/Drone/DJI_20260504173915_0079_D_1778177359348.avif', caption: 'Resort From Above',      category: 'Aerial',      aspect: 'aspect-video'  },
  { src: '/images/Drone/DJI_20260504173932_0080_D_1778177355215.avif', caption: 'Treetop Panorama',       category: 'Aerial',      aspect: 'aspect-video'  },
  { src: '/images/Drone/DJI_20260504174001_0081_D_1778177350459.avif', caption: 'Jungle Canopy',          category: 'Aerial',      aspect: 'aspect-video'  },
  { src: '/images/Drone/DJI_20260504174020_0082_D_1778177342387.avif', caption: 'Sigiriya Landscape',     category: 'Aerial',      aspect: 'aspect-video'  },
  { src: '/images/Drone/DJI_20260504174259_0083_D_1778177332595.avif', caption: "Bird's Eye View",       category: 'Aerial',      aspect: 'aspect-video'  },
  { src: '/images/Drone/DJI_20260504174316_0084_D_1778177291250.avif', caption: 'Resort Grounds',         category: 'Aerial',      aspect: 'aspect-video'  },
  // Pool
  { src: '/images/Pool Area/DSC00739.avif',     caption: 'Poolside Morning',       category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00743.avif',     caption: 'Pool Reflections',       category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00746.avif',     caption: 'Open-Air Pool',          category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00747.avif',     caption: 'Poolside Serenity',      category: 'Pool',        aspect: 'aspect-square' },
  { src: '/images/Pool Area/DSC00748.avif',     caption: 'Pool Deck',              category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00751.avif',     caption: 'Afternoon by the Pool',  category: 'Pool',        aspect: 'aspect-[3/4]'  },
  { src: '/images/Pool Area/DSC00753.avif',     caption: 'Nature Pool',            category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00755.avif',     caption: 'Pool & Greenery',        category: 'Pool',        aspect: 'aspect-square' },
  { src: '/images/Pool Area/DSC00756.avif',     caption: 'Swim in the Wild',       category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00759.avif',     caption: 'Poolside Lounge',        category: 'Pool',        aspect: 'aspect-[3/4]'  },
  { src: '/images/Pool Area/DSC00763.avif',     caption: 'Evening Pool',           category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00766.avif',     caption: 'Pool at Sunset',         category: 'Pool',        aspect: 'aspect-[4/3]'  },
  { src: '/images/Pool Area/DSC00769-HDR.avif', caption: 'Golden Hour Poolside',   category: 'Pool',        aspect: 'aspect-[4/3]'  },
  // Grounds
  { src: '/images/Room Outside/DSC00624.avif',  caption: 'Room Exterior',          category: 'Grounds',     aspect: 'aspect-[4/3]'  },
  { src: '/images/Room Outside/DSC00627.avif',  caption: 'Garden Pathway',         category: 'Grounds',     aspect: 'aspect-[3/4]'  },
  { src: '/images/Room Outside/DSC00630.avif',  caption: 'Nature Surrounds',       category: 'Grounds',     aspect: 'aspect-[4/3]'  },
  { src: '/images/Room Outside/DSC00633.avif',  caption: 'Villa Exterior',         category: 'Grounds',     aspect: 'aspect-[3/4]'  },
  { src: '/images/Room Outside/DSC00635.avif',  caption: 'Tropical Entrance',      category: 'Grounds',     aspect: 'aspect-square' },
  { src: '/images/Room Outside/DSC00641.avif',  caption: 'Open Balcony',           category: 'Grounds',     aspect: 'aspect-[4/3]'  },
  { src: '/images/Room Outside/DSC00642.avif',  caption: 'Outdoor Seating',        category: 'Grounds',     aspect: 'aspect-[3/4]'  },
  { src: '/images/Room Outside/DSC00644.avif',  caption: 'Garden View',            category: 'Grounds',     aspect: 'aspect-[4/3]'  },
  { src: '/images/Room Outside/DSC00649.avif',  caption: 'Jungle Terrace',         category: 'Grounds',     aspect: 'aspect-[4/3]'  },
  { src: '/images/Room Outside/DSC00659.avif',  caption: 'Morning Surroundings',   category: 'Grounds',     aspect: 'aspect-[3/4]'  },
  // Double Room
  { src: '/images/Deluxe double room with garden view/DSC00662-HDR.avif', caption: 'Deluxe Double Suite', category: 'Double Room', aspect: 'aspect-[4/3]' },
  { src: '/images/Deluxe double room with garden view/DSC00671.avif',     caption: 'Room Interior',       category: 'Double Room', aspect: 'aspect-[3/4]' },
  { src: '/images/Deluxe double room with garden view/DSC00680-HDR.avif', caption: 'Garden Suite',        category: 'Double Room', aspect: 'aspect-[4/3]' },
  { src: '/images/Deluxe double room with garden view/DSC00700-HDR.avif', caption: 'Cosy Retreat',        category: 'Double Room', aspect: 'aspect-square'},
  // Family Room
  { src: '/images/Deluxe family room with nature view/DSC00433-HDR.avif', caption: 'Family Room',         category: 'Family Room', aspect: 'aspect-[4/3]' },
  { src: '/images/Deluxe family room with nature view/DSC00450-HDR.avif', caption: 'Family Interior',     category: 'Family Room', aspect: 'aspect-[3/4]' },
  { src: '/images/Deluxe family room with nature view/DSC00470-HDR.avif', caption: 'Nature Room',         category: 'Family Room', aspect: 'aspect-[4/3]' },
  // Triple Room
  { src: '/images/Deluxe triple room with balcony/DSC00528-HDR.avif', caption: 'Triple Room',            category: 'Triple Room', aspect: 'aspect-[4/3]' },
  { src: '/images/Deluxe triple room with balcony/DSC00546-HDR.avif', caption: 'Balcony View',           category: 'Triple Room', aspect: 'aspect-[3/4]' },
  { src: '/images/Deluxe triple room with balcony/DSC00560-HDR.avif', caption: 'Triple Interior',        category: 'Triple Room', aspect: 'aspect-square'},
  // Dining
  { src: '/Reastuarent Area/Reastuarent Area/DSC00770.avif',     caption: 'Open-Air Dining',            category: 'Dining',      aspect: 'aspect-[4/3]'  },
  { src: '/Reastuarent Area/Reastuarent Area/DSC00779.avif',     caption: 'Restaurant Views',           category: 'Dining',      aspect: 'aspect-[3/4]'  },
  { src: '/Reastuarent Area/Reastuarent Area/DSC00787-HDR.avif', caption: 'Dining Ambience',            category: 'Dining',      aspect: 'aspect-[4/3]'  },
];

function spreadByCategory(items: GalleryImage[]): GalleryImage[] {
  const groups = new Map<string, GalleryImage[]>();
  for (const item of items) {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category)!.push(item);
  }
  const queues = Array.from(groups.values());
  const result: GalleryImage[] = [];
  let lastCat = '';
  while (queues.some(q => q.length > 0)) {
    const available = queues.filter(q => q.length > 0 && q[0].category !== lastCat);
    const pool = available.length > 0 ? available : queues.filter(q => q.length > 0);
    const chosen = [...pool].sort((a, b) => b.length - a.length)[0];
    const item = chosen.shift()!;
    result.push(item);
    lastCat = item.category;
  }
  return result;
}

const images = spreadByCategory(rawImages);

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
        <Image src="/images/Drone/DJI_20260504173915_0079_D_1778177359348.avif" alt="Gallery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 flex flex-col items-center mt-16">
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
                  {/* Always-visible category label */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/85 font-medium">{img.category}</span>
                  </div>
                  {/* Hover caption */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 p-3 pb-10">
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
