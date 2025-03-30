// projects image
import image1 from "../public/assets/images/project-1.jpg";
import image2 from "../public/assets/images/project-2.jpg";
import image3 from "../public/assets/images/project-3.jpg";
import image4 from "../public/assets/images/project-4.jpg";
import image5 from "../public/assets/images/project-5.jpg";

// testimonials image
import testimonialImage1 from "../public/assets/images/testimonial-1.jpg";
import testimonialImage2 from "../public/assets/images/testimonial-2.jpg";
import testimonialImage3 from "../public/assets/images/testimonial-3.jpg";

export const projects = [
  {
    name: "Artisan Brew Co",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website",

    image: testimonialImage1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffe Co",
    role: "Founder",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website",

    image: testimonialImage2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website",

    image: testimonialImage3,
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
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "FAQs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];
