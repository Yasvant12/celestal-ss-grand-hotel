/** Homepage hero image. Other routes use their own image from the page map. */
export const HERO_BACKGROUND_IMAGE = "/images/celestal-ss-grand-hero.webp";

const PAGE_HERO_BACKGROUND_IMAGES = {
  home: HERO_BACKGROUND_IMAGE,
  about: "/images/hotel-reception-lobby-01.jpeg",
  rooms: "/images/hotel-room-bedroom-03.jpeg",
  banquet: "/images/hotel-banquet-ballroom-04.jpg",
  gallery: "/images/hotel-exterior-evening-hero.jpeg",
  contact: "/images/hotel-front-entrance-foyer.jpg",
  services: "/images/hotel-corridor-01.jpeg",
} as const;

export type HeroPageKey = keyof typeof PAGE_HERO_BACKGROUND_IMAGES;

export function getHeroBackgroundImageForPage(pageKey: HeroPageKey = "home") {
  return PAGE_HERO_BACKGROUND_IMAGES[pageKey];
}

export const HOTEL_INFO = {
  name: "Celestial SS Grand Hotel",
  tagline: "Contemporary Comfort • Thoughtful Hospitality • Grand Celebrations",
  subheading: "Hotel, banquet hall & celebration destination on Kursi Road, Lucknow.",
  address: "Plot 5, Misripur Guramba, Kursi Road, Lucknow, Uttar Pradesh 226026, India",
  shortAddress: "Plot 5, Misripur Guramba, Kursi Road, Lucknow",
  landmark: "Misripur Guramba, Kursi Road, Lucknow",
  mapsQuery: "Celestial SS Grand Hotel, Plot 5, Misripur Guramba, Kursi Road, Lucknow, Uttar Pradesh 226026, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Celestial+SS+Grand+Hotel%2C+Plot+5%2C+Misripur+Guramba%2C+Kursi+Road%2C+Lucknow+226026",
  coordinates: {
    lat: 26.7925,
    lng: 80.9028,
  },
  phones: {
    primary: "+91 9151888637", // Front desk and rooms
    primaryRaw: "91  7054447423",
    weddingDesk: "+91 9151888636",
    lawnsCatering: "+91 9151888638",
  },
  whatsapp: "+91 9151888637",
  whatsappUrl: "https://wa.me/919151888637",
  email: "celestialssgrand@gmail.com",
  reservationsEmail: "celestialssgrand@gmail.com",
  eventsEmail: "celestialssgrand@gmail.com",
  stats: {
    celebrationLawns: "2",
    banquetSpaces: "5",
    luxuryRooms: "60",
    serviceAvailability: "24 / 7",
    celebrationsHosted: "1,200+",
    rating: "4.2★",
    reviewsCount: "1,240+",
  },
  proximities: [
    {
      destination: "Major Dhyan Chand Astroturf Stadium",
      time: "02–05 Mins",
      icon: "emoji_events"
    },
    {
      destination: "Kukrail Gharial Park",
      time: "18–25 Mins",
      icon: "park"
    },
    {
      destination: "Regional Science City",
      time: "20–25 Mins",
      icon: "science"
    }
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/", slug: "home" },
  { label: "About Us", href: "/about", slug: "about" },
  { label: "Rooms & Accommodation", href: "/rooms", slug: "rooms" },
  { label: "Grand Banquet", href: "/banquet", slug: "banquet" },
  { label: "Celebration Lawns", href: "/banquet#venue-connected-lawn", slug: "celebration-lawns" },
  { label: "Dining & Catering", href: "/#venues-section", slug: "restaurant" },
  { label: "Facilities", href: "/#facilities-section", slug: "facilities" },
  { label: "Gallery", href: "/gallery", slug: "gallery" },
  { label: "Contact", href: "/contact", slug: "contact" },
];