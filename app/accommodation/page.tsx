'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Maximize, Wifi, Wind, Tv, Coffee, Bath, ArrowRight } from 'lucide-react';

export const rooms = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tag: 'Garden View',
    image: '/20251016_142529.jpg',
    description:
      'A serene space wrapped in tropical greenery, featuring warm teak interiors, floor-to-ceiling glass walls, and a private terrace overlooking the lush garden. A retreat designed for those who seek quiet luxury.',
    capacity: '2',
    size: '45 sqm',
    price: '250',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Television', 'Balcony', 'Private Bathroom'],
    gallery: ['/20251016_141228.jpg', '/20251016_142613.jpg', '/20251016_143023.jpg', '/20251016_141102.jpg'],
  },
  {
    id: 'superior-room',
    name: 'Superior Room',
    tag: 'Forest Facing',
    image: '/20251016_123549.jpg',
    description:
      'Elevated luxury in a spacious room featuring deep soaking tub, premium organic linens, and a generous balcony with sweeping forest views. Crafted for guests who demand the finest in refined comfort.',
    capacity: '2',
    size: '55 sqm',
    price: '350',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Television', 'Balcony', 'Private Bathroom'],
    gallery: ['/20251016_122855.jpg', '/20251016_124246.jpg', '/20251016_124422.jpg', '/20251016_125447.jpg'],
  },
  {
    id: 'superior-king-room',
    name: 'Superior King Room',
    tag: 'Premium',
    image: '/20251023_135406.jpg',
    description:
      'A grand sanctuary with a king-sized platform bed, rich hardwood floors, polished concrete bathroom with a rainfall shower, and a panoramic view of the resort gardens. Space, silence, and sophistication in perfect measure.',
    capacity: '2',
    size: '65 sqm',
    price: '450',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Television', 'Balcony', 'Private Bathroom'],
    gallery: ['/20251023_134530.jpg', '/20251023_143021.jpg', '/20251023_143215.jpg', '/20251023_134155.jpg'],
  },
  {
    id: 'suite',
    name: 'Suite',
    tag: 'Most Exclusive',
    image: '/20251016_144553.jpg',
    description:
      'Our most exclusive offering. The Suite features its own private pool, a butler on call, separate living and sleeping areas, and a spa-inspired bathroom with a jacuzzi tub surrounded by garden windows. An unmatched sanctuary of privacy and luxury.',
    capacity: '2',
    size: '120 sqm',
    price: '950',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Television', 'Balcony', 'Private Bathroom'],
    gallery: ['/20251016_151607.jpg', '/20251016_153103.jpg', '/20251016_153610.jpg', '/20251016_144821.jpg'],
  },
];

export default function AccommodationPage() {
  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/20251016_153610.jpg" alt="Accommodation" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand uppercase tracking-[0.35em] text-sm font-semibold mb-4 block"
          >
            Your Private Sanctuary
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white font-light mb-6"
          >
            Accommodation
          </motion.h1>
          <div className="w-24 h-[2px] bg-brand mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white pt-16 pb-4">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-charcoal/55 max-w-2xl mx-auto font-light text-base leading-relaxed"
          >
            Choose from our curated selection of rooms and suites, each designed to harmonise with the natural surroundings while delivering world-class luxury.
          </motion.p>
        </div>
      </section>

      {/* Room Cards Grid */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-0">
                  <Image
                    src={room.image} alt={room.name} fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-brand text-black text-[9px] uppercase tracking-[0.35em] font-semibold">
                      {room.tag}
                    </span>
                  </div>
                  {/* Price overlay */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-2 bg-black/60 backdrop-blur-sm text-white font-serif text-lg font-light">
                      ${room.price}<span className="text-[9px] ml-1 uppercase tracking-widest text-white/70">/ night</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="border border-t-0 border-charcoal/10 px-6 py-5 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-serif text-2xl text-charcoal font-light leading-tight">{room.name}</h2>
                    <div className="flex items-center gap-3 pt-1 flex-shrink-0 ml-4">
                      <div className="flex items-center gap-1.5">
                        <Maximize className="w-3.5 h-3.5 text-brand" />
                        <span className="text-[10px] uppercase tracking-wide text-charcoal/50 font-medium">{room.size}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand" />
                        <span className="text-[10px] uppercase tracking-wide text-charcoal/50 font-medium">{room.capacity}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-charcoal/50 font-light text-sm leading-relaxed mb-5 line-clamp-2">{room.description}</p>
                  <Link
                    href={`/accommodation/${room.id}`}
                    className="flex items-center gap-2 w-fit px-6 py-3 bg-charcoal text-white text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-brand hover:text-black transition-colors duration-300"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Strip */}
      <section className="bg-ivory border-t border-charcoal/10 py-12 mt-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: <Wifi className="w-5 h-5" />, label: 'High-Speed Wi-Fi' },
              { icon: <Wind className="w-5 h-5" />, label: 'Air Conditioning' },
              { icon: <Tv className="w-5 h-5" />, label: 'Smart Television' },
              { icon: <Coffee className="w-5 h-5" />, label: 'Daily Breakfast' },
              { icon: <Bath className="w-5 h-5" />, label: 'Luxury Toiletries' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="text-brand">{item.icon}</div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal/55 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
