import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  HelpCircle,
  GroupIcon,
} from "lucide-react";

export const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Adedamola's expertise in both technical development and design created a beautiful, high-performing website",

    image: "testimonialImage1",
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffe Co",
    role: "Founder",
    quote:
      "Adedamola's expertise in both technical development and design created a beautiful, high-performing website",

    image: "testimonialImage2",
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "Adedamola's expertise in both technical development and design created a beautiful, high-performing website",

    image: "testimonialImage3",
    imagePositionY: 0.4,
  },
];

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project",
  },
  {
    question: "What's your development proccess like?",
    answer:
      "It depends on the complexity of the website and the scope of the project",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "It depends on the complexity of the website and the scope of the project",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "It depends on the complexity of the website and the scope of the project",
  },
];

export const navItems = [
  {
    href: "#about",
    label: "about",
  },
  {
    href: "#projects",
    label: "projects",
  },
  {
    href: "#testimonials",
    label: "testimonials",
  },
  {
    href: "#faqs",
    label: "faqs",
  },
  {
    href: "#contact",
    label: "contact",
  },
];

export const adminNavLink = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    icon: MessageSquare,
  },
  {
    label: "FAQs",
    href: "/faqs",
    icon: HelpCircle,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: GroupIcon,
  },
];
