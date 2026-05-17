'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BedDouble, Eye, Maximize, Users, Wifi, Wind, Leaf, Bath, Volume2, Coffee, Waves, Mountain, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import { rooms } from '@/lib/rooms';

function getAmenityIcon(amenity: string): React.ReactElement | null {
  const map: Record<string, React.ReactElement> = {
    'Free WiFi': <Wifi className="w-5 h-5" />,
    'Air Conditioning': <Wind className="w-5 h-5" />,
    'Garden View': <Leaf className="w-5 h-5" />,
    'Pool View': <Waves className="w-5 h-5" />,
    'Mountain View': <Mountain className="w-5 h-5" />,
    'Attached Bathroom': <Bath className="w-5 h-5" />,
    'Soundproof': <Volume2 className="w-5 h-5" />,
    'Tea/Coffee Maker': <Coffee className="w-5 h-5" />,
  };
  return map[amenity] ?? <Wifi className="w-5 h-5" />;
}

export default function RoomDetailPage() {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find((r) => r.id === id);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.id !== id);

  const whatsappMessage = encodeURIComponent(
    `Hello Into the Wild, I would like to book the ${room.name}. Please share availability and rates.`
  );

  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src={room.image} alt={room.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 md:left-16 z-10">
          <Link href="/accommodation" className="flex items-center gap-2 text-white/70 hover:text-brand transition-colors text-xs uppercase tracking-widest mb-4 w-fit">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Rooms
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl text-white font-light"
          >
            {room.name}
          </motion.h1>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-ivory border-b border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-8 py-5">
            <div className="flex items-center gap-2.5">
              <BedDouble className="w-4 h-4 text-brand" />
              <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">{room.bedType}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-brand" />
              <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">{room.view}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Maximize className="w-4 h-4 text-brand" />
              <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">{room.size}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-brand" />
              <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-medium">Max {room.capacity} Guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Column */}
            <div className="flex-1 min-w-0">

              {/* About */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-charcoal font-light mb-4 pb-3 border-b border-charcoal/10">About This Room</h2>
                <p className="text-charcoal/60 font-light text-base leading-relaxed">{room.description}</p>
              </div>

              {/* Gallery */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-charcoal font-light mb-4 pb-3 border-b border-charcoal/10">Room Gallery</h2>
                <div className="grid grid-cols-2 gap-3">
                  {room.gallery.map((img, i) => (
                    <motion.div
                      key={img}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <Image src={img} alt={`${room.name} view ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-charcoal font-light mb-4 pb-3 border-b border-charcoal/10">Room Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3">
                      <span className="text-brand flex-shrink-0">{getAmenityIcon(amenity)}</span>
                      <span className="text-sm text-charcoal/65 font-light">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-serif text-2xl text-charcoal font-light mb-4 pb-3 border-b border-charcoal/10">Room Features</h2>
                <div className="grid grid-cols-2 gap-3">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                      <span className="text-sm text-charcoal/65 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Booking Sidebar */}
            <div className="lg:w-[290px] flex-shrink-0">
              <div className="sticky top-28">

                {/* Price + Book */}
                <div className="border border-charcoal/10 p-6 mb-4 bg-white rounded-2xl">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="font-serif text-3xl text-charcoal font-light">${room.price}</span>
                    <span className="text-[10px] uppercase tracking-wide text-charcoal/40">per night</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-wide text-charcoal/35 mb-4">includes taxes and fees</p>

                  <div className="flex items-center gap-2 py-3 mb-4 border-t border-b border-charcoal/10">
                    <CheckCircle className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                    <span className="text-[9px] uppercase tracking-wide text-charcoal/55 font-medium">Sri Lankan &amp; English Mix Breakfast included</span>
                  </div>

                  <p className="text-[9px] text-charcoal/35 mb-5 uppercase tracking-wide">Visa / Master Credit or Debit card Accepted</p>

                  <a
                    href={`https://wa.me/919847000000?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-[#20b558] transition-colors rounded-full"
                  >
                    <MessageCircle className="w-4 h-4" /> Book Your Stay
                  </a>
                </div>

                {/* Also Available On */}
                <div className="border border-charcoal/10 p-5 bg-white rounded-2xl">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-charcoal/40 font-semibold mb-4">Also Available On</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.booking.com/Share-gplZl5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 border border-charcoal/10 hover:border-brand hover:bg-brand/5 transition-colors group rounded-lg"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-medium group-hover:text-charcoal transition-colors">Booking.com</span>
                      <ExternalLink className="w-3 h-3 text-charcoal/30 group-hover:text-brand transition-colors" />
                    </a>
                    <a
                      href="https://www.airbnb.com/rooms/1383068012318418039"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 border border-charcoal/10 hover:border-brand hover:bg-brand/5 transition-colors group rounded-lg"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-medium group-hover:text-charcoal transition-colors">Airbnb</span>
                      <ExternalLink className="w-3 h-3 text-charcoal/30 group-hover:text-brand transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Rooms */}
      {otherRooms.length > 0 && (
        <section className="bg-ivory border-t border-charcoal/10 py-14">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="font-serif text-2xl text-charcoal font-light mb-8">Other Rooms You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {otherRooms.map((r) => (
                <Link key={r.id} href={`/accommodation/${r.id}`} className="group flex items-center gap-0 bg-white border border-charcoal/10 overflow-hidden hover:border-brand/30 transition-colors rounded-xl">
                  <div className="relative w-36 h-28 flex-shrink-0 overflow-hidden">
                    <Image src={r.image} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[9px] uppercase tracking-widest text-brand font-semibold mb-1">${r.price}/night</p>
                    <h3 className="font-serif text-base text-charcoal font-light leading-tight mb-1">{r.name}</h3>
                    <p className="text-[9px] uppercase tracking-wide text-charcoal/40">{r.size} &middot; {r.capacity} Person</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
