// app/actions/create-business.ts
"use server";

import { prisma } from "@/lib/prisma";
import { ClientSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createClient = async (
  values: z.infer<typeof ClientSchema>,
  userId: string
) => {
  const { success, error, data } = ClientSchema.safeParse(values);

  if (!success) {
    return {
      error: "Missing credentials!",
      issues: error.issues,
    };
  }

  const { name, contactEmail, phone, website, clientSince } = data;

  try {
    await prisma.client.create({
      data: {
        name,
        contactEmail,
        phone,
        website,
        clientSince,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    revalidatePath("/dashboard");
    return {
      success: "Client created successfully!",
    };
  } catch (error) {
    console.error("Client creation error:", error);
    return { error: "Failed to create Client, Please try again" };
  }
};
