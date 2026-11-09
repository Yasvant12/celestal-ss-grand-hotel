/** Official Celestal SS Grand Hotel hero image shared by every page. */
export const HERO_BACKGROUND_IMAGE = "/images/celestal-ss-grand-hero.webp";

export function getHeroBackgroundImageForPage(_pageKey: string = "home") {
  return HERO_BACKGROUND_IMAGE;
}

export const HOTEL_INFO = {
  name: "Celestal SS Grand Hotel",
  tagline: "Contemporary Comfort • Thoughtful Hospitality • Grand Celebrations",
  subheading: "Premier luxury hotel, executive banquet hall & celebratory destination in LDA Colony, Ashiyana, Lucknow.",
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
    primary: "+91 7054447423", //banquet booking
    primaryRaw: "91 9151888637",
    weddingDesk: "+91 9151888637",
    lawnsCatering: "+91 9151888637",
  },
  whatsapp: "+91 7054250911",
  whatsappUrl: "https://wa.me/917054250911",
  email: "info@celestalssgrand.com",
  reservationsEmail: "reservations@celestalssgrand.com",
  eventsEmail: "events@celestalssgrand.com",
  stats: {
    lawnCapacity: "1,200+",
    acBanquetCapacity: "400+",
    luxuryRooms: "50+",
    serviceAvailability: "24 / 7",
    celebrationsHosted: "1,200+",
    rating: "4.9★",
    reviewsCount: "1,240+",
    parkingCapacity: "150+ Vehicles",
  },
  proximities: [
    { destination: "Chaudhary Charan Singh Airport (LKO)", time: "15 Mins", icon: "flight" },
    { destination: "Charbagh Railway Station", time: "20 Mins", icon: "train" },
    { destination: "Kanpur Road / Shaheed Path Crossing", time: "08 Mins", icon: "signpost" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/", slug: "home" },
  { label: "About Us", href: "/about", slug: "about" },
  { label: "Rooms & Suites", href: "/rooms", slug: "rooms" },
  { label: "Grand Banquet", href: "/banquet", slug: "banquet" },
  { label: "Celebration Lawn", href: "/banquet/celebration-lawn", slug: "celebration-lawn" },
  { label: "Dining & Catering", href: "/restaurant", slug: "restaurant" },
  { label: "Facilities", href: "/about#facilities", slug: "facilities" },
  { label: "Gallery", href: "/gallery", slug: "gallery" },
  { label: "Contact", href: "/contact", slug: "contact" },
];