'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

// Food images from public/images/Food/
const foodPhotos = [
  '/images/Food/DSC00804.avif',
  '/images/Food/DSC00831.avif',
  '/images/Food/DSC00837.avif',
  '/images/Food/DSC00838.avif',
  '/images/Food/DSC00841.avif',
  '/images/Food/DSC00842.avif',
  '/images/Food/DSC00845.avif',
  '/images/Food/DSC00846.avif',
  '/images/Food/DSC00847.avif',
  '/images/Food/DSC00855.avif',
  '/images/Food/DSC00864.avif',
  '/images/Food/DSC00866.avif',
  '/images/Food/DSC00868.avif',
  '/images/Food/DSC00870.avif',
  '/images/Food/DSC00872.avif',
  '/images/Food/DSC00874.avif',
  '/images/Food/DSC00877.avif',
  '/images/Food/DSC00880.avif',
];

const restaurantPhotos = [
  '/Reastuarent Area/Reastuarent Area/DSC00770.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00774-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00775.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00777-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00779.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00782.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00784-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00785.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00787-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00789-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00792-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00795-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00798-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00821-HDR.avif',
  '/Reastuarent Area/Reastuarent Area/DSC00828.avif',
];

export default function RestaurantsPage() {
  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/Reastuarent Area/Reastuarent Area/DSC00770.avif" alt="Dining at Into the Wild" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 flex flex-col items-center mt-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand uppercase tracking-[0.35em] text-sm font-semibold mb-4 block"
          >
            Restaurant
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white font-light mb-6"
          >
            A Taste of Nature at Into The Wild
          </motion.h1>
          <div className="w-24 h-[2px] bg-brand mx-auto mb-6" />
         
        </div>
      </section>

      {/* Food Grid — Freshly Prepared Delights */}
      <section className="bg-ivory py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand uppercase tracking-[0.35em] text-xs font-semibold block mb-4"
            >
              Our Menu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-charcoal font-light mb-6"
            >
              Freshly Prepared Delights
            </motion.h2>
            <div className="w-16 h-[2px] bg-brand mx-auto mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-charcoal/60 font-light text-base leading-relaxed max-w-2xl mx-auto"
            >
              From traditional Sri Lankan favourites to international dishes, every meal is prepared with care and flavour.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {foodPhotos.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative aspect-square overflow-hidden group rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Food dish ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Area — Relaxed Open-Air Dining */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand uppercase tracking-[0.35em] text-xs font-semibold block mb-4"
            >
              The Space
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-charcoal font-light mb-6"
            >
              Relaxed Open-Air Dining
            </motion.h2>
            <div className="w-16 h-[2px] bg-brand mx-auto mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-charcoal/60 font-light text-base leading-relaxed max-w-2xl mx-auto"
            >
              A peaceful dining experience designed to help you unwind while enjoying nature and great food.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {restaurantPhotos.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative aspect-square overflow-hidden group rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Restaurant area ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve Your Dining Experience CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand uppercase tracking-[0.45em] text-xs font-semibold block mb-4"
          >
            Reservations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white font-light mb-6"
          >
            Reserve Your Dining Experience
          </motion.h2>
          <div className="w-16 h-[2px] bg-brand mx-auto mb-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-white/55 font-light text-base leading-relaxed mb-10"
          >
            Join us for a relaxing meal surrounded by the beauty of Sigiriya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* View Menu — update href to '/menu.pdf' once the PDF is ready */}
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-[#3b3439] text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-brand/80 transition-colors rounded-full"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
