export type EnquiryType = "room" | "banquet" | "wedding" | "general";

export interface RoomEnquiryData {
  type: "room";
  name: string;
  phone: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: string;
  roomsCount: string;
  roomRequirements?: string;
  message?: string;
  honeypot?: string;
}

export interface BanquetEnquiryData {
  type: "banquet";
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  guestsCount: string;
  foodRequirements?: string;
  approximateBudget?: string;
  message?: string;
  honeypot?: string;
}

export interface WeddingEnquiryData {
  type: "wedding";
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  guestsCount: string;
  roomsRequired?: string;
  functionDetails?: string;
  additionalRequirements?: string;
  honeypot?: string;
}

export interface GeneralContactData {
  type: "general";
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export type AnyEnquiryData =
  | RoomEnquiryData
  | BanquetEnquiryData
  | WeddingEnquiryData
  | GeneralContactData;

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

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

