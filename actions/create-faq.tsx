// app/actions/create-business.ts
"use server";

import { prisma } from "@/lib/prisma";
import { FAQSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createFAQ = async (
  values: z.infer<typeof FAQSchema>,
  userId: string
) => {
  const { success, error, data } = FAQSchema.safeParse(values);

  if (!success) {
    return {
      error: "Missing credentials!",
      issues: error.issues,
    };
  }

  const { question, answer } = data;

  try {
    await prisma.fAQ.create({
      data: {
        question,
        answer,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    revalidatePath("/dashboard");
    return {
      success: "FAQ created!",
    };
  } catch (error) {
    console.error("FAQ creation error:", error);
    return { error: "Failed to create FAQ, Please try again" };
  }
};
