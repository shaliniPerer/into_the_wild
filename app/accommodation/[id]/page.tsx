'use client';

import { notFound, useParams } from 'next/navigation';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Maximize, Wifi, Wind, Tv, Coffee, Bath, MessageCircle, Star, CheckCircle } from 'lucide-react';
import { rooms } from '@/lib/rooms';

export default function RoomDetailPage() {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find((r) => r.id === id);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.id !== id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in booking the ${room.name} at Into the Wild. Please share availability.`
  );

  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <Image src={room.image} alt={room.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 w-full px-8 md:px-16 pb-14">
          <Link href="/accommodation" className="flex items-center gap-2 text-white/70 hover:text-brand transition-colors text-xs uppercase tracking-widest mb-5 w-fit">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Rooms
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1.5 bg-brand text-black text-[9px] uppercase tracking-[0.35em] font-semibold mb-4 inline-block">{room.tag}</span>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-light">{room.name}</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-14">

            {/* Left Column */}
            <div className="flex-1 min-w-0">

              {/* Key Stats */}
              <div className="flex items-center gap-8 pb-8 mb-8 border-b border-charcoal/10">
                <div className="flex items-center gap-2.5">
                  <Maximize className="w-5 h-5 text-brand" />
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-charcoal/40 font-medium">Room Size</p>
                    <p className="font-serif text-lg text-charcoal font-light">{room.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-brand" />
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-charcoal/40 font-medium">Occupancy</p>
                    <p className="font-serif text-lg text-charcoal font-light">{room.capacity} Guests</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-brand text-brand" />
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-[1px] bg-brand" />
                  <span className="text-[9px] uppercase tracking-[0.45em] text-brand font-semibold">About This Room</span>
                </div>
                <p className="text-charcoal/60 font-light text-base leading-relaxed text-justify">{room.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-brand" />
                  <span className="text-[9px] uppercase tracking-[0.45em] text-brand font-semibold">Amenities Included</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Wifi className="w-4 h-4" />, label: 'High-Speed Wi-Fi' },
                    { icon: <Wind className="w-4 h-4" />, label: 'Air Conditioning' },
                    { icon: <Tv className="w-4 h-4" />, label: 'Smart Television' },
                    { icon: <Coffee className="w-4 h-4" />, label: 'Daily Breakfast' },
                    { icon: <Bath className="w-4 h-4" />, label: 'Luxury Toiletries' },
                    { icon: <CheckCircle className="w-4 h-4" />, label: 'Daily Housekeeping' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3.5 border border-charcoal/8 bg-ivory">
                      <div className="text-brand flex-shrink-0">{item.icon}</div>
                      <span className="text-[10px] uppercase tracking-wide text-charcoal/55 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-brand" />
                  <span className="text-[9px] uppercase tracking-[0.45em] text-brand font-semibold">Room Gallery</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {room.gallery.map((img, i) => (
                    <motion.div
                      key={img}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative aspect-[4/3] overflow-hidden"
                    >
                      <Image src={img} alt={`${room.name} ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Booking Sidebar */}
            <div className="lg:w-[320px] flex-shrink-0">
              <div className="sticky top-28 bg-ivory border border-charcoal/10 p-8">
                <div className="mb-6 pb-6 border-b border-charcoal/10 text-center">
                  <span className="text-[9px] uppercase tracking-widest text-charcoal/40 block mb-1">Starting From</span>
                  <span className="font-serif text-4xl text-charcoal font-light">${room.price}</span>
                  <span className="text-[10px] text-charcoal/40 ml-1.5 uppercase tracking-widest">/ Night</span>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Complimentary Breakfast',
                    'Airport Transfer Available',
                    'Free Cancellation (48 hrs)',
                    'Personal Concierge Service',
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                      <span className="text-[10px] text-charcoal/60 uppercase tracking-wide font-light">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919847000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-[#20b558] transition-colors mb-3"
                >
                  <MessageCircle className="w-4 h-4" /> Book via WhatsApp
                </a>
                <Link
                  href="mailto:bookings@intothewild.com"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-charcoal text-white text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-brand hover:text-black transition-colors"
                >
                  Email Us to Book
                </Link>

                <p className="text-[9px] text-charcoal/35 text-center mt-5 leading-relaxed">
                  Rates subject to availability. Taxes included. Minimum stay may apply.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="bg-ivory border-t border-charcoal/10 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[1px] bg-brand" />
            <span className="text-[9px] uppercase tracking-[0.45em] text-brand font-semibold">Explore Other Rooms</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRooms.map((r) => (
              <Link key={r.id} href={`/accommodation/${r.id}`} className="group block overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image src={r.image} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-charcoal font-light mb-1">{r.name}</h3>
                <p className="text-[9px] uppercase tracking-widest text-brand font-semibold">${r.price} / Night</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
