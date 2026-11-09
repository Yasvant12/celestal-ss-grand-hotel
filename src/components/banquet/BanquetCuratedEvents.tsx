"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

interface EventCategory {
  id: string;
  pill: string;
  title: string;
  description: string;
  capacity: string;
  image: string;
}

const EVENTS: EventCategory[] = [
  {
    id: "weddings",
    pill: "Weddings & Receptions",
    title: "Majestic Vows",
    description: "Comprehensive staging for ceremony themes, royal dining banquets, and grand celebratory receptions up to 900 guests.",
    capacity: "Up to 900 Guests",
    image: "/images/hotel-banquet-wedding-stage.jpg",
  },
  {
    id: "engagements",
    pill: "Ring Ceremonies",
    title: "Engagements & Roka",
    description: "Intimate gatherings enveloped in warm champagne ambiance, acoustic melodies, and artisanal cocktail hors d'oeuvres.",
    capacity: "150 - 350 Guests",
    image: "/images/hotel-banquet-ballroom-02.jpg",
  },
  {
    id: "birthdays",
    pill: "Anniversaries & Galas",
    title: "Milestone Birthdays",
    description: "Contemporary audio setups, DJ console staging, gourmet live stations, and thematic photo installations.",
    capacity: "100 - 300 Guests",
    image: "/images/hotel-banquet-ballroom-03.jpg",
  },
  {
    id: "sangeet",
    pill: "Music & Cocktails",
    title: "Sangeet & Mehendi",
    description: "Spacious open dance floors with high-clarity sound engineering and lounge-style cocktail service.",
    capacity: "200 - 450 Guests",
    image: "/images/hotel-banquet-ballroom-04.jpg",
  },
  {
    id: "corporate",
    pill: "Executive Conclaves",
    title: "Corporate Summits",
    description: "Dual-screen projection, digital lecterns, high-speed Wi-Fi, breakout zones, and prompt executive luncheon catering.",
    capacity: "80 - 400 Delegates",
    image: "/images/hotel-banquet-ballroom-05.jpg",
  },
  {
    id: "social",
    pill: "Family Reunions",
    title: "Social Celebrations",
    description: "Unrushed family reunions, retirement soirees, and sacred anniversaries hosted with attentive warmth.",
    capacity: "100 - 300 Guests",
    image: "/images/hotel-banquet-ballroom-06.jpg",
  },
];

interface BanquetCuratedEventsProps {
  onSelectEventType?: (eventType: string) => void;
}

export function BanquetCuratedEvents({ onSelectEventType }: BanquetCuratedEventsProps) {
  const handleClick = (eventType: string) => {
    if (onSelectEventType) {
      onSelectEventType(eventType);
    }
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-surface-champagne py-16 sm:py-20 lg:py-24">
      <div className="site-container flex flex-col gap-12 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary">
              Curated Celebrations
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-on-surface">
              Tailored Settings for Every Milestone
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Each occasion demands bespoke spatial rhythm, fine dining choreography, and an impeccable host experience.
            </p>
          </div>

          <div>
            <a
              href="#enquiry-section"
              className="font-label-button text-label-button uppercase px-6 py-3.5 bg-primary text-on-primary hover:bg-gold-deep rounded-xl transition-all tracking-widest inline-flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Discuss Your Date</span>
              <Calendar className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleClick(event.pill)}
              className="group cursor-pointer bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-surface-container-highest/60 hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/85 via-noir-charcoal/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-surface-ivory/95 text-on-surface font-eyebrow-luxury text-eyebrow-luxury uppercase px-3 py-1 rounded-md shadow-sm border border-stone-200">
                  {event.pill}
                </span>
                <span className="absolute bottom-4 left-4 text-primary-fixed-dim font-headline-sm text-xl text-white font-semibold">
                  {event.title}
                </span>
              </div>

              {/* Text Description */}
              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-3 flex items-center justify-between text-primary font-label-compact text-label-compact font-bold border-t border-surface-container-highest/60">
                  <span>{event.capacity}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Enquire</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

