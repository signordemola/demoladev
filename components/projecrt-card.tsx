"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  i: number;
  title: string;
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

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[100vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transformOrigin: "top",
        }}
        className="w-[100%] md:w-[1000px] h-[420px] md:h-[470px] lg:h-[500px] relative rounded-md -top-1/4 origin-top"
      >
        <h3 className="text-center font-semibold text-neutral-light text-xl md:text-2xl lg:text-4xl mt-6 md:mt-8">
          {title}
        </h3>

        <Link
          href={projectLink}
          target="_blank"
          className="w-fit"
          aria-label={`View ${title} project details`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-6 mt-4 md:mt-[50px] h-[calc(100%-80px)] px-4 md:px-6">
            <div className="relative w-full md:w-[60%] h-[220px] md:h-full rounded-md overflow-hidden order-1 md:order-2">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image
                  src={imageSrc}
                  alt={`Screenshot of ${title} project`}
                  width={1000}
                  height={1000}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 
                        (max-width: 1200px) 60vw,
                        1000px"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+yHgAFWAJp08sG7wAAAABJRU5ErkJggg=="
                  priority={i < 3}
                />
              </motion.div>
            </div>

            <div className="w-full md:w-[40%] flex flex-col gap-2 md:gap-6 order-2 md:order-1">
              <p className="text-xs md:text-xl lg:text-3xl text-neutral-light">
                {description}
              </p>

              <Button
                variant="secondary"
                size="sm"
                className="w-full md:w-fit"
                role="button"
                aria-label={`Open ${title} live demo`}
              >
                Live demo
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                  aria-hidden="true"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
