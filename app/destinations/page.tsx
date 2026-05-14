'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, Clock, Star } from 'lucide-react';

const destinations = [
  {
    name: 'Sigiriya Rock Fortress',
    category: 'UNESCO Heritage',
    distance: '12 km',
    duration: '30 min drive',
    rating: '5.0',
    image: '/hero1.jpeg',
    description:
      'The iconic 5th-century citadel rising 200m above the surrounding plains. Explore ancient frescoes, water gardens, and breathtaking summit views — one of Sri Lanka\'s most spectacular landmarks.',
    highlights: ['Ancient Rock Fortress', 'Frescoes & Graffiti Wall', 'Panoramic Summit Views'],
  },
  {
    name: 'Dambulla Cave Temple',
    category: 'Sacred Site',
    distance: '18 km',
    duration: '40 min drive',
    rating: '4.9',
    image: '/home.jpeg',
    description:
      'A sacred complex of five cave temples carved into a massive granite outcrop, housing over 150 statues of the Buddha and remarkable ceiling frescoes spanning 2,000 years of Sri Lankan history.',
    highlights: ['5 Ancient Cave Temples', '150+ Buddha Statues', 'World Heritage Site'],
  },
  {
    name: 'Minneriya National Park',
    category: 'Wildlife Safari',
    distance: '22 km',
    duration: '45 min drive',
    rating: '4.8',
    image: '/20251023_141902.jpg',
    description:
      'Witness "The Gathering" — one of the largest assemblies of wild Asian elephants on earth. Minneriya is also home to leopards, sloth bears, sambar deer, and a wealth of birdlife around its ancient reservoir.',
    highlights: ['Wild Elephant Gathering', 'Leopard & Sloth Bear', 'Ancient Reservoir'],
  },
  {
    name: 'Pidurangala Rock',
    category: 'Adventure',
    distance: '14 km',
    duration: '35 min drive',
    rating: '4.7',
    image: '/hero2.jpeg',
    description:
      'For those who crave the view without the crowds. Pidurangala offers a more challenging hike rewarded with a sweeping panorama of Sigiriya Rock and the surrounding jungle canopy at sunrise.',
    highlights: ['Sunrise Hike', 'Sigiriya Rock Views', 'Ancient Reclining Buddha'],
  },
  {
    name: 'Polonnaruwa Ancient City',
    category: 'UNESCO Heritage',
    distance: '55 km',
    duration: '1.5 hr drive',
    rating: '4.9',
    image: '/hero3.jpeg',
    description:
      'Sri Lanka\'s medieval capital, home to superbly preserved ruins of palaces, temples, and the magnificent Gal Vihara — four colossal Buddha figures carved directly from a single granite face.',
    highlights: ['Gal Vihara Sculptures', 'Royal Palace Ruins', 'Ancient Stupas'],
  },
  {
    name: 'Kaudulla National Park',
    category: 'Wildlife Safari',
    distance: '30 km',
    duration: '50 min drive',
    rating: '4.7',
    image: '/094A0142.JPG.jpeg',
    description:
      'A quieter alternative to Minneriya, Kaudulla is best known for elephant sightings at dusk around its ancient tank. The park forms part of the "Elephant Corridor" connecting Minneriya and Trikonamadu.',
    highlights: ['Dusk Elephant Safaris', 'Elephant Corridor', 'Waterbird Sanctuary'],
  },
  {
    name: 'Ritigala Ruins',
    category: 'Hidden Gem',
    distance: '40 km',
    duration: '1 hr drive',
    rating: '4.6',
    image: '/about.jpeg',
    description:
      'An ancient forest monastery hidden within a nature reserve, rising mysteriously from the dry plains. Ruined stone pathways, meditation platforms, and the rare highland ecology make this a truly off-the-beaten-path experience.',
    highlights: ['Ancient Forest Monastery', 'Jungle Trekking', 'Rare Flora & Fauna'],
  },
  {
    name: 'Hiriwadunna Village Safari',
    category: 'Cultural Experience',
    distance: '8 km',
    duration: '20 min drive',
    rating: '4.8',
    image: '/20251016_101353.jpg.jpeg',
    description:
      'A half-day village experience by tractor, boat, and foot. Discover traditional Sri Lankan rural life — paddy fields, buffalo rides through the tank, village cooking, and a canoe journey through the jungle.',
    highlights: ['Tractor & Canoe Ride', 'Buffalo Ride', 'Village Cooking Experience'],
  },
];

export default function DestinationsPage() {
  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/hero1.jpeg" alt="Sri Lanka Destinations" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand uppercase tracking-[0.35em] text-sm font-semibold mb-4 block"
          >
            Cultural Triangle, Sri Lanka
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white font-light mb-6"
          >
            Destinations
          </motion.h1>
          <div className="w-24 h-[2px] bg-brand mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-brand" />
              <span className="text-[9px] uppercase tracking-[0.45em] text-brand font-semibold">Explore Nearby</span>
              <div className="w-8 h-[1px] bg-brand" />
            </div>
            <p className="text-charcoal/55 max-w-2xl mx-auto font-light text-base leading-relaxed">
              Positioned in the heart of Sri Lanka's Cultural Triangle, Into the Wild places you minutes from ancient wonders, untamed wildlife reserves, and timeless villages. Every journey from our resort is an adventure waiting to unfold.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="bg-ivory py-8 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={dest.image} alt={dest.name} fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-brand text-black text-[9px] uppercase tracking-[0.35em] font-semibold">
                      {dest.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-brand text-brand" />
                    <span className="text-white text-[10px] font-semibold">{dest.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-serif text-xl text-charcoal font-light leading-tight">{dest.name}</h2>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-brand" />
                        <span className="text-[9px] uppercase tracking-wide text-charcoal/50">{dest.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-brand" />
                        <span className="text-[9px] uppercase tracking-wide text-charcoal/50">{dest.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-charcoal/50 font-light text-sm leading-relaxed mb-4 text-justify">{dest.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-1 border border-charcoal/12 text-[9px] text-charcoal/45 uppercase tracking-wide font-light">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="bg-charcoal py-14">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-brand text-[9px] uppercase tracking-[0.45em] font-semibold block mb-3">Plan Your Exploration</span>
          <h2 className="font-serif text-3xl text-white font-light mb-3">Let Us Arrange Your Day Trips</h2>
          <p className="text-white/50 font-light text-sm mb-8 max-w-lg mx-auto">
            Our concierge team handles all transportation, guided tours, and entry tickets. Just tell us where you'd like to go.
          </p>
          <a
            href="https://wa.me/919847000000?text=Hi%2C%20I'd%20like%20to%20arrange%20day%20trips%20from%20Into%20the%20Wild."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-black text-[10px] uppercase tracking-[0.35em] font-semibold hover:bg-brand-light transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" /> Arrange with Concierge
          </a>
        </div>
      </section>

    </main>
  );
}
