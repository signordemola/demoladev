import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  HelpCircle,
  GroupIcon,
} from "lucide-react";

export const testimonials = [
  {
    name: "Chinwe Okoro",
    company: "Lagos Fashion Boutique",
    role: "Owner",
    quote:
      "Adedamola’s stunning website design doubled our online sales in just months. His creativity and dedication to our brand’s growth left us truly grateful.",
    image:
      "https://res.cloudinary.com/djfhuinba/image/upload/v1722571035/samples/man-portrait.jpg",
    imagePositionY: 0.2,
  },
  {
    name: "David Thompson",
    company: "Global Fitness Co.",
    role: "Marketing Director",
    quote:
      "Adedamola’s vibrant website boosted our customer engagement by 40% and drove record-breaking revenue. His talent is unmatched, and we’re so thankful for his work.",
    image:
      "https://res.cloudinary.com/djfhuinba/image/upload/v1722571034/samples/smile.jpg",
    imagePositionY: 0.1,
  },
  {
    name: "Aisha Bello",
    company: "Nigerian EduTech",
    role: "Co-Founder",
    quote:
      "Adedamola’s exceptional design increased our user sign-ups by 50%, helping our startup thrive. We’re incredibly appreciative of his transformative impact.",
    image:
      "https://res.cloudinary.com/djfhuinba/image/upload/v1722571027/samples/people/smiling-man.jpg",
    imagePositionY: 0.4,
  },
];

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on your project’s scope, but I typically deliver simple portfolios or landing pages within a week, while complex web apps takes longer. Using Next.js and Supabase, I ensure fast, scalable results.",
  },
  {
    question: "What is your development process like?",
    answer:
      "My process starts with understanding your goals, followed by wireframing, design (using Tailwind CSS for vibrant, responsive UI), development (Next.js and Supabase for performance), and testing. I provide regular updates and use Sentry for error-free launches.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I specialize in e-commerce, portfolios, SaaS platforms, and blogs, with expertise in Next.js, Supabase, and Tailwind CSS. Whether you’re a Nigerian startup or a global brand, I craft tailored, high-converting websites. ",
  },
  {
    question: "Can you optimize my website for SEO and performance?",
    answer:
      "Yes! I use Next.js for fast load times, Supabase for efficient data handling, and SEO best practices (metadata, sitemaps) to boost rankings. My sites are mobile-friendly and monitored with Sentry for reliability.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Definitely! I provide maintenance, updates, and performance monitoring using Sentry to ensure your site stays flawless. From bug fixes to new features, I’ve got you covered.",
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
