import { z } from "zod";

const phoneRegex = /^[0-9]{10}$/;
const optionalEmail = z
  .string()
  .trim()
  .refine((value) => value === "" || z.string().email().safeParse(value).success, {
    message: "Please enter a valid email address",
  })
  .optional();

export const roomEnquirySchema = z.object({
  type: z.literal("room"),
  name: z.string().min(2, "Full Name must be at least 2 characters").max(100),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit mobile number"),
  email: optionalEmail,
  checkInDate: z.string().min(1, "Check-in date is required"),
  checkOutDate: z.string().min(1, "Check-out date is required"),
  guestsCount: z.string().min(1, "Please select number of guests"),
  roomsCount: z.string().min(1, "Please select number of rooms"),
  roomRequirements: z.string().optional(),
  message: z.string().max(1000).optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const banquetEnquirySchema = z.object({
  type: z.literal("banquet"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit mobile number"),
  email: optionalEmail,
  eventDate: z.string().min(1, "Event date is required"),
  eventType: z.string().min(1, "Please select an event type"),
  guestsCount: z.string().min(1, "Please select expected guests count"),
  foodRequirements: z.string().optional(),
  approximateBudget: z.string().optional(),
  message: z.string().max(1000).optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const weddingEnquirySchema = z.object({
  type: z.literal("wedding"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit mobile number"),
  email: optionalEmail,
  weddingDate: z.string().min(1, "Wedding date is required"),
  guestsCount: z.string().min(1, "Please select expected guests count"),
  roomsRequired: z.string().optional(),
  functionDetails: z.string().optional(),
  additionalRequirements: z.string().max(1000).optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const generalContactSchema = z.object({
  type: z.literal("general"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit mobile number"),
  email: optionalEmail,
  subject: z.string().min(2, "Enquiry type is required").max(150),
  message: z.string().min(1, "Message is required").max(2000),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const enquirySchema = z.discriminatedUnion("type", [
  roomEnquirySchema,
  banquetEnquirySchema,
  weddingEnquirySchema,
  generalContactSchema,
]);

