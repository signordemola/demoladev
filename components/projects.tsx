import Image from "next/image";
import Link from "next/link";
import React from "react";

import defaulImageUrl from "../public/assets/images/project-1.jpg";
import CustomButton from "./custom-button";
import { FeaturedProject } from "@/types";

interface ProjectsProps {
  projects: FeaturedProject[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="text-3xl md:text-6xl lg:text-7xl capitalize text-red-orange-500">
          See what i can do for your brand
        </h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects?.map(({ id, name, imageUrl, projectUrl }) => {
            return (
              <Link
                key={id}
                href={projectUrl || "#"}
                className="border-t last:border-b border-stone-600 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project"
              >
                {/* Animated background fill - works on both mobile and desktop */}
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full md:group-hover/project:h-full active:h-full transition-all duration-700 bg-stone-300"></div>
                <div className="relative">
                  {/* Mobile image */}
                  <div className="aspect-video md:hidden">
                    <Image
                      src={imageUrl || defaulImageUrl}
                      alt={name}
                      height={1000}
                      width={1000}
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Desktop content */}
                  <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                    <div className="lg:group-hover/project:pl-4 transition-all duration-700">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl flex gap-2">
                        <span>{name}</span>
                      </h3>
                    </div>

                    <div className="relative">
                      <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10">
                        <Image
                          src={imageUrl || defaulImageUrl}
                          alt={name}
                          height={1000}
                          width={1000}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="lg:group-hover/project:pr-4 transition-all duration-700">
                      <div className="size-6 overflow-hidden">
                        <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 shrink-0 text-purple-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 shrink-0 text-purple-500 -ml-[1px]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="w-full flex justify-end mt-12">
          {" "}
          <Link href={`/all-projects`}>
            <CustomButton variant="text" className="font-bold">
              <span>View All Projects</span>
            </CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
