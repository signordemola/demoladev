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
    <div className="h-[100dvh] bg-neutral-dark text-neutral-light animate-pulse rounded-xl">
      Loading...
    </div>
  ),
});
const Projects = dynamic(() => import("@/components/projects"));
const Testimonials = dynamic(() => import("@/components/testimonials"));

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
