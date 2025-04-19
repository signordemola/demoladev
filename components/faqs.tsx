"use client";

import { faqs } from "@/constants";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl text-red-orange-500">FAQs</h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs?.map(({ question, answer }, index) => (
            <div
              className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10"
              key={question}
              onClick={() => {
                if (index === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(index);
                }
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl md:text-3xl lg:text-4xl">{question}</p>

                <div
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-500",
                    index === selectedIndex && "rotate-45"
                  )}
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                {index === selectedIndex && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
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
