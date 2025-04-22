import About from "@/components/about";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="pt-22 px-3 max-w-[1440px] border-l border-r border-neutral-dark/10">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Faqs />
    </main>
  );
}
