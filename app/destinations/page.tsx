'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

type DestinationStat = { label: string; value: string };

type Destination = {
  name: string;
  tags: string[];
  image: string;
  stats: DestinationStat[];
  description: string;
  historicalSignificance?: string;
  visitorExperience: string;
  bestTime: string;
  timeRequired: string;
  entrance: string;
  idealFor: string;
};

const destinations: Destination[] = [
  {
    name: 'Sigiriya Rock Fortress',
    tags: ['HISTORY', 'CULTURE', 'ADVENTURE'],
    image: '/hero1.avif',
    stats: [
      { label: 'Distance', value: '~3 km' },
      { label: 'Travel Time', value: '8–10 mins' },
      { label: 'Height', value: '~200 m' },
      { label: 'Climb Time', value: '1.5–2 hours' },
    ],
    description:
      "Sigiriya Rock Fortress—also known as Lion Rock—is Sri Lanka's most celebrated UNESCO World Heritage Site. Rising nearly 200 metres above the jungle, this 5th-century royal citadel was built by King Kashyapa and served as a palace, fortress, and cultural centre.",
    historicalSignificance:
      'Sigiriya features symmetrical water gardens, ancient frescoes depicting celestial maidens, and the famous Mirror Wall inscribed with early Sinhalese poetry. The summit once housed royal residences and ceremonial spaces, offering commanding views across the Cultural Triangle.',
    visitorExperience:
      'The climb is structured with stairways and rest points, making it accessible for moderately fit visitors. The summit provides expansive views over forests, lakes, and villages.',
    bestTime: 'Early morning (6.00–9.00 am)',
    timeRequired: '2–3 hours',
    entrance: 'Paid ticket',
    idealFor: 'History lovers, First-time visitors, Photographers, Couples',
  },
  {
    name: 'Pidurangala Rock',
    tags: ['NATURE', 'VIEWS', 'SPIRITUAL'],
    image: '/hero2.avif',
    stats: [
      { label: 'Distance', value: '~4 km' },
      { label: 'Travel Time', value: '10–12 mins' },
      { label: 'Elevation', value: '~200 m' },
      { label: 'Hike Time', value: '30–45 mins' },
    ],
    description:
      "Pidurangala Rock is a massive rock formation and scenic viewpoint located just north of the ancient city of Sigiriya. Renowned for its panoramic 360-degree views, it offers one of the island's most iconic sights—Sigiriya Lion Rock rising above dense jungle and lakes.",
    historicalSignificance:
      "Pidurangala's religious origins date back to the 5th century CE. When King Kashyapa constructed Sigiriya Fortress, Buddhist monks residing there were relocated to Pidurangala. Meditation caves, stupas, and temple ruins remain visible along the trail.",
    visitorExperience:
      'The hike begins through temple grounds where modest attire is required. Stone steps and forest trails lead to caves and the reclining Buddha before the final ascent over large granite boulders.',
    bestTime: 'Sunrise or sunset',
    timeRequired: '2 hours',
    entrance: 'Donation (~LKR 1,000)',
    idealFor: 'Hikers, Photographers, Couples, Spiritual seekers',
  },
  {
    name: 'Minneriya National Park',
    tags: ['WILDLIFE', 'SAFARI', 'NATURE'],
    image: '/20251023_141902.avif',
    stats: [
      { label: 'Distance', value: '~24 km' },
      { label: 'Travel Time', value: '40–45 mins' },
      { label: 'Safari Time', value: '3–4 hours' },
    ],
    description:
      "Minneriya National Park is one of Sri Lanka's premier wildlife destinations, internationally famous for the Great Elephant Gathering. During the dry season, hundreds of wild elephants converge around the ancient Minneriya Tank, creating one of Asia's most remarkable wildlife spectacles.",
    visitorExperience:
      'Safaris are conducted by 4×4 jeeps with experienced drivers and naturalists, ensuring ethical wildlife viewing and safety. The park protects dry-zone forests, grasslands, and wetlands.',
    bestTime: 'Afternoon (2.30–6.30 pm)',
    timeRequired: '4–5 hours',
    entrance: 'Park entry + Jeep',
    idealFor: 'Wildlife lovers, Families, Photographers',
  },
  {
    name: 'Dambulla Cave Temple',
    tags: ['CULTURE', 'HISTORY', 'SPIRITUAL'],
    image: '/home.avif',
    stats: [
      { label: 'Distance', value: '~17 km' },
      { label: 'Travel Time', value: '25–30 mins' },
      { label: 'Time Required', value: '1.5–2 hours' },
    ],
    description:
      "Dambulla Cave Temple is Sri Lanka's largest and best-preserved cave temple complex, with over 2,000 years of continuous religious use. The site contains five caves adorned with vivid murals and more than 150 Buddha statues, carved and painted across centuries.",
    historicalSignificance:
      'Perched on a rocky hill, the temple remains an active place of worship while offering panoramic views over surrounding plains.',
    visitorExperience:
      'Morning visits are ideal before the midday heat. The caves are best explored slowly, allowing time to take in the remarkable ceiling murals and the serene atmosphere of an ancient living temple.',
    bestTime: 'Morning or late afternoon',
    timeRequired: '1.5–2 hours',
    entrance: 'Paid entry',
    idealFor: 'Cultural travellers, Spiritual visitors, Families',
  },
  {
    name: 'Cycling Tours Around Sigiriya',
    tags: ['ACTIVITY', 'NATURE', 'RELAXING'],
    image: '/20251016_101353.avif',
    stats: [
      { label: 'Distance', value: 'Near Hotel' },
      { label: 'Difficulty', value: 'Easy/Flat' },
      { label: 'Duration', value: '2–3 hours' },
    ],
    description:
      'Cycling around Sigiriya is a peaceful way to explore rice fields, lakes, and village backroads. The flat terrain and scenic surroundings make it accessible for most fitness levels.',
    visitorExperience:
      'Guided cycling routes take guests through paddy fields, small village roads, and along the edges of ancient reservoirs. Bicycles are available for hire near the hotel.',
    bestTime: 'Early morning or late afternoon',
    timeRequired: '2–3 hours',
    entrance: 'Rental fee',
    idealFor: 'Eco-travellers, Couples, Solo travellers',
  },
  {
    name: 'Sigiriya Village Safari',
    tags: ['CULTURE', 'FOOD', 'EXPERIENCE'],
    image: '/20251016_095222.avif',
    stats: [
      { label: 'Distance', value: '~5–7 km' },
      { label: 'Travel Time', value: '15–20 mins' },
      { label: 'Duration', value: '3–4 hours' },
    ],
    description:
      'The Sigiriya Village Safari offers an immersive introduction to rural Sri Lankan life. Guests experience bullock cart rides, tranquil catamaran journeys across village lakes, and visits to traditional homes, often ending with a freshly prepared village lunch.',
    visitorExperience:
      'Village safaris are led by local guides and include hands-on demonstrations of traditional crafts, farming, and cooking. A memorable experience for families and cultural travellers.',
    bestTime: 'Morning or early afternoon',
    timeRequired: '3–4 hours',
    entrance: 'Package basis',
    idealFor: 'Cultural explorers, Families, Seniors',
  },
  {
    name: 'Nature Walks & Bird Watching',
    tags: ['NATURE', 'WILDLIFE', 'WELLNESS'],
    image: '/about.avif',
    stats: [
      { label: 'Distance', value: '1–3 km' },
      { label: 'Travel', value: 'Walking' },
      { label: 'Best Time', value: 'Early morning' },
    ],
    description:
      'The forests and wetlands surrounding Sigiriya support rich biodiversity. Guided nature walks allow guests to spot peacocks, kingfishers, eagles, butterflies, and tropical plant life while enjoying a slow, mindful experience.',
    visitorExperience:
      'Guided walks depart from the hotel in the early morning hours when wildlife is most active. Binoculars and field guides are available on request.',
    bestTime: 'Early morning',
    timeRequired: '1–2 hours',
    entrance: 'Mostly free',
    idealFor: 'Nature lovers, Wellness travellers, Seniors',
  },
  {
    name: 'Traditional Cooking Experience',
    tags: ['FOOD', 'CULTURE', 'LEARNING'],
    image: '/ayurvedic-relaxing-health-beauty-happy-blonde-woma-2026-01-05-23-13-51-utc.avif',
    stats: [
      { label: 'Travel Time', value: '15–20 mins' },
      { label: 'Duration', value: '2–3 hours' },
    ],
    description:
      'This hands-on culinary experience introduces guests to authentic Sri Lankan cuisine. Activities include spice explanations, and cooking traditional rice and curry dishes with local hosts.',
    visitorExperience:
      'Guests learn to prepare authentic Sri Lankan dishes from scratch, using fresh local produce and traditional techniques. A memorable way to connect with local culture through food.',
    bestTime: 'Late morning or afternoon',
    timeRequired: '2–3 hours',
    entrance: 'Paid activity',
    idealFor: 'Food lovers, Couples, Families',
  },
];

export default function DestinationsPage() {
  return (
    <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/Drone/DJI_20260504173711_0078_D_1778177363708.avif" alt="Destinations & Activities" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 flex flex-col items-center mt-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-brand uppercase tracking-[0.35em] text-sm font-semibold mb-4 block"
          >
            Explore the Unknown
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white font-light mb-6"
          >
            Destinations &amp; Activities
          </motion.h1>
          <div className="w-24 h-[2px] bg-brand mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-charcoal/55 max-w-2xl mx-auto font-light text-base leading-relaxed"
          >
            Discover the ancient wonders and natural beauty that surround our retreat, from majestic rock fortresses to serene wildlife encounters.
          </motion.p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-charcoal/10 overflow-hidden shadow-sm"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                {/* Image Panel */}
                <div className="relative lg:w-[45%] aspect-[4/3] lg:aspect-auto overflow-hidden flex-shrink-0 lg:min-h-[420px]">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/25" />
                  {/* Category tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-brand text-[#3b3439] text-[8px] uppercase tracking-[0.3em] font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex flex-wrap gap-5">
                      {dest.stats.map((stat) => (
                        <div key={stat.label} className="text-white">
                          <p className="text-[8px] uppercase tracking-widest text-white/55 font-medium">{stat.label}</p>
                          <p className="text-sm font-light">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-5">{dest.name}</h2>
                  <p className="text-charcoal/55 font-light text-sm leading-relaxed mb-7">{dest.description}</p>

                  {dest.historicalSignificance && (
                    <div className="mb-6">
                      <h3 className="text-[9px] uppercase tracking-[0.4em] text-brand font-semibold mb-2">Historical Significance</h3>
                      <p className="text-charcoal/50 font-light text-sm leading-relaxed">{dest.historicalSignificance}</p>
                    </div>
                  )}

                  <div className="mb-7">
                    <h3 className="text-[9px] uppercase tracking-[0.4em] text-brand font-semibold mb-2">Visitor Experience</h3>
                    <p className="text-charcoal/50 font-light text-sm leading-relaxed">{dest.visitorExperience}</p>
                  </div>

                  {/* Plan Your Visit */}
                  <div>
                    <h3 className="text-[9px] uppercase tracking-[0.4em] text-brand font-semibold mb-3">Plan Your Visit</h3>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: 'BEST TIME', value: dest.bestTime },
                        { label: 'TIME REQUIRED', value: dest.timeRequired },
                        { label: 'ENTRANCE', value: dest.entrance },
                        { label: 'IDEAL FOR', value: dest.idealFor },
                      ].map((item) => (
                        <div key={item.label} className="px-3 py-3 bg-ivory border border-charcoal/8 rounded-xl">
                          <p className="text-[8px] uppercase tracking-widest text-charcoal/35 font-semibold mb-1">{item.label}</p>
                          <p className="text-[11px] text-charcoal/65 font-light leading-relaxed">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
