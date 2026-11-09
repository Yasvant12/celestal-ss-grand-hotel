export interface GalleryPlate {
  id: number;
  plateNumber: string;
  badge: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  alt: string;
  src: string;
  colSpan: string;
  aspect: string;
  minHeight?: string;
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos", count: 48 },
  { id: "exterior", label: "Hotel & Exterior", count: 8 },
  { id: "rooms", label: "Rooms & Suites", count: 10 },
  { id: "dining", label: "Restaurant & Dining", count: 8 },
  { id: "banquet", label: "Banquet & Celebrations", count: 12 },
  { id: "weddings", label: "Weddings & Events", count: 6 },
  { id: "facilities", label: "Hotel Facilities", count: 4 },
];

export const GALLERY_PLATES: GalleryPlate[] = [
  {
    id: 0,
    plateNumber: "Plate 01",
    badge: "Signature Venue",
    title: "The Grand Astor Ballroom at Twilight",
    category: "Banquet & Celebrations",
    categories: ["banquet", "weddings"],
    description:
      "Column-free acoustic expanse featuring artisanal crystal chandeliers, bespoke warm uplighting, and banquet hospitality designed for grand galas up to 900 attendees.",
    alt: "Expansive architectural photography of the Astor Ballroom at twilight with crystal chandeliers illuminating tiered round banquet dining tables adorned with cream linen and fragrant floral centerpieces.",
    src: "/images/hotel-banquet-ballroom-01.jpg",
    colSpan: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    id: 1,
    plateNumber: "Plate 02",
    badge: "Suite Sanctuaries",
    title: "Executive Club Master Suite",
    category: "Rooms & Suites",
    categories: ["rooms"],
    description:
      "Deep tranquil aesthetic highlighted by custom acoustic millwork, plush king bedding, and ambient layered illumination.",
    alt: "Serene luxury bedroom interior of an executive club suite featuring a king-size upholstered bed with Egyptian cotton duvets, backlit textured walnut wall panels, modern brass reading lamps, and warm champagne upholstery.",
    src: "/images/hotel-banquet-ballroom-02.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    plateNumber: "Plate 03",
    badge: "Banqueting",
    title: "The Crystal Hall with Daylight",
    category: "Banquet & Celebrations",
    categories: ["banquet"],
    description:
      "Natural luminosity and fluid proportions suited for private matrimonial banquets and high-profile corporate convenings.",
    alt: "Daylit modern banquet hall interior with floor-to-ceiling glass fenestration, impeccably aligned champagne banquet seating, ivory floral runner arrangements, and sleek modern architecture.",
    src: "/images/hotel-banquet-ballroom-03.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    plateNumber: "Plate 04",
    badge: "Mixology & Lounge",
    title: "Bistro Signature Cocktail Bar",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Artisan craft mixology and rare single malts served across a polished nero marquina counter.",
    alt: "Artisanal cocktail being garnished by a mixologist at a sleek dark obsidian marble bar counter with illuminated brass bottle shelves and glowing pendant lights in a high-end luxury hotel lounge.",
    src: "/images/hotel-banquet-ballroom-04.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    plateNumber: "Plate 05",
    badge: "Architecture",
    title: "Illuminated Porte-Cochere",
    category: "Hotel & Exterior",
    categories: ["exterior"],
    description:
      "Grand nighttime arrival with warm architectural wash lights, reflection pond, and valet pavilion.",
    alt: "Dramatic night architectural exterior of Celestal SS Grand Hotel showing the illuminated geometric glass and limestone facade, cantilevered porte-cochere canopy, luxury cars, and reflective water fountains.",
    src: "/images/hotel-banquet-ballroom-05.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    plateNumber: "Plate 06",
    badge: "Private Terraces",
    title: "Garden Courtyard Deluxe Terrace",
    category: "Rooms & Suites",
    categories: ["rooms", "exterior"],
    description:
      "Private open-air sanctuary overlooking landscaped verdant courtyards for peaceful morning teas.",
    alt: "Sun-drenched luxury private hotel suite terrace with modern woven sun loungers, low marble cocktail table, blooming potted topiaries overlooking an impeccably manicured interior courtyard garden.",
    src: "/images/hotel-banquet-ballroom-06.jpg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 6,
    plateNumber: "Plate 07",
    badge: "Culinary Artistry",
    title: "Epicurean Plating & Degustation",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Contemporary multi-course degustation created by executive chefs featuring regional seasonal ingredients.",
    alt: "Close up gourmet plating presentation of contemporary fine dining cuisine served on artisanal handcrafted earthenware with edible gold leaf, micro-greens, reduced jus, accompanied by polished gold cutlery and crystal wine glasses.",
    src: "/images/hotel-banquet-ballroom-07.jpg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 7,
    plateNumber: "Plate 08",
    badge: "Landmark Celebrations",
    title: "Lavish Grand Matrimonial Scenography",
    category: "Weddings & Events",
    categories: ["weddings", "banquet"],
    description:
      "Immersive floral artistry, custom illuminated backdrops, and majestic seating staged for world-class wedding receptions.",
    alt: "Breathtaking wide wedding stage scenography inside a high-ceiling luxury ballroom featuring cascading white and pale gold orchids, warm architectural pillar wash lights, glowing candlelit tiers, and mirror-finished aisle walk.",
    src: "/images/hotel-banquet-ballroom-08.jpg",
    colSpan: "lg:col-span-12",
    aspect: "aspect-[21/9]",
    minHeight: "min-h-[340px]",
  },
  {
    id: 8,
    plateNumber: "Plate 09",
    badge: "Architectural Foyer",
    title: "The Astor Pre-Function Foyer",
    category: "Banquet & Celebrations",
    categories: ["exterior", "banquet"],
    description:
      "Double-height ceilings and gallery artwork welcoming guests before landmark assemblies.",
    alt: "Spacious luxury pre-function foyer with high double-height ceilings, mirror-finished bottochino marble floors, custom contemporary brass sculpture installations, and recessed ambient lighting.",
    src: "/images/hotel-banquet-ballroom-09.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    plateNumber: "Plate 10",
    badge: "Hydrotherapy",
    title: "En-Suite Marble Soaking Sanctuary",
    category: "Rooms & Suites",
    categories: ["rooms", "facilities"],
    description:
      "Deep oval tub, monsoon shower systems, and signature aromatic luxury amenities.",
    alt: "Monolithic Italian white statuario marble bathroom with freestanding soaking tub, gold brushed hardware, warm under-vanity illumination, plush rolled towels, and frameless glass rain shower.",
    src: "/images/hotel-front-entrance-stairs.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 10,
    plateNumber: "Plate 11",
    badge: "Live Gastronomy",
    title: "Live Chef Theatres & Stations",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Master culinary artisans presenting handcrafted clay oven specialties with live interactive service.",
    alt: "Interactive live kitchen show station with executive chef in spotless white uniform preparing skewered artisanal kebabs over warm glowing clay tandoor ovens with clean brass copper exhaust hoods.",
    src: "/images/hotel-banquet-wedding-stage.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 11,
    plateNumber: "Plate 12",
    badge: "Executive Enclaves",
    title: "The Conclave Boardroom",
    category: "Hotel Facilities",
    categories: ["facilities"],
    description:
      "Private state-of-the-art meeting space with 4K video infrastructure and high-privacy acoustic design.",
    alt: "Executive boardroom suite with a long polished solid walnut conference table, ergonomic leather executive chairs, integrated video conferencing technology, and acoustic fluted wood wall panelling.",
    src: "/images/hotel-front-entrance-foyer.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 12,
    plateNumber: "Plate 13",
    badge: "Private Salons",
    title: "Private Candlelit Dining Salon",
    category: "Restaurant & Dining",
    categories: ["dining"],
    description:
      "Exclusive dinner engagements with dedicated butler service and customized champagne pairings.",
    alt: "Romantic private dining salon setup for an intimate party of six, with warm taper candles, fine crystal stemware, silver champagne ice bucket, velvet armchairs, and private sommelier station.",
    src: "/images/hotel-banquet-ballroom-01.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 13,
    plateNumber: "Plate 14",
    badge: "Architectural Monument",
    title: "The Bronze Grand Staircase",
    category: "Hotel & Exterior",
    categories: ["exterior"],
    description:
      "Curving bronze balustrades connecting the main lobby level to the grand ballroom mezzanine.",
    alt: "Architectural spiral grand staircase with curving hand-cast bronze balustrades and ivory marble steps illuminated from underneath by subtle linear LED light strips in a soaring atrium.",
    src: "/images/hotel-banquet-ballroom-02.jpg",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: 14,
    plateNumber: "Plate 15",
    badge: "Musical Celebrations",
    title: "Sangeet Musical Concert Arena",
    category: "Weddings & Events",
    categories: ["weddings"],
    description:
      "Synchronized kinetic lighting rigs and acoustic mastering for joyous high-energy celebratory evenings.",
    alt: "Atmospheric sangeet celebration night with dynamic gold and warm amber stage lighting, professional concert-grade acoustics, VIP lounge banquettes, and celebration dance floor in a grand ballroom.",
    src: "/images/hotel-banquet-ballroom-03.jpg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 15,
    plateNumber: "Plate 16",
    badge: "Arrival Hospitality",
    title: "Valet Portico & Concierge Arrival",
    category: "Hotel Facilities",
    categories: ["facilities", "exterior"],
    description:
      "Uninterrupted 24/7 dedicated valet and porter reception under architectural weather-protected canopies.",
    alt: "Chauffeured luxury cars arriving under an illuminated brass and glass porte-cochere canopy at dusk, with uniformed doormen welcoming arriving guests into a warm golden foyer.",
    src: "/images/hotel-banquet-ballroom-04.jpg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
];

