import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

const TestimonialAnimate = (
  props: {
    quote: string;
    name: string;
    role: string;
    company: string;
    image: string | StaticImageData;
    imagePositionY: number;
    className?: string;
  } & React.HTMLAttributes<HTMLDivElement>
) => {
  const {
    quote,
    name,
    role,
    company,
    image,

    imagePositionY,
    className,
    ...rest
  } = props;
  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative">
        <motion.div
          className="absolute h-full bg-stone-200"
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.55 }}
        ></motion.div>
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{ objectPosition: `50% ${imagePositionY * 100}` }}
        />
      </div>

      <blockquote className="md:col-span-3">
        <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0">
          <span>&ldquo;</span>
          <span className="px-1">{quote}</span>
          <span>&rdquo;</span>
        </div>
        <br />
        <br />
        <cite className="mt-4 md:mt-8 md:text-lg lg:text-xl not-italic">
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default TestimonialAnimate;
