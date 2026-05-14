'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Clock, MapPin, Phone } from 'lucide-react';

const venues = [
  {
    name: 'Emerald Dining Room',
    type: 'Fine Dining',
    description:
      'An intimate indoor restaurant with floor-to-ceiling glass overlooking the forest canopy. Serves a curated menu of Indian and continental cuisine using ingredients sourced from our on-site organic garden.',
    image: '/hero2.jpeg',
    hours: '7:00 AM – 10:30 PM',
    location: 'Main Building, Ground Floor',
    highlights: ['Organic Garden Menu', 'Private Dining Available', 'Sunset Forest Views'],
  },
  {
    name: 'Azure Poolside Bar',
    type: 'Bar & Snacks',
    description:
      'Sip handcrafted cocktails, fresh juices, and light bites beside the infinity pool, surrounded by rustling palms and the sounds of the wild. The ultimate spot for a languid afternoon.',
    image: '/home.jpeg',
    hours: '10:00 AM – 11:00 PM',
    location: 'Pool Deck',
    highlights: ['Signature Cocktails', 'Light Bites & Sharing Boards', 'Poolside Service'],
  },
  {
    name: 'The Morning Lounge',
    type: 'Breakfast & Brunch',
    description:
      'A sunlit terrace café designed for slow mornings. Enjoy freshly baked pastries, cold-pressed juices, and a full à la carte breakfast menu with views of the misty mountains at dawn.',
    image: '/hero3.jpeg',
    hours: '6:30 AM – 12:00 PM',
    location: 'East Wing Terrace',
    highlights: ['Farm-Fresh Breakfast', 'Gluten-Free Options', 'Mountain View Terrace'],
  },
];

export default function RestaurantsPage() {
  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/home.jpeg" alt="Dining at Into the Wild" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand uppercase tracking-[0.35em] text-sm font-semibold mb-4 block"
          >
            Culinary Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white font-light mb-6"
          >
            Dining &amp; Bars
          </motion.h1>
          <div className="w-24 h-[2px] bg-brand mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-charcoal/55 max-w-2xl mx-auto text-center font-light text-base leading-relaxed"
          >
            Immerse yourself in flavours inspired by the wild. Fresh, local ingredients crafted into unforgettable dining experiences — from candlelit dinners in the forest to lazy poolside afternoons.
          </motion.p>
        </div>
      </section>

      {/* Venue Cards */}
      <section className="bg-ivory py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue, i) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={venue.image} alt={venue.name} fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
                    <span className="font-serif text-2xl text-white font-light mb-1">{venue.name}</span>
                    <span className="text-brand text-[9px] uppercase tracking-[0.35em] font-semibold">{venue.type}</span>
                  </div>
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1.5 bg-brand text-black text-[9px] uppercase tracking-[0.35em] font-semibold">{venue.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-charcoal font-light mb-3">{venue.name}</h3>
                  <p className="text-charcoal/55 font-light text-sm leading-relaxed text-justify mb-5">{venue.description}</p>

                  <div className="space-y-2 mb-5 pb-5 border-b border-charcoal/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                      <span className="text-[10px] text-charcoal/55 uppercase tracking-wide font-light">{venue.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                      <span className="text-[10px] text-charcoal/55 uppercase tracking-wide font-light">{venue.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {venue.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-1 border border-charcoal/12 text-[9px] text-charcoal/45 uppercase tracking-wide font-light">{h}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Bar */}
      <section className="bg-charcoal py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-brand text-[9px] uppercase tracking-[0.45em] font-semibold block mb-3">Reservations</span>
          <h2 className="font-serif text-3xl text-white font-light mb-3">Reserve Your Table</h2>
          <p className="text-white/50 font-light text-sm mb-8">
            For in-house dining reservations, please contact our concierge or reach us via WhatsApp.
          </p>
          <a
            href="https://wa.me/919847000000?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table%20at%20Into%20the%20Wild."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-black text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-brand-light transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Contact Concierge
          </a>
        </div>
      </section>

    </main>
  );
}
