"use client";

import About from "@/components/about";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      console.log(locomotiveScroll);
    })();
  }, []);
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px]">
        <div className="pt-22 px-3 border-l border-r border-neutral-dark/10">
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Faqs />
        </div>
      </main>
      <Footer />
    </>
  );
}
