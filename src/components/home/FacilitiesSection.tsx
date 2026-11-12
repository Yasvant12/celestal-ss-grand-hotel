"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export function FacilitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const facilities = [
    {
      icon: "local_parking",
      title: "Expansive Parking Space",
      description:
        "Hosting an event at Celestial SS Grand Hotel? Our parking facilities are designed to accommodate events of all sizes. Whether it's an intimate gathering or a grand celebration, your guests find hassle-free, secure parking right on campus.",
      badge: "On-Site Parking",
    },
    {
      icon: "directions_car",
      title: "Valet Parking Available",
      description:
        "We understand the importance of making every moment count. With our dedicated Valet parking team, your arrival is effortless and welcoming—marking the beginning of an exceptional guest experience.",
      badge: "Uniformed Valet Attendants",
    },
    {
      icon: "videocam",
      title: "CCTV Facilities",
      description:
        "At Celestial SS Grand Hotel, your safety and security are paramount. Explore peace of mind with our state-of-the-art Closed-Circuit Television (CCTV) surveillance monitoring all gates, lawns, lobbies, and corridors.",
      badge: "Full Perimeter Coverage",
    },
    {
      icon: "fire_extinguisher",
      title: "Fire Safety Equipment",
      description:
        "Our property is equipped with advanced early detection systems, smoke sensors, centralized hydrants, and certified fire extinguishers designed to provide early warnings and prompt response.",
      badge: "Safety Certified Standards",
    },
    {
      icon: "shield_person",
      title: "Guards & Bouncers",
      description:
        "Step into a world of tranquility knowing that our dedicated team of trained security guards and professional bouncers work diligently to maintain crowd decorum and ensure a VIP experience for your families.",
      badge: "Dedicated Event Marshals",
    },
    {
      icon: "music_note",
      title: "Jaimala Themes, DJ & Band",
      description:
        "Elevate your wedding with bespoke revolving Jaimala setups, grand hydraulic stages, pyrotechnic cold firework entries, professional DJ sound consoles, and traditional royal brass band processions.",
      badge: "Turnkey Celebration Production",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-space-3xl bg-surface" id="facilities-section">
      <div className="site-container flex flex-col gap-space-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs"
        >
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary">
            Uncompromising Comfort &amp; Security
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Experience Unrivalled Facilities at Celestial SS Grand Hotel
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We combine contemporary boutique luxury with modern security infrastructure, dedicated logistical support, and celebratory services you demand for grand functions.
          </p>
        </motion.div>

        {/* Staggered Grid of 6 Facilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
        >
          {facilities.map((fac) => (
            <motion.div
              key={fac.title}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-surface-champagne rounded-xl p-space-xl flex flex-col gap-space-sm shadow-sm hover:shadow-md transition-shadow border border-surface-container-highest/40"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[28px]">{fac.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{fac.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{fac.description}</p>
              <div className="pt-2 flex items-center gap-1.5 text-primary font-label-button text-label-button">
                <span>{fac.badge}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
