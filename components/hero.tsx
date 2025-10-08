"use client";

import React from "react";
import CustomButton from "./custom-button";
import Headline from "./headline";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="mx-4 lg:mx-2" aria-labelledby="hero-heading">
      <div className="mx-auto relative px-2 max-w-[1200px] gap-8 shadow-sm mb-1 overflow-hidden lg:px-8 py-4 md:py-8 border border-neutral-darker/60 dark:border-neutral-lighter/60 rounded-md">
        <div className="flex flex-col pb-4 items-center text-center mb-4">
          <Headline emoji="✌🏻" text="Welcome to Demoladev Web Solutions!" />
          <h1 className="font-satoshi font-bold tracking-wide text-[40px] leading-none md:text-[65px] lg:text-[60px] xl:text-[69px] pb-4 pt-10 sm:pt-12 md:pt-14 lg:pt-16">
            <span
              data-br=":r7:"
              data-brr="1"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
            >
              Launch or Transform your{" "}
              <span className="text-primary">{`brand's website`}</span>
            </span>
          </h1>
          <p className="max-w-md text-base text-neutral-darker/85 dark:text-neutral-lighter/85 font-light lg:max-w-2xl lg:text-lg p-2 md:p-0">
            A fully customizable & standout website that captivate audiences and
            elevate your vision
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-8">
          <a href="#projects">
            <CustomButton
              variant="projects"
              icon={
                <div className="overflow-hidden size-5">
                  <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              }
            >
              <span className="tracking-wider">View My Work</span>
            </CustomButton>
          </a>

          <a href="#contact" className="flex justify-center">
            <CustomButton variant="primary">
              Let&apos;s Make It Happen
            </CustomButton>
          </a>
        </div>

        <div className="relative z-[2] mx-auto translate-y-[10%]">
          <div className="animate-slide-down origin-center transform rounded-xl bg-neutral-light p-1.5 transition-all duration-1000 ease-out border border-neutral-dark/20">
            <Image
              src="/infography-hero.webp"
              alt="Animated website preview"
              width={1200}
              height={600}
              className="rounded-md object-cover w-full h-auto"
              priority
              sizes="(max-width: 768px) 600px, 1200px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
