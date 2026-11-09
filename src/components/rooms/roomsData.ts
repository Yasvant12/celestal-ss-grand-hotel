export interface RoomAmenity {
  icon: string;
  title: string;
  desc: string;
}

export interface RoomImage {
  src: string;
  label: string;
  caption: string;
}

export interface FloorplanSpace {
  name: string;
  area: string;
  x: string;
  y: string;
}

export interface RoomFloorplan {
  title: string;
  scale: string;
  dimensions: string;
  spaces: FloorplanSpace[];
}

export interface RoomData {
  id: string;
  category: "executive" | "courtyard" | "presidential";
  name: string;
  tagline: string;
  wing: string;
  sqft: string;
  sqm: string;
  occupancy: string;
  bedConfig: string;
  ceilingHeight: string;
  view: string;
  acousticRating: string;
  description: string;
  shortDesc: string;
  heroImage: string;
  quickFeatures: string[];
  amenities: RoomAmenity[];
  images: RoomImage[];
  floorplan: RoomFloorplan;
}

export const ROOMS_DATA: Record<string, RoomData> = {
  executive: {
    id: "executive",
    category: "executive",
    name: "Executive Club Suite",
    tagline: "Refined Corporate & Weekend Suite",
    wing: "Wings 04–09 • Executive Floors",
    sqft: "324 sq. ft.",
    sqm: "30 m²",
    occupancy: "Max 2 Guests",
    bedConfig: "Signature King Bed",
    ceilingHeight: "3.00 m (9.8 ft)",
    view: "Private City Gardens & Skyline",
    acousticRating: "Acoustic Sound-Dampening Glass (STC 48)",
    shortDesc:
      "Tailored for discerning business travellers and weekend getaways, offering seamless connectivity, expansive dressing wardrobe, and tailored turndown amenities.",
    description:
      "Tailored specifically for discerning corporate professionals and weekend guests seeking seamless efficiency without sacrificing residential warmth. Features an ergonomic solid-walnut work desk, high-speed fiber data ports, a 55\" Smart UHD display, and tailored evening turndown service.",
    heroImage:
      "/images/hotel-banquet-ballroom-01.jpg",
    quickFeatures: ["Fiber Wi-Fi", "55\" Smart UHD TV", "24/7 Dining", "Express Pressing"],
    amenities: [
      { icon: "desk", title: "Ergonomic Executive Desk", desc: "Crafted solid walnut with integrated USB/HDMI" },
      { icon: "wifi", title: "Dedicated Fiber Wi-Fi", desc: "Zero-latency high-speed corporate bandwidth" },
      { icon: "tv", title: "55\" Smart 4K UHD TV", desc: "Integrated wireless display casting & global channels" },
      { icon: "iron", title: "Express Pressing Service", desc: "Same-day professional laundry & steam valet" },
      { icon: "shower", title: "Rainforest Shower", desc: "Thermostatic rainfall column & stone vanity" },
      { icon: "lock", title: "Digital Laptop Safe", desc: "Interior AC power outlet for 16-inch laptops" },
    ],
    images: [
      {
        src: "/images/hotel-front-entrance-foyer.jpg",
        label: "King Bed & Executive Workspace",
        caption: "Ergonomic walnut desk, tailored upholstered headboard, and warm ambient task lighting.",
      },
      {
        src: "/images/hotel-banquet-ballroom-02.jpg",
        label: "Panoramic Window & Lounge",
        caption: "Double acoustic glazed viewing window with motorized privacy sheers and daybed seating.",
      },
      {
        src: "/images/hotel-banquet-ballroom-03.jpg",
        label: "En-Suite Stone Bathroom",
        caption: "Clean geometric lines with backlit vanity mirror and high-pressure rainfall shower.",
      },
    ],
    floorplan: {
      title: "Executive Club Suite Architectural Layout",
      scale: "Scale 1:50 Architectural Grid",
      dimensions: "6.2m × 4.8m Perimeter",
      spaces: [
        { name: "Executive King Chamber", area: "18 m² (194 sq. ft.)", x: "35%", y: "40%" },
        { name: "Ergonomic Workstation", area: "4 m² (43 sq. ft.)", x: "75%", y: "30%" },
        { name: "Rainfall En-Suite", area: "5.5 m² (59 sq. ft.)", x: "35%", y: "80%" },
        { name: "Entry & Wardrobe Foyer", area: "2.5 m² (27 sq. ft.)", x: "75%", y: "75%" },
      ],
    },
  },

  courtyard: {
    id: "courtyard",
    category: "courtyard",
    name: "Garden Courtyard Deluxe",
    tagline: "Serene Nature-Inspired Courtyard Chamber",
    wing: "Ground & Level 01 • Garden Pavilion",
    sqft: "324 sq. ft.",
    sqm: "30 m²",
    occupancy: "2–3 Guests",
    bedConfig: "Twin Beds or Signature Queen",
    ceilingHeight: "3.10 m (10.2 ft)",
    view: "Private Landscaped Garden Courtyard",
    acousticRating: "Acoustic Sound Glazing & Lush Buffer",
    shortDesc:
      "Tranquil room overlooking landscaped courtyards, flooded with natural daylight and crafted with soothing neutral tones and acoustic glazing.",
    description:
      "Overlooking manicured botanical courtyards with sunlit glass apertures, this tranquil sanctuary embraces natural daylight, warm Scandinavian-inspired neutral timbers, and soothing linen finishes. Designed for restful getaways and quiet morning contemplation.",
    heroImage:
      "/images/hotel-banquet-ballroom-04.jpg",
    quickFeatures: ["Patio Vista", "Rain Shower", "Artisanal Tea Bar", "Climate Control"],
    amenities: [
      { icon: "deck", title: "Garden Patio Aperture", desc: "Direct view to private landscaped greenery" },
      { icon: "coffee", title: "Artisanal Tea Bar", desc: "Premium botanical blends & electric kettle" },
      { icon: "shower", title: "Walk-In Rain Shower", desc: "Frameless glass with organic botanical bath products" },
      { icon: "thermostat", title: "Climate Control", desc: "Independent whisper-quiet thermal regulation" },
      { icon: "wifi", title: "High-Speed Wi-Fi", desc: "Dual-band connection throughout courtyard grounds" },
      { icon: "curtains", title: "Blackout Motorized Linen", desc: "Dual blackout & sheer natural daylight panels" },
    ],
    images: [
      {
        src: "/images/hotel-front-entrance-stairs.jpg",
        label: "Garden Courtyard Bedroom",
        caption: "Crisp linen bedding bathed in morning daylight filtering from the courtyard patio.",
      },
      {
        src: "/images/hotel-banquet-ballroom-01.jpg",
        label: "Private Greenery Outlook",
        caption: "Acoustic glass panels framing lush foliage and landscaped outdoor water feature.",
      },
      {
        src: "/images/hotel-front-entrance-foyer.jpg",
        label: "Timber Vanity & Bathroom",
        caption: "Minimalist natural timber shelving and pressurized rainforest shower column.",
      },
    ],
    floorplan: {
      title: "Garden Courtyard Deluxe Architectural Layout",
      scale: "Scale 1:50 Architectural Grid",
      dimensions: "6.0m × 5.0m Perimeter",
      spaces: [
        { name: "Courtyard Sleeping Chamber", area: "19 m² (204 sq. ft.)", x: "40%", y: "40%" },
        { name: "Private Garden Terrace", area: "5.5 m² (59 sq. ft.)", x: "82%", y: "40%" },
        { name: "Rainfall Bath", area: "5.0 m² (54 sq. ft.)", x: "35%", y: "80%" },
        { name: "Entry Vestibule", area: "2.5 m² (27 sq. ft.)", x: "75%", y: "80%" },
      ],
    },
  },
};

