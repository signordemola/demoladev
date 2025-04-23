"use client";

import { projects } from "@/constants";
import React, { useRef } from "react";
import ProjectCard from "./projecrt-card";
import { useScroll } from "framer-motion";
import Headline from "./headline";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      id="projects"
      data-scroll
      data-scroll-speed="0.3"
      className="-mt-40"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex justify-center sticky top-10 md:top-16 lg:top:20">
          <Headline emoji="💼" text="Featured Projects" />
        </div>
        {projects?.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
