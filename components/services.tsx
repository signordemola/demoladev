"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FiTool,
  FiCpu,
  FiCode,
  FiSettings,
  FiZap,
  FiBriefcase,
  FiEdit,
} from "react-icons/fi";
import Headline from "./headline";
import { services } from "@/constants";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  "saas-mvp": <FiCpu className="w-8 h-8 text-primary" />,
  "landing-pages": <FiZap className="w-8 h-8 text-primary" />,
  "booking-scheduling": <FiSettings className="w-8 h-8 text-primary" />,
  "ai-chatbots": <FiTool className="w-8 h-8 text-primary" />,
  "invoicing-forms": <FiCode className="w-8 h-8 text-primary" />,
  "portfolio-brand": <FiBriefcase className="w-8 h-8 text-primary" />,
  "deployment-maintenance": <FiSettings className="w-8 h-8 text-primary" />,
  "customization-cleanup": <FiEdit className="w-8 h-8 text-primary" />,
};

interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ service }: { service: Service }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <div ref={container} className="mb-8">
      <motion.div
        style={{ opacity, y }}
        className="group relative border dark:border-neutral-lighter/30 rounded-lg p-6 bg-neutral-light/5 dark:bg-neutral-dark/40 hover:border-primary/60 dark:hover:border-primary/70 transition-all duration-300 h-full flex flex-col"
      >
        <div className="flex items-center gap-3 mb-4">
          {iconMap[service.id] || <FiCode className="w-8 h-8 text-primary" />}
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>

        <p className="text-neutral-dark/80 dark:text-neutral-lighter/80 text-sm mb-3">
          {service.short}
        </p>

        <p className="text-sm font-light mb-4">{service.description}</p>

        <ul className="list-disc ml-5 text-sm space-y-2 text-neutral-dark/70 dark:text-neutral-lighter/70 mt-auto">
          {service.features.map((feature: string, i: number) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="dark:bg-neutral-darker/30 dark:text-neutral-lighter/85 rounded-md mt-20 mx-4 lg:mx-2 scroll-mt-38"
    >
      <div className="mx-auto max-w-[1200px] border border-neutral-darker/60 dark:border-neutral-lighter/60 rounded-md overflow-hidden">
        <div className="flex justify-between items-center px-6 py-6 border-b border-neutral-darker/60 dark:border-neutral-lighter/60">
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 rounded-full bg-primary"></span>
            <span className="w-4 h-4 rounded-full bg-primary"></span>
            <span className="w-4 h-4 rounded-full bg-primary"></span>
          </div>
          <Headline emoji="💼" text="What I Do!" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12 auto-rows-fr">
          {services.map((service: Service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center py-8 border-t border-neutral-darker/60 dark:border-neutral-lighter/40">
          <p className="text-neutral-dark/70 dark:text-neutral-lighter/70 text-sm">
            Deployment • Customization • Copy Cleanup • Ongoing Support — all
            included
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
