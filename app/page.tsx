import About from "@/components/about";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import { getFeaturedProjects } from "@/lib/dal";

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Testimonials />
      <Faqs />
      <Footer />
    </main>
  );
}
