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

export const GALLERY_PLATES: GalleryPlate[] = [
  {
    id: 1,
    plateNumber: "Photo 01",
    badge: "Banquet",
    title: "Grand Ballroom",
    category: "Banquet & Lawn",
    categories: ["banquet-lawn"],
    description: "A spacious ballroom arranged for elegant celebrations.",
    alt: "Grand ballroom at Celestal SS Grand Hotel.",
    src: "/images/hotel-banquet-ballroom-01.jpg",
    colSpan: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    id: 2,
    plateNumber: "Photo 02",
    badge: "Celebrations",
    title: "Wedding Seating",
    category: "Banquet & Lawn",
    categories: ["banquet-lawn"],
    description: "A banquet hall arranged with gold and burgundy seating.",
    alt: "Banquet hall with gold chairs and burgundy accents.",
    src: "/images/hotel-banquet-wedding-seating.webp",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    id: 3,
    plateNumber: "Photo 03",
    badge: "Lawn",
    title: "Illuminated Celebration Lawn",
    category: "Banquet & Lawn",
    categories: ["banquet-lawn"],
    description: "The hotel lawn and exterior illuminated at night.",
    alt: "Celestal SS Grand Hotel lawn illuminated at night.",
    src: "/images/hotel-open-lawn-night-01.jpeg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 4,
    plateNumber: "Photo 04",
    badge: "Hotel Exterior",
    title: "Hotel and Lawn in Daylight",
    category: "Exterior",
    categories: ["exterior"],
    description: "A daytime view of the hotel exterior and lawn courtyard.",
    alt: "Celestal SS Grand Hotel exterior and lawn courtyard in daylight.",
    src: "/images/hotel-exterior-day-01.jpeg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 5,
    plateNumber: "Photo 05",
    badge: "Guest Room",
    title: "Guest Bedroom",
    category: "Rooms",
    categories: ["rooms"],
    description: "A guest bedroom with warm wood furnishings and a comfortable bed.",
    alt: "Guest bedroom with a bed, wood furnishings, and bedside lighting.",
    src: "/images/hotel-room-bedroom-02.jpeg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 6,
    plateNumber: "Photo 06",
    badge: "Guest Room",
    title: "Twin-Bed Guest Room",
    category: "Rooms",
    categories: ["rooms"],
    description: "A bright guest room furnished with two beds.",
    alt: "Twin-bed guest room at Celestal SS Grand Hotel.",
    src: "/images/hotel-room-twin-01.jpeg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 7,
    plateNumber: "Photo 07",
    badge: "Reception",
    title: "Reception and Lobby",
    category: "Reception & Interiors",
    categories: ["reception-interiors"],
    description: "The hotel's reception desk and welcoming lobby.",
    alt: "Reception desk and lobby at Celestal SS Grand Hotel.",
    src: "/images/hotel-reception-lobby-01.jpeg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 8,
    plateNumber: "Photo 08",
    badge: "Restaurant",
    title: "Restaurant Dining Room",
    category: "Restaurant",
    categories: ["restaurant"],
    description: "The hotel dining room arranged for guests.",
    alt: "Restaurant dining room with tables at Celestal SS Grand Hotel.",
    src: "/images/hotel-restaurant-interior-01.jpeg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 9,
    plateNumber: "Photo 09",
    badge: "Hotel Interior",
    title: "Guest Room Corridor",
    category: "Reception & Interiors",
    categories: ["reception-interiors"],
    description: "A bright corridor leading to the hotel's guest rooms.",
    alt: "Hotel corridor outside the guest rooms at Celestal SS Grand Hotel.",
    src: "/images/hotel-corridor-01.jpeg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    id: 10,
    plateNumber: "Photo 10",
    badge: "Hotel Entrance",
    title: "Entrance Foyer",
    category: "Other Facilities",
    categories: ["other-facilities"],
    description: "The hotel's entrance foyer and staircase.",
    alt: "Hotel entrance foyer with a staircase and floral decorations.",
    src: "/images/hotel-front-entrance-foyer.jpg",
    colSpan: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All", count: GALLERY_PLATES.length },
  {
    id: "rooms",
    label: "Rooms",
    count: GALLERY_PLATES.filter((plate) => plate.categories.includes("rooms")).length,
  },
  {
    id: "banquet-lawn",
    label: "Banquet & Lawn",
    count: GALLERY_PLATES.filter((plate) => plate.categories.includes("banquet-lawn")).length,
  },
  {
    id: "restaurant",
    label: "Restaurant",
    count: GALLERY_PLATES.filter((plate) => plate.categories.includes("restaurant")).length,
  },
  {
    id: "reception-interiors",
    label: "Reception & Interiors",
    count: GALLERY_PLATES.filter((plate) => plate.categories.includes("reception-interiors")).length,
  },
  {
    id: "exterior",
    label: "Exterior",
    count: GALLERY_PLATES.filter((plate) => plate.categories.includes("exterior")).length,
  },
  {
    id: "other-facilities",
    label: "Other Facilities",
    count: GALLERY_PLATES.filter((plate) => plate.categories.includes("other-facilities")).length,
  },
];
