import { z } from "zod";

const baseSchema = z.object({
  imageUrl: z.string().url().optional(),
});

export const ProjectSchema = baseSchema.extend({
  name: z.string().min(1, "Project name is required"),
  projectUrl: z.string().url().optional(),
});

export const TestimonialSchema = baseSchema.extend({
  name: z.string().min(1, "Client name is required"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().optional(),
  quote: z.string().min(10, "Testimonial must be at least 10 characters"),
  positionY: z.number().min(0).max(1).optional(),
});

export const FAQSchema = z.object({
  question: z.string().min(5, "Question must be at least 5 characters"),
  answer: z.string().min(10, "Answer must be at least 10 characters"),
});

export const ClientSchema = baseSchema.extend({
  name: z.string().min(1, "Client/Company name is required"),
  contactEmail: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[0-9\s-]+$/, "Invalid phone number")
    .optional(),
  website: z.string().url().optional(),
  clientSince: z.coerce.date().optional(), 
});
