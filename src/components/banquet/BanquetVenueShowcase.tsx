"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Maximize2,
  PartyPopper,
  TreePine,
  Utensils,
  Users,
  type LucideIcon,
} from "lucide-react";

interface VenueSpecification {
  label: string;
  value: string;
  Icon: LucideIcon;
}

interface VenueHighlight {
  label: string;
  Icon: LucideIcon;
}

interface Venue {
  id: string;
  name: string;
  category: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  photos?: { src: string; alt: string }[];
  enquiryName: string;
  specifications: VenueSpecification[];
  highlights: VenueHighlight[];
}

const VENUES: Venue[] = [
  {
    id: "venue-sapphire",
    name: "Sapphire Hall",
    category: "Banquet Hall",
    eyebrow: "Weddings & Social Gatherings",
    description:
      "A refined setting for weddings, receptions, celebrations and social gatherings.",
    image: "/images/banquet/sapphire-hall/sapphire-hall-wedding-setup.png",
    imageAlt: "Wedding celebration setup in a banquet hall",
    photos: [
      {
        src: "/images/banquet/sapphire-hall/sapphire-hall-wedding-setup.png",
        alt: "Wedding celebration setup in a banquet hall",
      },
      {
        src: "/images/banquet/sapphire-hall/Wedding_Banquet_Hall.png",
        alt: "Interior view of a banquet hall at Celestial SS Grand Hotel",
      },
      {
        src: "/images/banquet/sapphire-hall/weew.png",
        alt: "Wide view across a decorated hotel banquet hall",
      },
    ],
    enquiryName: "Sapphire Hall",
    specifications: [
      { label: "Capacity", value: "300 guests", Icon: Users },
      { label: "Venue Type", value: "Banquet Hall", Icon: Building2 },
    ],
    highlights: [
      { label: "Weddings", Icon: Heart },
      { label: "Receptions", Icon: PartyPopper },
      { label: "Celebrations", Icon: PartyPopper },
      { label: "Social gatherings", Icon: Users },
    ],
  },
  {
    id: "venue-emerald",
    name: "Emerald Hall",
    category: "Banquet Hall",
    eyebrow: "Weddings & Corporate Events",
    description:
      "A versatile hall for weddings, corporate events and celebrations.",
    image: "/images/banquet/emerald-hall/emerald-hall-main.jpg",
    imageAlt: "Emerald Hall event space set for a celebration",
    photos: [
      {
        src: "/images/banquet/emerald-hall/emerald-hall-main.jpg",
        alt: "Emerald Hall event space set for a celebration",
      },
      {
        src: "/images/banquet/emerald-hall/emerald-hall-buffet-room.png",
        alt: "A closer look at the luxurious buffet setup at Celestial SS Grand.",
      },
      {
        src: "/images/banquet/emerald-hall/emerald-hall-wedding-setup.png",
        alt: "Reception celebration setup in a hotel event space",
      },
      {
        src: "/images/banquet/emerald-hall/emerald-hall-gold-white-buffet.png",
        alt: "Gold-and-white buffet counter in Emerald Hall",
      },
    ],
    enquiryName: "Emerald Hall",
    specifications: [
      { label: "Capacity", value: "300 guests", Icon: Users },
      { label: "Venue Type", value: "Banquet Hall", Icon: Building2 },
    ],
    highlights: [
      { label: "Weddings", Icon: Heart },
      { label: "Corporate events", Icon: BriefcaseBusiness },
      { label: "Celebrations", Icon: PartyPopper },
    ],
  },
  {
    id: "venue-destiny-hall",
    name: "Destiny Hall",
    category: "Banquet Hall",
    eyebrow: "Weddings & Celebrations",
    description:
      "A welcoming indoor setting for weddings, receptions and celebrations.",
    image: "/images/banquet/destiny-hall/destiny-hall-burgundy-wedding-banquet.png",
    imageAlt: "Burgundy and gold wedding banquet setup in Destiny Hall",
    photos: [
      {
        src: "/images/banquet/destiny-hall/destiny-hall-burgundy-wedding-banquet.png",
        alt: "Burgundy and gold wedding banquet setup in Destiny Hall",
      },
      {
        src: "/images/banquet/destiny-hall/destiny-hall-wedding-stage.jpeg",
        alt: "Floral wedding stage arranged in Destiny Hall",
      },
      {
        src: "/images/banquet/destiny-hall/destiny-hall-wedding-setup.png",
        alt: "Wedding setup in Destiny Hall, arranged for a celebration",
      },
      {
        src: "/images/banquet/destiny-hall/destiny-hall-floral-swing-stage.png",
        alt: "Floral swing stage design for a wedding celebration",
      },
    ],
    enquiryName: "Destiny Hall",
    specifications: [
      { label: "Capacity", value: "300 guests", Icon: Users },
      { label: "Venue Type", value: "Banquet Hall", Icon: Building2 },
    ],
    highlights: [
      { label: "Weddings", Icon: Heart },
      { label: "Receptions", Icon: PartyPopper },
      { label: "Celebrations", Icon: PartyPopper },
    ],
  },
    {
    id: "venue-ruby",
    name: "Ruby Lounge",
    category: "Private Lounge",
    eyebrow: "Intimate Gatherings & Meetings",
    description:
      "A welcoming choice for intimate gatherings, private celebrations and meetings.",
    image: "/images/hotel-banquet-ballroom-09.jpg",
    imageAlt: "Ruby Lounge arranged for a private gathering",
    photos: [
      {
        src: "/images/banquet/emerald-hall/ruby.png",
        alt: "Ruby Lounge arranged for a private gathering",
      },
    ],
    enquiryName: "Ruby Lounge",
    specifications: [
      { label: "Capacity", value: "60 guests", Icon: Users },
      { label: "Venue Type", value: "Private Lounge", Icon: Building2 },
    ],
    highlights: [
      { label: "Intimate gatherings", Icon: Users },
      { label: "Private celebrations", Icon: PartyPopper },
      { label: "Meetings", Icon: BriefcaseBusiness },
    ],
  },
  // {
  //   id: "venue-restaurant-60",
  //   name: "Restaurant",
  //   category: "Dining Venue · 60 Guests",
  //   eyebrow: "Dining & Family Gatherings",
  //   description:
  //     "A dining venue for meals, family gatherings and small celebrations.",
  //   image: "/images/hotel-restaurant-dining-table.png",
  //   imageAlt: "Restaurant dining table prepared for guests",
  //   enquiryName: "Restaurant (60 guests)",
  //   specifications: [
  //     { label: "Capacity", value: "60 guests", Icon: Users },
  //     { label: "Venue Type", value: "Restaurant", Icon: Utensils },
  //   ],
  //   highlights: [
  //     { label: "Dining", Icon: Utensils },
  //     { label: "Family gatherings", Icon: Users },
  //     { label: "Small celebrations", Icon: PartyPopper },
  //   ],
  // },
  // {
  //   id: "venue-restaurant-56",
  //   name: "Restaurant",
  //   category: "Separate Dining Venue · 56 Guests",
  //   eyebrow: "A Separate Restaurant Venue",
  //   description:
  //     "A separate restaurant venue, presented independently from the 60-guest restaurant.",
  //   image: "/images/hotel-restaurant-interior-01.jpeg",
  //   imageAlt: "Interior of a separate restaurant dining venue",
  //   enquiryName: "Restaurant (56 guests)",
  //   specifications: [
  //     { label: "Capacity", value: "56 guests", Icon: Users },
  //     { label: "Venue Type", value: "Restaurant", Icon: Utensils },
  //   ],
  //   highlights: [
  //     { label: "Separate dining venue", Icon: Utensils },
  //     { label: "56-guest capacity", Icon: Users },
  //   ],
  // },
  {
    id: "venue-connected-lawn",
    name: "Green Lawn with Connected Double-Height Banquet",
    category: "Indoor & Outdoor Venue",
    eyebrow: "Seamless Indoor & Outdoor Events",
    description:
      "An outdoor green lawn connected to a double-height banquet, bringing indoor and outdoor celebrations together.",
    image: "/images/hotel-open-lawn-celebration.png",
    imageAlt: "Green lawn event space connected to the hotel venue",
    photos: [
      {
        src: "/images/hotel-open-lawn-celebration.png",
        alt: "Green lawn event space connected to the hotel venue",
      },

      {
        src: "/images/banquet/golden-lawn/golden-lawn-hotel-evening-view.jpeg",
        alt: "Hotel exterior and outdoor event space in the evening",
      },
      {
        src: "/images/banquet/golden-lawn/golden-lawn-hotel-night-celebration.jpeg",
        alt: "Hotel exterior beside the lawn during a nighttime celebration",
      },
    ],
    enquiryName: "Green Lawn with Connected Double-Height Banquet",
    specifications: [
      { label: "Combined Capacity", value: "1,000 guests", Icon: Users },
      { label: "Venue Type", value: "Lawn + Double-Height Banquet", Icon: Building2 },
    ],
    highlights: [
      { label: "Outdoor green lawn", Icon: TreePine },
      { label: "Connected double-height banquet", Icon: Building2 },
      { label: "Grand weddings & receptions", Icon: Heart },
      { label: "Large celebrations", Icon: PartyPopper },
    ],
  },
  {
    id: "venue-destiny-lawn",
    name: "Golden Knot lawn",
    category: "Outdoor Green Lawn",
    eyebrow: "Grand Outdoor Celebrations",
    description:
      "A 33,000 sq. ft. green lawn approximately 50 metres from the hotel, located on the same side. Suitable for grand weddings, large-scale receptions and outdoor celebrations.",
    image: "/images/banquet/golden-lawn/golden-lawn-night-wedding-setup.jpeg",
    imageAlt: "Nighttime wedding setup on the hotel's green lawn",
    photos: [
      {
        src: "/images/banquet/sapphire-hall/golden.png",
        alt: "Nighttime wedding setup on the hotel's green lawn",
      },
      {
        src: "/images/banquet/golden-lawn/golden-lawn-day-celebration.jpeg",
        alt: "Daytime outdoor celebration setup on the lawn",
      },
    ],
    enquiryName: "Destiny Hall Green Lawn",
    specifications: [
      { label: "Capacity", value: "1,500 guests", Icon: Users },
      { label: "Green Lawn Area", value: "33,000 sq. ft.", Icon: Maximize2 },
      { label: "From the Hotel", value: "Approx. 50 metres", Icon: MapPin },
    ],
    highlights: [
      { label: "On the same side as the hotel", Icon: MapPin },
      { label: "Grand weddings", Icon: Heart },
      { label: "Large-scale receptions", Icon: PartyPopper },
      { label: "Outdoor celebrations", Icon: TreePine },
    ],
  },
];

interface BanquetVenueShowcaseProps {
  onSelectVenue?: (venue: string) => void;
}

interface VenueCardProps extends BanquetVenueShowcaseProps {
  venue: Venue;
  index: number;
  reduceMotion: boolean;
}

function VenueCard({
  venue,
  index,
  reduceMotion,
  onSelectVenue,
}: VenueCardProps) {
  const imageOnRight = index % 2 === 1;
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photos = venue.photos ?? [{ src: venue.image, alt: venue.imageAlt }];
  const activePhoto = photos[activePhotoIndex];

  const showPhoto = (step: -1 | 1) => {
    setActivePhotoIndex((currentIndex) =>
      (currentIndex + step + photos.length) % photos.length
    );
  };

  const handleEnquire = () => {
    onSelectVenue?.(venue.enquiryName);
    document.getElementById("enquiry-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.article
      id={venue.id}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : (index % 2) * 0.08 }}
      className="scroll-mt-32 grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-surface-container-highest/60 bg-surface-container-lowest shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-12"
    >
      <div
        className={`group relative order-1 aspect-[4/3] overflow-hidden bg-surface-container-low lg:col-span-6 lg:aspect-auto lg:min-h-[440px] ${imageOnRight ? "lg:order-2" : "lg:order-1"
          }`}
      >
        <Image
          key={activePhoto.src}
          src={activePhoto.src}
          alt={activePhoto.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-charcoal/55 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-lg border border-white/15 bg-noir-charcoal/90 px-3.5 py-1.5 text-primary-fixed-dim shadow-sm backdrop-blur-sm sm:left-5 sm:top-5">
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest">
            {venue.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white sm:bottom-5 sm:left-5">
          <MapPin className="h-4 w-4 text-primary-fixed-dim" aria-hidden="true" />
          <span>{venue.name}</span>
        </div>
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => showPhoto(-1)}
              aria-label={`Show previous ${venue.name} photo`}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-noir-charcoal/70 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-noir-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed-dim sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => showPhoto(1)}
              aria-label={`Show next ${venue.name} photo`}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-noir-charcoal/70 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-noir-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed-dim sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </button>
            <span
              aria-live="polite"
              className="absolute bottom-4 right-4 rounded-full bg-noir-charcoal/75 px-3 py-1 font-label-compact text-label-compact text-white backdrop-blur-sm sm:bottom-5 sm:right-5"
            >
              {activePhotoIndex + 1} / {photos.length}
            </span>
          </>
        )}
      </div>

      <div
        className={`order-2 flex flex-col justify-between gap-6 p-6 sm:gap-7 sm:p-8 lg:col-span-6 lg:p-10 xl:p-12 ${imageOnRight ? "lg:order-1" : "lg:order-2"
          }`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.2em] text-primary">
              {venue.eyebrow}
            </span>
            <h3 className="font-headline-md text-2xl leading-tight text-on-surface sm:text-3xl">
              {venue.name}
            </h3>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              {venue.description}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {venue.specifications.map(({ label, value, Icon }) => (
              <div
                key={label}
                className="flex min-h-[88px] items-start gap-3 rounded-xl border border-[#DEC384]/40 bg-surface-champagne/60 p-4"
              >
                <Icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <dt className="font-eyebrow-luxury text-[10px] font-bold uppercase tracking-wider text-secondary">
                    {label}
                  </dt>
                  <dd className="mt-1 font-headline-sm text-base font-medium leading-snug text-primary sm:text-lg">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3">
            <h4 className="font-eyebrow-luxury text-eyebrow-luxury font-bold uppercase tracking-wider text-on-surface">
              Suitable For
            </h4>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              {venue.highlights.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-stone-200 pt-5 sm:flex-row">
          <button
            type="button"
            onClick={handleEnquire}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-label-button text-label-button uppercase tracking-widest text-on-primary shadow-sm transition-all hover:scale-[1.02] hover:bg-gold-deep active:scale-[0.98]"
          >
            <span>Enquire Now</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <Link
            href="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#DEC384]/60 bg-surface-champagne px-5 py-3.5 font-label-button text-label-button uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-container-high"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function BanquetVenueShowcase({
  onSelectVenue,
}: BanquetVenueShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="w-full bg-background py-16 sm:py-20 lg:py-24"
      id="banquet-venues"
    >
      <div className="site-container flex flex-col gap-10 sm:gap-12 lg:gap-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-[0.24em] text-primary">
            Spaces for Every Celebration
          </span>
          <h2 className="font-headline-lg text-3xl text-on-surface sm:text-4xl lg:text-headline-lg">
            Explore Our Venues
          </h2>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Discover halls, restaurants and outdoor settings, each with a
            capacity and character to suit your gathering.
          </p>
          <div className="mt-1 h-[2px] w-12 bg-primary-fixed-dim" />
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {VENUES.map((venue, index) => (
            <VenueCard
              key={venue.id}
              venue={venue}
              index={index}
              reduceMotion={shouldReduceMotion ?? false}
              onSelectVenue={onSelectVenue}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
