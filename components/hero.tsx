"use client";

import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { stagger } from "framer-motion";
import CustomButton from "./custom-button";

const Hero = () => {
  const [hasPreloaded, setHasPreloaded] = useState(false);
  const [titleScope, titleAnimate] = useAnimate<HTMLHeadingElement>();
  const [subTitleScope, subTitleAnimate] = useAnimate<HTMLHeadingElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const handlePreloadComplete = () => setHasPreloaded(true);
    window.addEventListener("preloadComplete", handlePreloadComplete);
    return () =>
      window.removeEventListener("preloadComplete", handlePreloadComplete);
  }, []);

  useEffect(() => {
    if (!hasPreloaded || !titleScope.current || !subTitleScope.current) return;

    const animateText = async () => {
      const titleSplit = new SplitType(titleScope.current, {
        types: "lines,words",
        tagName: "span",
      });

      const subTitleSplit = new SplitType(subTitleScope.current, {
        types: "lines,words",
        tagName: "span",
      });

      // Correct animation properties
      await titleAnimate(
        titleSplit.words as HTMLElement[],
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          duration: 0.8,
          delay: stagger(0.08),
          ease: "circOut",
        }
      );

      await subTitleAnimate(
        subTitleSplit.words as HTMLElement[],
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          duration: 0.6,
          delay: stagger(0.04),
          ease: "backOut",
        }
      );

      videoRef.current?.play();
    };

    animateText();
  }, [hasPreloaded, titleScope, subTitleScope, titleAnimate, subTitleAnimate]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: scaleProgress }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover backdrop-blur-md"
          poster="/assets/hero-poster.jpg"
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/djfhuinba/video/upload/v1745017795/stock-market_ojdmzs.mp4"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      </motion.div>

      <div className="relative z-10 max-w-4xl p-4 text-center">
        <motion.h1
          ref={titleScope}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide lg:tracking-wider mb-6 text-white"
        >
          <span className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ transform: "translateY(100px)", opacity: 0 }}
              animate={
                hasPreloaded ? { transform: "translateY(0)", opacity: 1 } : {}
              }
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              Launch or Transform Your{" "}
              <span className="text-red-orange-500">{`Brand's Website`}</span>
            </motion.span>
          </span>
        </motion.h1>

        <motion.h6
          ref={subTitleScope}
          className="text-lg md:text-xl lg:text-2xl mb-12 mx-auto text-gray-300"
        >
          <span className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ transform: "translateY(50px)", opacity: 0 }}
              animate={
                hasPreloaded ? { transform: "translateY(0)", opacity: 1 } : {}
              }
              transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
            >
              Standout website that captivate audiences and elevate your vision
            </motion.span>
          </span>
        </motion.h6>

        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={hasPreloaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
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
              <span>View My Work</span>
            </CustomButton>
          </motion.a>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={hasPreloaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
            className="flex justify-center"
          >
            <CustomButton variant="text">
              Let&apos;s Make It Happen
            </CustomButton>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
