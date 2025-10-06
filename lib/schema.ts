import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "First name is required." })
    .max(100, { message: "First name cannot exceed 100 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
