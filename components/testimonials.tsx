"use client";

import { testimonials } from "@/constants";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import TestimonialAnimate from "./testimonial-animate";

const Testimonials = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const handlePrev = () => {
    if (testimonialIndex === 0) return;
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (testimonialIndex === testimonials.length - 1) return;
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section" id="testimonials">
      <h2
        ref={titleRef}
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
      >
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
          Some nice words from my past clients
        </motion.span>

        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{ x: transformBottom }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>

      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {" "}
            {testimonials?.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <TestimonialAnimate
                    key={name}
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                  />
                )
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            disabled={testimonialIndex === 0}
            onClick={handlePrev}
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300 disabled:bg-gray-700 disabled:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            disabled={testimonialIndex === testimonials.length - 1}
            onClick={handleNext}
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300 disabled:bg-gray-700 disabled:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
