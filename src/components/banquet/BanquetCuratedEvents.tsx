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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkhCvvVo1CsW6L2Zp4Xg2lR0Qmu8OjAZvz0UpNywmZF3DyjGPqZyxvWUXrMcdrXXHYX-UUHfx6-DcRBZmCAWc8j8zL94T4c92f2YM3uYdiZJVMwvqQo7g9XpJPVYDDuyzhGT2vNR8g-2hInWxvMp1ZyZgF9g79GyMzEv_jZNITnOPb_jacih-sIpTwxNraFpKT11yi2ROyMR6dO1UQAh-WO-PkeFpjcT3a0bL8Rrk",
  },
  {
    id: "engagements",
    pill: "Ring Ceremonies",
    title: "Engagements & Roka",
    description: "Intimate gatherings enveloped in warm champagne ambiance, acoustic melodies, and artisanal cocktail hors d'oeuvres.",
    capacity: "150 - 350 Guests",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANJ6TzqbKmt6XPu3Yg1sAtyBOx4extjT915SWDcia3U5xmbRD63ErzLEDeIHkhO0H0pEfLTfL9QXvAWzBn77ezst0j7xeF9WLxk9FrZG9S32m_7pAQTpmIMes_reYjrMGmTZxQ5VsrIfmWu2N8bI83J8AAsypgFvMoJbz2EzQYRC5i_jSxNFFLMkKOrFtyIDY-ZaSn5PAAcBBX6iKc5lxpHbvUNHjZxRAmlRcmeas",
  },
  {
    id: "birthdays",
    pill: "Anniversaries & Galas",
    title: "Milestone Birthdays",
    description: "Contemporary audio setups, DJ console staging, gourmet live stations, and thematic photo installations.",
    capacity: "100 - 300 Guests",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMcIHMgferFWA8AHNMuvtrMVc6HtQesn2HK_HXmFjzTIH0gRm4FKIHYAQi8H7BqEkXCNB3j8qSvgVbQ2g99XOheGXyEFWrqRc54-b17WhqfeESq-ws28d4pVRkrfYTCna-J3b9lA8WWfecB84zQ5YOOSjtpSVHvBIyb9_87y-JpRcS79cpXMWGXKxdMoYEFwNFKQl-HfcsX3Bj9WdcmSuf0wHGZhletQ815BVJKS8",
  },
  {
    id: "sangeet",
    pill: "Music & Cocktails",
    title: "Sangeet & Mehendi",
    description: "Spacious open dance floors with high-clarity sound engineering and lounge-style cocktail service.",
    capacity: "200 - 450 Guests",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClgWjIRXzwS2iQrGr9Ef4UffOXpu8reAI3vLpD3vekOEnAuQHGfveJ5bbscHlK8d2RYhDCgHtzuNPSMoV2gsLvqlEimAuoS55C80QBSsdYPxUNW_ccof2hIke5PjrFv61Ygp5wgAeDyxv-GvUz6OTaor6aGmMbUkBB-urQG18yWXfSUOcP6pZUfK_XPMeW88pEazh-n6ASfDkEc7UPo75EESKlA0i9bXoo3rmDVfA",
  },
  {
    id: "corporate",
    pill: "Executive Conclaves",
    title: "Corporate Summits",
    description: "Dual-screen projection, digital lecterns, high-speed Wi-Fi, breakout zones, and prompt executive luncheon catering.",
    capacity: "80 - 400 Delegates",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaHrA6CDtPsBlAppWwrzbYTo7UC1eNxPQVxUuUa_0ozErY5ZUa4EyhkgH5jF2rav9eHO0FnqRZ3NH4kpUGpLHtfI3iS6LMtOCE6TcxRCD7cPzt4BS5_CG6ORn0VU5dBHxD1B0VBYrbxGi_kqNrXDKvFK9fUeWYqIkZnBDJEf-yd5Q886HUVkL7A4P6QGf2dlEbfm9t_ksfla60vaGeThDGa5B-91CgsFAQgL7comA",
  },
  {
    id: "social",
    pill: "Family Reunions",
    title: "Social Celebrations",
    description: "Unrushed family reunions, retirement soirees, and sacred anniversaries hosted with attentive warmth.",
    capacity: "100 - 300 Guests",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbjINCQgy4h-PaJq9Po_6YzrqFlKt7UtSELqTraKt-6kXXaNgV4suLZEjkhMqT56Hh2hwlW0t8US0I9qmcmiM4NqbZ1HQVKbCKdwty2rJrhYZkydoTP509Zw1hg2dc_W1eVtmB3IPTGO6ri34Jt4Z_B0g0eEcjnBFS_iihL8Y-joF-YBenNvwePLHAUsHJOomQvYDLWvgWEVHgjhdhCRXAsj7iBKPojR3BbXlk5TA",
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

