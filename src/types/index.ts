
export interface RoomItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  capacity: string;
  bedType: string;
  amenities: string[];
  imageUrl: string;
  galleryUrls?: string[];
  description: string;
}

export interface BanquetVenueItem {
  id: string;
  slug: string;
  title: string;
  type: "indoor" | "lawn" | "terrace";
  capacity: string;
  features: string[];
  imageUrl: string;
  description: string;
}
