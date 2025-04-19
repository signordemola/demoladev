"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ProjectDetails } from "@/types";

const AllProjectsPage = ({
  allProjects,
}: {
  allProjects: ProjectDetails[];
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Page Header with Gradient Text */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Built Projects
        </h1>
        <p className="text-purple-700/90 text-lg font-medium">
          🎨 {`A gallery of digital masterpieces I've created`}
        </p>
      </motion.header>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {allProjects.map((project, index) => (
          <motion.article
            key={project.id}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-100/50"
          >
            <Link href={project.projectUrl} className="block h-full p-6">
              {/* Featured Badge with Gradient */}
              {project.featured && (
                <div className="absolute mt-0.5 top-0 right-7 bg-gradient-to-r from-pink-500 to-orange-500 text-white pl-2 pr-4 py-0.5 rounded-md text-xs font-medium shadow-sm">
                  ⭐ Featured
                </div>
              )}

              {/* Project Image Container */}
              <div className="aspect-video relative rounded-xl overflow-hidden mb-6 border-2 border-slate-100 group-hover:border-blue-100 transition-colors duration-300">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-sm bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-2 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                <p className="text-slate-600 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Stack - Colorful Badges */}
                <ul className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-br from-blue-50 to-purple-50 text-blue-800 rounded-md text-sm border border-blue-100 hover:border-blue-200 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Overlay with Gradient */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/90 to-purple-600/90 transition-opacity duration-300 backdrop-blur-sm">
                <span className="text-white font-medium flex items-center space-x-2 transform group-hover:scale-110 transition-transform">
                  <span>Explore Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-pink-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Animated Background Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default AllProjectsPage;
