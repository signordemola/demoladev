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
        className="w-[1000px] h-[300px] md:h-[400px] lg:h-[500px] relative rounded-md -top-1/4 origin-top"
      >
        <h6 className="text-center font-semibold text-neutral-light text-xl md:text-2xl lg:text-4xl mt-8">
          {title}
        </h6>

        <div className="flex md:gap-2 lg:gap-6 mt-[50px] h-[100%] px-2 md:px-6">
          <div className="w-[40%] flex flex-col gap-6">
            <p className="text-xs md:text-xl lg:text-3xl text-neutral-medium">
              {description}
            </p>
            <Link href={projectLink} target="_blank">
              <Button variant={`secondary`} size={`sm`}>
                Live demo{" "}
                <span>
                  {" "}
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>

          <div className="relative w-[60%] h-[100%] rounded-md overflow-hidden">
            <motion.div
              className="w-[100%] h-[100%]"
              style={{ scale: imageScale }}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={1000}
                height={1000}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
