'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Maximize, Users, Wifi, Wind, Leaf, Bath, Volume2, Coffee, Waves, Mountain, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
import { rooms } from '@/lib/rooms';

function getAmenityIcon(amenity: string) {
  const map: Record<string, React.ReactElement> = {
    'Free WiFi': <Wifi className="w-4 h-4" />,
    'Air Conditioning': <Wind className="w-4 h-4" />,
    'Garden View': <Leaf className="w-4 h-4" />,
    'Pool View': <Waves className="w-4 h-4" />,
    'Mountain View': <Mountain className="w-4 h-4" />,
    'Attached Bathroom': <Bath className="w-4 h-4" />,
    'Soundproof': <Volume2 className="w-4 h-4" />,
    'Tea/Coffee Maker': <Coffee className="w-4 h-4" />,
  };
  return map[amenity] ?? <Wifi className="w-4 h-4" />;
}

export default function AccommodationPage() {
  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/Room Outside/DSC00633.avif" alt="Accommodation" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 flex flex-col items-center mt-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand uppercase tracking-[0.35em] text-sm font-semibold mb-4 block"
          >
            Our Rooms
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
      <section className="bg-white pt-16 pb-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-charcoal font-light mb-3">Select Your Room</h2>
            <p className="text-charcoal/55 max-w-2xl mx-auto font-light text-sm leading-relaxed">
              Choose from our carefully designed rooms, each offering a unique blend of comfort and natural beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Room Cards */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white border border-charcoal/10 overflow-hidden rounded-2xl"
            >
              <div className="flex flex-col md:flex-row">

                {/* Image */}
                <Link href={`/accommodation/${room.id}`} className="relative md:w-[35%] aspect-[16/10] md:aspect-auto overflow-hidden flex-shrink-0 block">
                  <Image
                    src={room.image} alt={room.name} fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                </Link>

                {/* Details */}
                <div className="flex-1 p-5 md:p-5 flex flex-col justify-between">
                  <div>
                    <Link href={`/accommodation/${room.id}`}>
                      <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light mb-3 hover:text-brand transition-colors duration-300">{room.name}</h2>
                    </Link>
                    <div className="flex flex-wrap items-center gap-5 mb-5">
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="w-3.5 h-3.5 text-brand" />
                        <span className="text-sm text-charcoal/50 font-light">{room.bedType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize className="w-3.5 h-3.5 text-brand" />
                        <span className="text-sm text-charcoal/50 font-light">{room.size}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand" />
                        <span className="text-sm text-charcoal/50 font-light">Max {room.capacity} Person</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="font-serif text-2xl text-charcoal font-light">${room.price}</span>
                      <span className="text-charcoal/40 text-[10px] ml-2 uppercase tracking-wide font-medium">per night &bull; includes taxes</span>
                    </div>

                    {/* Description */}
                    <p className="text-charcoal/50 font-light text-sm leading-relaxed mb-5 line-clamp-3">{room.description}</p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2.5 mb-5">
                      {room.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-1.5 text-charcoal/60">
                          <span className="text-brand">{getAmenityIcon(amenity)}</span>
                          <span className="text-sm font-light">{amenity}</span>
                        </div>
                      ))}
                    </div>

                    {/* Breakfast + Payment */}
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand/10 border border-brand/25 rounded-lg">
                        <CheckCircle className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                        <span className="text-sm text-charcoal/65 font-light">Sri Lankan &amp; English Mix Breakfast included</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-charcoal/5 border border-charcoal/10 rounded-lg">
                        <CheckCircle className="w-3.5 h-3.5 text-charcoal/35 flex-shrink-0" />
                        <span className="text-sm text-charcoal/45 font-light">Visa / Master Credit or Debit card Accepted</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/accommodation/${room.id}`}
                    className="flex items-center gap-2 w-fit px-6 py-3 bg-charcoal text-white text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-brand hover:text-[#3b3439] transition-colors duration-300 rounded-full"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Restaurant CTA */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] flex items-center justify-center">
          <Image src="/images/Pool Area/DSC00763.avif" alt="Dining at Into the Wild" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6 flex flex-col items-center">
            <span className="text-brand uppercase tracking-[0.35em] text-xs font-semibold mb-4 block">Dining Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-4 leading-tight">
              Savour the Wild,<br />
              <span className="italic text-brand">Taste the Forest</span>
            </h2>
            <p className="text-white/60 text-sm font-light max-w-md mb-8 leading-relaxed">
              From jungle-to-table menus to candlelit open-air dining — explore our restaurant experience.
            </p>
            <Link
              href="/restaurants"
              className="flex items-center gap-2 px-8 py-3.5 bg-brand text-[#3b3439] text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-white transition-colors duration-300 rounded-full"
            >
              Explore Dining <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
