"use client";

import React from "react";
import CustomButton from "./custom-button";
import Link from "next/link";
import Headline from "./headline";

const Hero = () => {
  return (
    <section id="home" className="mx-4 md:mx-0" aria-labelledby="hero-heading">
      <div className="mx-auto relative px-2 max-w-[1200px] gap-8 rounded-xl shadow-sm bg-white mb-1 overflow-hidden lg:px-8 py-4 md:py-8 md:pt-12 lg:pt-20">
        <div className="flex flex-col pb-4 items-center text-center mb-2">
          <Headline emoji="✌🏻" text="Hi there! I'm Adedamola" />
          <h1 className="font-satoshi font-bold tracking-wide text-[40px] leading-none md:text-[65px] lg:text-[60px] xl:text-[69px] pb-3">
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
              Launch or Transform your {`brand's website`}
            </span>
          </h1>
          <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg p-2 md:p-0">
            A fully customizable & standout website that captivate audiences and
            elevate your vision
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-8">
          <Link href="#projects">
            <CustomButton
              variant="projects"
              aria-label="View my work portfolio"
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
          </Link>

          <Link href="#contact" className="flex justify-center">
            <CustomButton
              variant="primary"
              aria-label="Contact me to start a project"
            >
              Let&apos;s Make It Happen
            </CustomButton>
          </Link>
        </div>

        <div className="relative z-[2] mx-auto translate-y-[10%]">
          <div className="animate-slide-down origin-center transform rounded-xl bg-neutral-medium p-1 transition-all duration-1000 ease-out border border-neutral-dark/20">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Website development process demonstration"
              className="w-full h-full md:h-[580px] object-cover backdrop-blur-2xl rounded-md"
              poster="/poster.webp"
            >
              <source
                src="https://res.cloudinary.com/djfhuinba/video/upload/v1745017812/infography_wvpf2h.mp4"
                type="video/mp4"
              />
              <track kind="captions" srcLang="en" label="English captions" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
