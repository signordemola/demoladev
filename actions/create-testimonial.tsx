// app/actions/create-business.ts
"use server";

import { prisma } from "@/lib/prisma";
import { TestimonialSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createTestimonial = async (
  values: z.infer<typeof TestimonialSchema>,
  userId: string
) => {
  const { success, error, data } = TestimonialSchema.safeParse(values);

  if (!success) {
    return {
      error: "Missing credentials!",
      issues: error.issues,
    };
  }

  const { name, company, role, quote, positionY } = data;

  try {
    await prisma.testimonial.create({
      data: {
        name,
        company,
        role,
        quote,
        positionY,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    revalidatePath("/dashboard");
    return {
      success: "Testimonial created successfully!",
    };
  } catch (error) {
    console.error("Testimonial creation error:", error);
    return { error: "Failed to create Testimonial, Please try again" };
  }
};
