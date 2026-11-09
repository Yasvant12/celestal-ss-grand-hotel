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
        src: "/images/hotel-banquet-ballroom-01.jpg",
        alt: "Fine dining restaurant banquet table setting with silver cutlery and crystal glassware",
        caption: "Bespoke banquet table settings with fine bone china, silver-tier service, and ambient dinner illumination.",
      },
      {
        src: "/images/hotel-banquet-ballroom-02.jpg",
        alt: "Bistro signature cocktail bar with illuminated brass bottle shelves",
        caption: "Artisan mocktail craft counters and signature hospitality beverage stations.",
      },
      {
        src: "/images/hotel-banquet-ballroom-03.jpg",
        alt: "Live chef theatre kitchen station preparing culinary specialties",
        caption: "Interactive live cooking theatres with dedicated chef stations for customized event menus.",
      },
      {
        src: "/images/hotel-banquet-ballroom-04.jpg",
        alt: "Private candlelit dining salon for intimate gatherings",
        caption: "Exclusive private dining salons accommodating intimate celebratory banquets and family gatherings.",
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
        src: "/images/hotel-banquet-wedding-stage.jpg",
        alt: "Opulent wedding Jaimala stage setup with fresh white and blush flower arches",
        caption: "Monumental floral stage arches with layered ambient sconce lighting and grand couple banquettes.",
      },
      {
        src: "/images/hotel-banquet-ballroom-05.jpg",
        alt: "Lavish matrimonial scenography with cascading orchids and candlelit tiers",
        caption: "Cascading floral scenography with mirror-finish aisle walks and architectural pillar wash lighting.",
      },
      {
        src: "/images/hotel-banquet-ballroom-06.jpg",
        alt: "Grand matrimonial setup inside pillarless ballroom",
        caption: "Pillarless ballroom integration allowing completely unobstructed sightlines for all wedding attendees.",
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
        src: "/images/hotel-banquet-ballroom-07.jpg",
        alt: "Grand wedding ballroom decoration with crystal chandeliers and draped ceiling",
        caption: "Artistic ceiling drapery, imported crystal chandeliers, and gold Chiavari dining arrangements.",
      },
      {
        src: "/images/hotel-front-entrance-stairs.jpg",
        alt: "Astor Ballroom decorated with ambient warm uplighting and tiered dining",
        caption: "Warm architectural downlighting and custom floral table scapes for landmark wedding receptions.",
      },
      {
        src: "/images/hotel-banquet-ballroom-01.jpg",
        alt: "Pre-function foyer welcoming guests with contemporary sculptural decor",
        caption: "Double-height pre-function reception area styled for guest greeting, welcome beverages, and photography.",
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
    photos: [
      {
        src: "/images/hotel-banquet-ballroom-02.jpg",
        alt: "Live wedding musical band performing on a luxury hotel stage",
        caption: "Acoustic live music ensembles with professional stage acoustics and warm spotlighting.",
      },
      {
        src: "/images/hotel-banquet-ballroom-03.jpg",
        alt: "Musical concert arena with dynamic stage illumination",
        caption: "Full concert sound engineering and synchronized stage beam lighting for high-energy celebratory evenings.",
      },
    ],
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
    photos: [
      {
        src: "/images/hotel-banquet-ballroom-04.jpg",
        alt: "Hotel event DJ booth with professional audio mixers and architectural lighting",
        caption: "Concert line-array audio, professional DJ mixing consoles, and intelligent moving beam heads.",
      },
      {
        src: "/images/hotel-banquet-wedding-stage.jpg",
        alt: "Celebration dance floor with synchronized lighting",
        caption: "High-octane Sangeet and reception dance floor setup with soundproofed perimeter acoustics.",
      },
    ],
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
    photos: [
      {
        src: "/images/hotel-banquet-ballroom-05.jpg",
        alt: "Grand arrival portico with uniformed valet attendant opening car door",
        caption: "Uniformed valet attendants providing warm personalized arrival assistance for every guest.",
      },
      {
        src: "/images/hotel-banquet-ballroom-06.jpg",
        alt: "Illuminated porte-cochere canopy with reflections",
        caption: "Grand illuminated porte-cochère with sheltered weather-protected arrival and dedicated lanes.",
      },
      {
        src: "/images/hotel-banquet-ballroom-07.jpg",
        alt: "Portico canopy welcoming guests at dusk",
        caption: "24/7 dedicated porter desk and secure monitored parking for up to 150+ vehicles.",
      },
    ],
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
        src: "/images/hotel-front-entrance-stairs.jpg",
        alt: "Event coordinator and concierge team discussing celebration itinerary with hosts",
        caption: "Dedicated Event Directors reviewing every milestone detail with family hosts.",
      },
      {
        src: "/images/hotel-banquet-ballroom-01.jpg",
        alt: "The Conclave Boardroom for planning and coordinator meetings",
        caption: "Private planning boardrooms equipped for pre-event reviews, AV rehearsals, and vendor alignment.",
      },
      {
        src: "/images/hotel-banquet-ballroom-02.jpg",
        alt: "Grand staircase connecting lobby to ballroom mezzanine",
        caption: "Photogenic grand staircase designed for dramatic couple entrances and celebratory processions.",
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

