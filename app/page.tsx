"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Preloader from "@/components/preloader";
import dynamic from "next/dynamic";

// dynamic loading
const About = dynamic(() => import("@/components/about"));
const Faqs = dynamic(() => import("@/components/faqs"));
const Features = dynamic(() => import("@/components/features"));
const Footer = dynamic(() => import("@/components/footer"));
const Header = dynamic(() => import("@/components/header"));
const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => (
    <div
      className="h-[100dvh] bg-neutral-dark text-neutral-light animate-pulse rounded-xl"
      role="status"
      aria-label="Loading hero section"
    >
      <span className="sr-only">Loading...</span>
    </div>
  ),
});
const Projects = dynamic(() => import("@/components/projects"));

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>


      <Header />
      <main
        id="main-content"
        className="mx-auto max-w-[1200px]"
        role="main"
        aria-label="Main content"
      >
        <div
          className="pt-22 px-1 border-l border-r border-b rounded-md dark:border-neutral-medium/40 border-neutral-dark/40 pb-16"
          role="region"
          aria-label="Page sections"
        >
          <Hero />
          <About />
          <Projects />
          <Features />
          <Faqs />
        </div>
      </main>
      <Footer />
    </>
  );
}
