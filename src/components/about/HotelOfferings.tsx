"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HotelOfferings() {
  const offerings = [
    {
      title: "Rooms & Suites",
      tag: "Boutique Stay",
      description:
        "Comfortable spaces designed for a relaxing stay with personalized room amenities.",
      image:
        "/images/hotel-front-entrance-stairs.jpg",
      link: "#rooms-section",
      cta: "Explore Rooms",
    },
    {
      title: "Restaurant & Dining",
      tag: "Gastronomy",
      description:
        "Enjoy delicious dining in a welcoming atmosphere with bespoke gourmet and world menus.",
      image:
        "/images/hotel-banquet-ballroom-04.jpg",
      link: "#dining-section",
      cta: "Explore Restaurant",
    },
    {
      title: "Banquet & Celebrations",
      tag: "Weddings",
      description:
        "Beautiful spaces for weddings, parties and special occasions with 400+ guest capacity.",
      image:
        "/images/hotel-banquet-wedding-stage.jpg",
      link: "#banquet-section",
      cta: "Explore Banquets",
    },
    {
      title: "Events & Gatherings",
      tag: "Open Lawns",
      description:
        "Spacious open lawn and hospitality for memorable gatherings of 800+ distinguished guests.",
      image:
        "/images/hotel-banquet-ballroom-05.jpg",
      link: "#banquet-section",
      cta: "Discover Events",
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-12 bg-surface" id="offerings-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary tracking-[0.25em]">
                Our Signature Spaces
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-noir-charcoal tracking-tight">
              Experience Everything Under One Roof
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body-md text-body-md text-on-surface-variant font-light max-w-md"
          >
            A seamless sanctuary uniting boutique accommodation, gourmet culinary creations, and grand celebrations in one cohesive destination.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-500 border border-surface-container-highest/40"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  src={item.image}
                  alt={`Celestal SS Grand Hotel ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-noir-charcoal/80 backdrop-blur-md text-gold-light text-label-compact font-label-compact tracking-widest uppercase">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-noir-charcoal mb-2 font-semibold">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light mb-6">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-gold-deep font-label-button text-label-button uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

