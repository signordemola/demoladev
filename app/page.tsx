import About from "@/components/about";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px]">
        <div className="pt-22 px-1 border-l border-r border-neutral-dark/10">
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
