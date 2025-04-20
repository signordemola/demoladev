import { cache } from "react";
import { prisma } from "./prisma";
import {
  FeaturedProject,
  PortfolioCounts,
  PortfolioProject,
  PortfolioTestimonial,
  ProjectDetails,
} from "@/types";

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export const getPortfolioCounts = cache(
  async (userId: string): Promise<PortfolioCounts> => {
    try {
      const [projects, testimonials, faqs, clients] = await Promise.all([
        prisma.project.count({
          where: {
            userId,
          },
        }),
        prisma.testimonial.count({
          where: {
            userId,
          },
        }),
        prisma.fAQ.count({
          where: {
            userId,
          },
        }),
        prisma.client.count({ where: { userId } }),
      ]);

      return { projects, testimonials, faqs, clients };
    } catch (error) {
      console.error("Failed to fetch portfolio counts:", error);
      return null;
    }
  }
);

export const getRecentTestimonials = cache(
  async (userId: string): Promise<PortfolioTestimonial[]> => {
    try {
      return await prisma.testimonial.findMany({
        where: {
          userId,
        },
        select: {
          id: true,
          name: true,
          company: true,
          role: true,
          quote: true,
          imageUrl: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      });
    } catch (error) {
      console.error("Failed to fetch recent testimonials:", error);
      return [];
    }
  }
);

// Get 5 most recent projects (simplified view)
export const getRecentProjects = cache(
  async (): Promise<PortfolioProject[]> => {
    try {
      return await prisma.project.findMany({
        select: {
          id: true,
          name: true,
          imageUrl: true,
          projectUrl: true,
          category: true,
          techStack: true,
          featured: true,
          shortDescription: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: "desc" },
        take: 5,
      });
    } catch (error) {
      console.error("Failed to fetch recent projects:", error);
      return [];
    }
  }
);

// Get all projects with full details
export const getAllProjects = cache(async (): Promise<ProjectDetails[]> => {
  try {
    return await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        imageUrl: true,
        projectUrl: true,
        shortDescription: true,
        techStack: true,
        category: true,
        featured: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch all projects:", error);
    return [];
  }
});

export const getFeaturedProjects = cache(
  async (): Promise<FeaturedProject[]> => {
    try {
      return await prisma.project.findMany({
        where: { featured: true },
        select: {
          id: true,
          name: true,
          category: true,
          imageUrl: true,
          projectUrl: true,
          featured: true,
        },
        orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      console.error("Failed to fetch featured projects:", error);
      return [];
    }
  }
);
