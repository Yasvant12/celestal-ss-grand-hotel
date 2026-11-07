"use client";

import { motion } from "framer-motion";
import { Utensils, Flame, ArrowRight } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function DiningFeature() {
  const diningImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9pjGs2zVzKbIczF-K2prsT6147H0N_Oz74dH7CQibmiv896LwLfYa0dT0CZSud8433AG6x6gC12N8EDqQMjpIwfwDPpb0C89OjnMyzn0iwXL-b_Ihp6x6GuGUptz-ggAPYTl2yVO2pvTEZ9Sl57o20-WQ741uDKG_B_N76BdpaEPe-iCI6Y1PFdb68qZQ0eTeQDxRSw5Q1daxtXBMIWawaF9Qv04HI1MCtxJUdTo";

  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-12 bg-surface" id="dining-section">
      <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-primary tracking-[0.25em]">
              Curated Culinary Excellence
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-noir-charcoal tracking-tight mb-6">
            Fine Dining &amp; Contemporary Bistro
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-6">
            Our master chefs curate an elevated dining experience celebrating fresh seasonal produce, artisanal techniques, and contemporary multi-cuisine classics served in an elegant ambiance.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-8">
            From signature plated specialties to expansive celebratory buffets, every dish is crafted with refined taste, culinary passion, and immaculate hygiene.
          </p>

          {/* Highlights */}
          <div className="w-full space-y-3 mb-10">
            <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between border border-surface-container-highest/50">
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-primary" />
                <span className="font-body-md text-body-md text-noir-charcoal font-medium">
                  Artisanal Preparation &amp; Dedicated Kitchens
                </span>
              </div>
              <span className="font-label-compact text-label-compact text-primary font-semibold uppercase text-[11px]">
                100% Certified Hygiene &amp; Quality
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between border border-surface-container-highest/50">
              <div className="flex items-center gap-3">
                <Flame className="w-5 h-5 text-primary" />
                <span className="font-body-md text-body-md text-noir-charcoal font-medium">
                  Live Chef Counters &amp; Custom Banquet Menus
                </span>
              </div>
              <span className="font-label-compact text-label-compact text-primary font-semibold uppercase text-[11px]">
                Customizable
              </span>
            </div>
          </div>

          <a
            href={`tel:${HOTEL_INFO.phones.lawnsCatering}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-noir-charcoal font-label-button text-label-button uppercase tracking-wider transition-colors"
          >
            <span>Explore Our Restaurant</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </motion.div>

        {/* Right: Image with Badge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative order-1 lg:order-2"
        >
          <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl bg-surface-container">
            <img
              src={diningImage}
              alt="Artisanal multi-cuisine dining experience at Celestal SS Grand Hotel Lucknow"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-noir-charcoal text-surface-ivory shadow-2xl hidden md:flex flex-col max-w-[210px] border border-white/10">
            <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-light uppercase tracking-widest mb-1 text-[10px] font-bold">
              Authentic
            </span>
            <span className="font-headline-sm text-headline-sm text-surface-ivory text-base font-semibold leading-snug">
              Master Culinary Team &amp; Contemporary Cuisine
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

