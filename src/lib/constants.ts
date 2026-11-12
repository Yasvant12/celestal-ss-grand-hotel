/** Official Celestal SS Grand Hotel hero image shared by every page. */
export const HERO_BACKGROUND_IMAGE = "/images/celestal-ss-grand-hero.webp";

export function getHeroBackgroundImageForPage(_pageKey: string = "home") {
  return HERO_BACKGROUND_IMAGE;
}

export const HOTEL_INFO = {
  name: "Celestial SS Grand Hotel",
  tagline: "Contemporary Comfort • Thoughtful Hospitality • Grand Celebrations",
  subheading: "Hotel, banquet hall & celebration destination on Kursi Road, Lucknow.",
  address: "Plot 5, Misripur Guramba, Kursi Road, Lucknow, Uttar Pradesh 226026, India",
  shortAddress: "Plot 5, Misripur Guramba, Kursi Road, Lucknow",
  landmark: "Misripur Guramba, Kursi Road, Lucknow",
  mapsQuery: "Hotel SS Grand, Plot 5, Misripur Guramba, Kursi Road, Lucknow, Uttar Pradesh 226026, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+SS+Grand%2C+Plot+5%2C+Misripur+Guramba%2C+Kursi+Road%2C+Lucknow+226026",
  coordinates: {
    lat: 26.7925,
    lng: 80.9028,
  },
  phones: {
    primary: "+91 9151888637", //banquet booking
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
    lawnCapacity: "1,000+",
    acBanquetCapacity: "400+",
    luxuryRooms: "60",
    serviceAvailability: "24 / 7",
    celebrationsHosted: "1,200+",
    rating: "4.2★",
    reviewsCount: "1,240+",
    parkingCapacity: "50+ Vehicles",
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
  { label: "Celebration Lawn", href: "/banquet/celebration-lawn", slug: "celebration-lawn" },
  { label: "Dining & Catering", href: "/restaurant", slug: "restaurant" },
  { label: "Facilities", href: "/about#facilities", slug: "facilities" },
  { label: "Gallery", href: "/gallery", slug: "gallery" },
  { label: "Contact", href: "/contact", slug: "contact" },
];