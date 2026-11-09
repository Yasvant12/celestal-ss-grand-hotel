export interface ServicePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  desc: string;
  icon: string;
  photos: ServicePhoto[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 0,
    slug: "dining-experience",
    title: "Dining Experience",
    category: "Gastronomy & Degustation",
    shortDesc:
      "Multi-course fine dining curation, live clay ovens, artisanal mocktail bars, and silver-service banqueting tailored for your event.",
    desc: "From celebratory multi-course degustation menus to live interactive kitchen stations, our executive culinary team crafts unforgettable gastronomic journeys using pure, premium ingredients.",
    icon: "restaurant",
    photos: [
      {
        src: "/images/hotel-restaurant-interior-01.jpeg",
        alt: "Restaurant dining room with tables at Celestal SS Grand Hotel.",
        caption: "The hotel's restaurant dining room.",
      },
    ],
  },
  {
    id: 1,
    slug: "jaimala-themes",
    title: "Jaimala Themes & Scenography",
    category: "Matrimonial Architecture",
    shortDesc:
      "Grand architectural stages, revolving matrimonial platforms, suspended floral chandeliers, and timed atmospheric effects.",
    desc: "Create an indelible first impression with our custom-engineered Jaimala stage productions featuring imported fresh florals, dynamic lighting sequences, and elegant couple seating.",
    icon: "celebration",
    photos: [
      {
        src: "/images/hotel-banquet-wedding-seating.webp",
        alt: "Indian wedding ceremony seating arranged in front of a floral Jaimala stage.",
        caption: "Wedding seating facing a floral stage with a circular Jaimala backdrop.",
      },
    ],
  },
  {
    id: 2,
    slug: "wedding-decoration",
    title: "Wedding Decoration & Styling",
    category: "Bespoke Event Design",
    shortDesc:
      "Contemporary thematic ballroom styling, bespoke crystal table scapes, imported floral installations, and hand-pleated ceiling drapes.",
    desc: "Transform our expansive celebration venues with coordinated themes, artisanal floral runner centerpieces, ambient pin-spot lighting, and tailored color palettes.",
    icon: "auto_awesome",
    photos: [
      {
        src: "/images/hotel-banquet-wedding-stage.jpg",
        alt: "Wedding stage with a floral backdrop and decorated couple seating.",
        caption: "A decorated wedding stage arranged for a celebration at the hotel.",
      },
    ],
  },
  {
    id: 3,
    slug: "live-band-service",
    title: "Live Band Service",
    category: "Acoustic & Musical Ensemble",
    shortDesc:
      "Classical symphony ensembles, contemporary fusion bands, acoustic stage sound checks, and tailor-made celebratory setlists.",
    desc: "Elevate your celebrations with handpicked live acoustic artists, instrumental quartets, and celebratory musical ensembles tailored to your event timeline.",
    icon: "music_note",
    photos: [],
  },
  {
    id: 4,
    slug: "dj-sound",
    title: "DJ & Sound Entertainment",
    category: "Audio-Visual Revelry",
    shortDesc:
      "Celebrity and resident DJs, concert-grade line array audio, 4K curved LED walls, and synchronized intelligent beam lighting.",
    desc: "Complete club-grade and celebratory acoustic systems with dual digital mixers, bass subwoofers, moving head lighting fixtures, and dedicated dance floor installations.",
    icon: "graphic_eq",
    photos: [],
  },
  {
    id: 5,
    slug: "valet-parking",
    title: "Valet Parking & Portico",
    category: "Arrival Hospitality",
    shortDesc:
      "Weather-protected double-height porte-cochère, 150+ vehicle capacity, computerized digital tagging, and 24/7 monitored CCTV.",
    desc: "Ensure seamless arrival for every dignitary and attendee. Our uniformed valet personnel manage guest car drop-off, retrieval, and dedicated security coordination under an architectural canopy.",
    icon: "local_parking",
    photos: [],
  },
  {
    id: 6,
    slug: "event-services",
    title: "Event & Celebration Services",
    category: "Milestone Choreography",
    shortDesc:
      "Turnkey planning for Roka, Sangeet, anniversaries, corporate summits, guest RSVP concierge, and dedicated host butler support.",
    desc: "From initial scheduling to day-of stage management, our Senior Event Directors handle all logistics, supplier coordination, and timeline enforcement for complete peace of mind.",
    icon: "manage_accounts",
    photos: [
      {
        src: "/images/hotel-open-lawn-celebration.png",
        alt: "Outdoor celebration in the hotel lawn with a lit venue and event catering setup.",
        caption: "A nighttime outdoor celebration with event seating and catering at the hotel.",
      },
    ],
  },
  {
    id: 7,
    slug: "banquet-arrangements",
    title: "Banquet & Arrangements",
    category: "Comprehensive Hospitality",
    shortDesc:
      "Pillarless Grand Astor & Crystal ballrooms across 10,500 sq. ft., dual private bridal suites, and dedicated multi-bay buffets.",
    desc: "Complete venue configuration with high acoustic ceilings, private VIP bride and groom preparation sanctuaries, seamless food stations, and round-the-clock service staff.",
    icon: "apartment",
    photos: [
      {
        src: "/images/hotel-banquet-ballroom-03.jpg",
        alt: "Pillarless banquet ballroom setup for an opulent wedding reception",
        caption: "Column-free grand ballroom layout allowing flexible seating configurations up to 400+ guests.",
      },
      {
        src: "/images/hotel-banquet-ballroom-04.jpg",
        alt: "The Crystal Hall with daylight fenestration",
        caption: "Naturally daylit Crystal Hall suited for morning matrimonial ceremonies and corporate assemblies.",
      },
      {
        src: "/images/hotel-banquet-wedding-stage.jpg",
        alt: "The Grand Astor Ballroom at Twilight with crystal chandeliers",
        caption: "Artisanal crystal chandeliers and climate-controlled ballroom space for up to 400+ banquet seating.",
      },
    ],
  },
];
