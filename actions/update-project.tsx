"use server";

import { prisma } from "@/lib/prisma";
import { ProjectSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const updateProject = async (
  values: z.infer<typeof ProjectSchema>,
  projectId: string
) => {
  const { success, error, data } = ProjectSchema.safeParse(values);

  if (!success) {
    return {
      error: "Missing credentials!",
      issues: error.issues,
    };
  }

  const {
    name,
    projectUrl,
    imageUrl,
    category,
    featured,
    techStack,
    shortDescription,
  } = data;

  try {
    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        name,
        imageUrl,
        projectUrl,
        category,
        featured,
        techStack,
        shortDescription,
      },
    });
    revalidatePath("/dashboard");
    return {
      success: "Project updated successfully!",
    };
  } catch (error) {
    console.error("Project updating error:", error);
    return { error: "Failed to update project, Please try again" };
  }
};
