"use client";

import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <>
      <motion.div
        key="preloader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="fixed inset-0 z-[999] overflow-hidden flex items-center justify-center"
        aria-label="Loading your portfolio"
        role="status"
      >
        {/* Neutral background layers */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="absolute inset-0 bg-neutral-medium"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="absolute inset-0 bg-neutral-dark opacity-80"
        />

        {/* Content container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
          className="relative z-20 text-center"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            className="font-display font-bold text-2xl md:text-4xl text-neutral-light mb-4"
          >
            Crafting Your Vision
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              exit={{ rotate: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: 1.2,
                ease: "easeInOut",
              }}
              className="inline-block ml-2"
            >
              ✨
            </motion.span>
          </motion.h1>

          {/* Pulsing dots loader */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                exit={{ scale: 1, opacity: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-3 h-3 bg-neutral-light rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Preloader;
