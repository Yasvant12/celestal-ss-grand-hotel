"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function BanquetFeature() {
  const ballroomImage =
    "/images/hotel-banquet-ballroom-01.jpg";
  const lawnImage =
    "/images/hotel-open-lawn.webp";

  return (
    <section className="w-full py-24 md:py-32 px-6 lg:px-12 bg-noir-charcoal text-surface-ivory relative overflow-hidden" id="banquet-section">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="site-container flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-gold-metallic" />
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase text-gold-light tracking-[0.25em]">
            Celebrations &amp; Grand Events
          </span>
          <span className="w-8 h-px bg-gold-metallic" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline-lg text-headline-lg text-surface-ivory tracking-tight max-w-3xl mb-6"
        >
          Designed for Grand Dreams &amp; Cherished Memories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body-lg text-body-lg text-surface-champagne/80 font-light max-w-2xl leading-relaxed"
        >
          Architected for modern milestone celebrations, corporate galas, and bespoke gatherings in the prime heart of Ashiyana.
        </motion.p>
      </div>

      {/* Dual Venue Feature Bento */}
      <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Banquet Hall Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 rounded-2xl bg-white/5 p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm border border-white/10"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-light uppercase tracking-widest text-xs font-semibold">
                Indoor Elegance
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-surface-champagne tracking-wider">
                Up to 400 Guests
              </span>
            </div>

            <h3 className="font-headline-md text-headline-md text-surface-ivory mb-4">
              The Grand Ballroom
            </h3>
            <p className="font-body-md text-body-md text-surface-champagne/75 font-light leading-relaxed mb-8">
              An air-conditioned architectural masterpiece featuring soaring acoustic ceilings, custom crystal chandeliers, dedicated private lounges, and state-of-the-art audio-visual integrations.
            </p>
          </div>

          <div className="w-full aspect-[21/9] rounded-xl overflow-hidden bg-noir-charcoal mb-6">
            <img
              src={ballroomImage}
              alt="Grand Ballroom at Celestal SS Grand Hotel"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
            <div>
              <span className="block font-headline-sm text-headline-sm text-gold-light font-semibold">
                Central AC
              </span>
              <span className="text-[11px] text-surface-champagne/60 uppercase tracking-wider">
                Climate Control
              </span>
            </div>
            <div>
              <span className="block font-headline-sm text-headline-sm text-gold-light font-semibold">
                Acoustic
              </span>
              <span className="text-[11px] text-surface-champagne/60 uppercase tracking-wider">
                Sound Staging
              </span>
            </div>
            <div>
              <span className="block font-headline-sm text-headline-sm text-gold-light font-semibold">
                En-Suite
              </span>
              <span className="text-[11px] text-surface-champagne/60 uppercase tracking-wider">
                Bridal Lounges
              </span>
            </div>
          </div>
        </motion.div>

        {/* Lawn Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 rounded-2xl bg-white/5 p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm border border-white/10"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-eyebrow-luxury text-eyebrow-luxury text-gold-light uppercase tracking-widest text-xs font-semibold">
                Alfresco Starlit
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-surface-champagne tracking-wider">
                800+ Guests
              </span>
            </div>

            <h3 className="font-headline-md text-headline-md text-surface-ivory mb-4">
              Celebration Lawn
            </h3>
            <p className="font-body-md text-body-md text-surface-champagne/75 font-light leading-relaxed mb-8">
              An expansive open-air manicured turf setting surrounded by stately palms. Perfect for grand wedding ceremonies, dramatic fireworks entries, revolving stage setups, and starlit open banqueting under Lucknow skies.
            </p>
          </div>

          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-noir-charcoal mb-6">
            <img
              src={lawnImage}
              alt="Celebration Lawn at Celestal SS Grand Hotel"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-center">
            <div>
              <span className="block font-headline-sm text-headline-sm text-gold-light font-semibold">
                Open Sky
              </span>
              <span className="text-[11px] text-surface-champagne/60 uppercase tracking-wider">
                Starlit Canopy
              </span>
            </div>
            <div>
              <span className="block font-headline-sm text-headline-sm text-gold-light font-semibold">
                Spacious
              </span>
              <span className="text-[11px] text-surface-champagne/60 uppercase tracking-wider">
                Grand Capacity
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dual CTAs */}
      <div className="site-container flex flex-wrap items-center justify-center gap-6">
        <a
          href={`tel:${HOTEL_INFO.phones.weddingDesk}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-on-primary font-label-button text-label-button uppercase tracking-wider shadow-xl hover:bg-gold-deep transition-all font-semibold"
        >
          <span>Explore Banquet Halls</span>
          <Calendar className="w-4 h-4" />
        </a>

        <a
          href={HOTEL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-surface-ivory font-label-button text-label-button uppercase tracking-wider transition-all font-semibold"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Plan Your Event via WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
