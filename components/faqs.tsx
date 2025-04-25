"use client";

import { faqs } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Headline from "./headline";

const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="dark:bg-neutral-darker/30 dark:text-neutral-lighter/85 dark:shadow-sm mt-20 mx-4 lg:mx-2 scroll-mt-38"
    >
      <div className="mx-auto max-w-[1200px] overflow-hidden px-4 md:px-6 lg:px-8 rounded-md border border-neutral-darker/60 dark:border-neutral-lighter/60">
        <div className="flex flex-col justify-center items-center mt-6 mb-2">
          <Headline emoji="🙋🏻‍♂️" text="Got questions?" />
        </div>
        <h2 className="text-3xl md:text-6xl lg:text-7xl pt-2">FAQs</h2>

        <div className="mt-8 md:mt-12 lg:mt-16" role="list">
          {faqs?.map(({ question, answer }, index) => (
            <div
              className="border-t last:border-b dark:border-neutral-dark border-dotted py-6 md:py-8 lg:py-10"
              key={question}
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4"
                role="button"
                onClick={() =>
                  setSelectedIndex((prev) => (prev === index ? null : index))
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setSelectedIndex((prev) => (prev === index ? null : index))
                }
                aria-expanded={index === selectedIndex}
                aria-controls={`faq-${index}-content`}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl text-left">
                  {question}
                </p>
                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 cursor-pointer border dark:border-neutral-light rounded-full shrink-0 transition duration-500",
                    index === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </button>

              <AnimatePresence mode="wait">
                {index === selectedIndex && (
                  <motion.div
                    id={`faq-${index}-content`}
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    role="region"
                    aria-live="polite"
                  >
                    <p className="text-xl mt-4 px-4 font-satoshi">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
