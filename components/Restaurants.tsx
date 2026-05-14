"use client";

import { motion } from "motion/react";
import Image from "next/image";

const restaurants = [
  {
    id: 1,
    title: "Canopy Dining",
    description: "Savor exquisite local and international cuisine while suspended above the forest floor.",
    image: "https://picsum.photos/seed/restaurant1/1200/800",
  },
  {
    id: 2,
    title: "The River Pavilion",
    description: "An intimate dining experience by the gently flowing river, perfect for romantic evenings.",
    image: "https://picsum.photos/seed/restaurant2/1200/800",
  },
  {
    id: 3,
    title: "Wilderness Bar",
    description: "Enjoy handcrafted cocktails infused with forest botanicals under a canopy of stars.",
    image: "https://picsum.photos/seed/restaurant3/1200/800",
  }
];

export function Restaurants() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative h-[400px] w-full rounded-md overflow-hidden mb-6 shadow-lg border border-brand/20">
                <Image
                  src={restaurant.image}
                  alt={restaurant.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex flex-col flex-1 px-2 mt-4">
                <h3 className="font-serif text-2xl text-charcoal leading-tight group-hover:text-brand transition-colors duration-300 mb-2">
                  {restaurant.title}
                </h3>
                <p className="text-[12px] text-muted font-light leading-relaxed mb-6 flex-1">
                  {restaurant.description}
                </p>
                
                <div className="text-[10px] uppercase tracking-[0.2em] border-b border-brand pb-0.5 text-charcoal font-semibold w-max group-hover:text-brand transition-colors mt-auto">
                  View Menu
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
