export type PortfolioProject = {
  id: string;
  name: string;
  imageUrl: string;
  projectUrl: string;
  category?: string | null;
  techStack: string[];
  featured: boolean;
  shortDescription?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type FeaturedProject = {
  id: string;
  name: string;
  category: string | null;
  imageUrl: string;
  projectUrl: string;
  featured: boolean;
};

export type ProjectDetails = {
  id: string;
  name: string;
  imageUrl: string;
  projectUrl: string;
  shortDescription?: string | null;
  techStack: string[];
  category?: string | null;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PortfolioTestimonial = {
  id: string;
  name: string | null;
  company: string | null;
  role: string | null;
  quote: string | null;
  imageUrl: string | null;
  createdAt: Date;
};

export type PortfolioCounts = {
  projects: number;
  testimonials: number;
  faqs: number;
  clients: number;
} | null;
