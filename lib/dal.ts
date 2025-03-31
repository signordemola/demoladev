import { cache } from "react";
import { prisma } from "./prisma";

type PortfolioProject = {
  id: string;
  name: string | null;
  imageUrl: string | null;
  projectUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type PortfolioTestimonial = {
  id: string;
  name: string | null;
  company: string | null;
  role: string | null;
  quote: string | null;
  imageUrl: string | null;
  createdAt: Date;
};

type PortfolioCounts = {
  projects: number;
  testimonials: number;
  faqs: number;
  clients: number;
} | null;

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

export const getRecentProjects = cache(
  async (userId: string): Promise<PortfolioProject[]> => {
    try {
      return await prisma.project.findMany({
        where: {
          userId,
        },
        select: {
          id: true,
          name: true,
          imageUrl: true,
          projectUrl: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      });
    } catch (error) {
      console.error("Failed to fetch recent projects:", error);
      return [];
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
