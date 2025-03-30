import About from "@/components/about";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Faqs />
      <Footer />
    </main>
  );
}
