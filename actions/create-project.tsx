"use server";

import { prisma } from "@/lib/prisma";
import { ProjectSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createProject = async (
  values: z.infer<typeof ProjectSchema>,
  userId: string
) => {
  const { success, error, data } = ProjectSchema.safeParse(values);

  if (!success) {
    return {
      error: "Missing credentials!",
      issues: error.issues,
    };
  }

  const { name, projectUrl, imageUrl } = data;

  try {
    await prisma.project.create({
      data: {
        name,
        imageUrl,
        projectUrl,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    revalidatePath("/dashboard");
    return {
      success: "Project created successfully!",
    };
  } catch (error) {
    console.error("Project creation error:", error);
    return { error: "Failed to create Project, Please try again" };
  }
};
