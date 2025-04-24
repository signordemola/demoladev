"use client";

import { AnimatePresence } from "framer-motion";
import { lazy, useEffect, useState } from "react";

import Preloader from "@/components/preloader";

// Lazy loading
const About = lazy(() => import("@/components/about"));
const Faqs = lazy(() => import("@/components/faqs"));
const Features = lazy(() => import("@/components/features"));
const Footer = lazy(() => import("@/components/footer"));
const Header = lazy(() => import("@/components/header"));
const Hero = lazy(() => import("@/components/hero"));
const Projects = lazy(() => import("@/components/projects"));
const Testimonials = lazy(() => import("@/components/testimonials"));

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <main className="mx-auto max-w-[1200px]">
        <div className="pt-22 px-1 border-l border-r border-neutral-dark/10">
          <Hero />
          <About />
          <Projects />
          <Features />
          <Testimonials />
          <Faqs />
        </div>
      </main>
      <Footer />
    </>
  );
}
