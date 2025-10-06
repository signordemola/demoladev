"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  i: number;
  title: string;
  type: string;
  description: string;
  imageSrc: string;
  projectLink: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const ProjectCard = ({
  i,
  title,
  type,
  description,
  imageSrc,
  projectLink,
  color,
  progress,
  range,
  targetScale,
}: ProjectCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  let textColor = "#000000";
  try {
    if (typeof color === "string" && color.startsWith("#")) {
      let r = 0;
      let g = 0;
      let b = 0;
      const hex = color.slice(1);
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      } else {
        throw new Error("Invalid hex color length");
      }

      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      textColor = brightness > 128 ? "#000000" : "#ffffff";
    }
  } catch (err) {
    console.warn("Invalid color for project card:", color, err);
  }

  return (
    <div
      ref={container}
      className="h-[100vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-0.5vh + ${i * 25}px)`,
          color: textColor,
        }}
        className="w-[95%] md:w-[90%] lg:w-[1000px] h-[500px] relative rounded-xl shadow-2xl origin-top overflow-hidden border border-white/10"
      >
        <div className="h-full flex flex-col p-6 md:p-8">
          {/* Header Section */}
          <div className="mb-4 md:mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 tracking-wider">
              {title}
            </h3>
            <span className="text-sm font-medium opacity-80">{type}</span>
          </div>

          <Link
            href={projectLink}
            target="_blank"
            className="group flex-1 flex flex-col md:flex-row gap-6"
          >
            {/* Image Container */}
            <motion.div
              className="relative w-full md:w-[55%] h-[240px] md:h-full rounded-lg overflow-hidden"
              style={{ scale: imageScale }}
            >
              <Image
                src={imageSrc}
                alt={`${title} project showcase`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                priority={i < 4}
              />
            </motion.div>

            {/* Content Section */}
            <div className="w-full md:w-[45%] flex flex-col justify-between md:py-4">
              <p className="text-sm md:text-lg lg:text-xl leading-relaxed mb-4">
                {description}
              </p>

              <Button
                variant="ghost"
                className="w-full md:w-fit backdrop-blur-sm border border-white/50 hover:border-white/30"
                style={{ color: textColor }}
              >
                View Project
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
