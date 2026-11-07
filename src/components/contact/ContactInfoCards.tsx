"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function ContactInfoCards() {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      icon: MapPin,
      eyebrow: "Address & Arrival",
      title: "Our Location",
      description:
        "Visit us and experience the hospitality of CELESTAL SS GRAND HOTEL in the heart of modern Lucknow.",
      detailNode: (
        <p className="font-body-sm text-sm font-semibold text-stone-800 mb-6 leading-relaxed">
          CC-4, Sector-M, Near Ashiyana Power House,
          <br />
          LDA Colony, Ashiyana, Lucknow – 226012
        </p>
      ),
      actionText: "Get Directions",
      actionHref: "#map-view",
      actionIcon: ArrowRight,
      isExternal: false,
    },
    {
      icon: Phone,
      eyebrow: "Direct Lines",
      title: "Phone & Assistance",
      description:
        "Our guest relations team is available around the clock to assist you with inquiries and reservations.",
      detailNode: (
        <div className="space-y-2 mb-6">
          <a
            href={`tel:${HOTEL_INFO.phones.primary}`}
            className="flex items-center justify-between text-sm text-stone-800 hover:text-primary transition-colors py-1 border-b border-stone-100"
          >
            <span className="font-medium text-stone-600">Front Desk &amp; Rooms:</span>
            <span className="font-bold tracking-tight text-primary">
              {HOTEL_INFO.phones.primary}
            </span>
          </a>
          <a
            href={`tel:${HOTEL_INFO.phones.weddingDesk}`}
            className="flex items-center justify-between text-sm text-stone-800 hover:text-primary transition-colors py-1"
          >
            <span className="font-medium text-stone-600">Banquet &amp; Events:</span>
            <span className="font-bold tracking-tight text-primary">
              {HOTEL_INFO.phones.weddingDesk}
            </span>
          </a>
        </div>
      ),
      actionText: "Connect Direct",
      actionHref: `tel:${HOTEL_INFO.phones.primary}`,
      actionIcon: ArrowUpRight,
      isExternal: false,
    },
    {
      icon: Mail,
      eyebrow: "Written Correspondence",
      title: "Email Us",
      description:
        "Send us your tailored requirements. Our dedicated desk reviews and responds promptly within 2 hours.",
      detailNode: (
        <div className="space-y-2 mb-6">
          <a
            href={`mailto:${HOTEL_INFO.email}`}
            className="flex flex-col text-sm text-stone-800 hover:text-primary transition-colors py-1 border-b border-stone-100"
          >
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              General &amp; Suites
            </span>
            <span className="font-medium truncate text-stone-900">{HOTEL_INFO.email}</span>
          </a>
          <a
            href={`mailto:${HOTEL_INFO.reservationsEmail || HOTEL_INFO.email}`}
            className="flex flex-col text-sm text-stone-800 hover:text-primary transition-colors py-1"
          >
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              Banquets &amp; Weddings
            </span>
            <span className="font-medium truncate text-stone-900">
              {HOTEL_INFO.reservationsEmail || HOTEL_INFO.email}
            </span>
          </a>
        </div>
      ),
      actionText: "Compose Inquiry",
      actionHref: `mailto:${HOTEL_INFO.email}`,
      actionIcon: ArrowRight,
      isExternal: false,
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 md:-mt-14 w-full">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const ActionIcon = card.actionIcon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group border border-stone-200/90"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-champagne flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-surface-container-lowest transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-deep tracking-widest uppercase block mb-1">
                    {card.eyebrow}
                  </span>
                  <h2 className="font-headline-sm text-xl sm:text-2xl text-on-surface mb-2 font-semibold">
                    {card.title}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  {card.detailNode}
                </div>

                <a
                  href={card.actionHref}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 font-label-button text-xs font-bold text-primary hover:text-gold-deep uppercase tracking-wider group-hover:translate-x-1 transition-all pt-2 border-t border-stone-100"
                >
                  <span>{card.actionText}</span>
                  <ActionIcon className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

