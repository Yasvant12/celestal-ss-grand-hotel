"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HOTEL_INFO } from "@/lib/constants";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="w-full bg-noir-charcoal text-surface-champagne shadow-[0_-1px_12px_rgba(0,0,0,0.08)] border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="site-container pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12"
      >
        {/* 4-Column Editorial Matrix matching approved HTML structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Narrative */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-headline-sm text-xl lg:text-2xl uppercase tracking-wider text-surface-ivory font-serif">
                Celestal SS Grand
              </span>
              <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-gold-light mt-1">
                Hotel &amp; Residences
              </span>
            </div>

            <p className="font-body-sm text-sm text-surface-container-highest max-w-sm leading-relaxed">
              An international hallmark of serene hospitality, thoughtfully designed rooms, grand celebrations, and elevated gastronomy curated for the discerning global traveler.
            </p>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-compact text-xs text-gold-light hover:text-surface-ivory uppercase tracking-widest transition-colors group"
              >
                <span>Private Residences Concierge</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-surface-ivory font-bold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-sm text-surface-container-highest">
              <li>
                <Link href="/" className="hover:text-gold-light transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-light transition-colors">
                  Our Heritage &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-gold-light transition-colors">
                  Rooms &amp; Accommodation
                </Link>
              </li>
              <li>
                <Link href="/services" prefetch={true} className="hover:text-gold-light transition-colors">
                  Hospitality &amp; Services
                </Link>
              </li>
              <li>
                <a href="/#facilities-section" className="hover:text-gold-light transition-colors">
                  Wellness, Spa &amp; Amenities
                </a>
              </li>
              <li>
                <Link href="/gallery" prefetch={true} className="hover:text-gold-light transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  Contact Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Events & Dining */}
          <div className="flex flex-col gap-4">
            <h4 className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-surface-ivory font-bold">
              Events &amp; Dining
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-sm text-surface-container-highest">
              <li>
                <Link href="/banquet#venue-astor" prefetch={true} className="hover:text-gold-light transition-colors">
                  The Grand Astor Ballroom
                </Link>
              </li>
              <li>
                <Link href="/banquet#venue-crystal" prefetch={true} className="hover:text-gold-light transition-colors">
                  The Celestial Crystal Hall
                </Link>
              </li>
              <li>
                <Link href="/banquet" prefetch={true} className="hover:text-gold-light transition-colors">
                  Weddings &amp; Receptions
                </Link>
              </li>
              <li>
                <a href="/#venues-section" className="hover:text-gold-light transition-colors">
                  Celestal Bistro &amp; Dining
                </a>
              </li>
              <li>
                <a href="/#venues-section" className="hover:text-gold-light transition-colors">
                  Starlit Celebration Lawn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Concierge & Location */}
          <div className="flex flex-col gap-4">
            <h4 className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-surface-ivory font-bold">
              Concierge &amp; Location
            </h4>
            <div className="flex flex-col gap-2 font-body-sm text-sm text-surface-container-highest">
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-1" />
                <span>
                  Plot 5, Misripur Guramba, Kursi Road, Lucknow, Uttar Pradesh 226026
                </span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-gold-light shrink-0" />
                <a
                  className="hover:text-gold-light transition-colors"
                  href={`tel:${HOTEL_INFO.phones.primary}`}
                >
                  {HOTEL_INFO.phones.primary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-light shrink-0" />
                <a
                  className="hover:text-gold-light transition-colors truncate"
                  href={`mailto:${HOTEL_INFO.email}`}
                >
                  {HOTEL_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/10 hover:bg-[#25D366] hover:text-white text-surface-ivory rounded-xl font-label-button text-xs uppercase tracking-widest transition-all border border-white/10"
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-surface-container-highest/70 font-eyebrow-luxury text-eyebrow-luxury tracking-wider text-xs">
          <p className="text-center md:text-left">
            © 2025 Celestal SS Grand Hotel. All rights reserved. Contemporary Luxury Redefined.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gold-light transition-colors uppercase">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gold-light transition-colors uppercase">
              Terms of Stay
            </Link>
            <Link href="/contact" className="hover:text-gold-light transition-colors uppercase">
              Concierge Services
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
