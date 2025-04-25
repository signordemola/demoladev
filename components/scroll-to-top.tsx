"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    const duration = 1000; // time in ms (e.g., 1000 = 1 second)
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // clamp between 0 and 1
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to next section"
      className="cursor-pointer right-0 bg-neutral-light text-primary shadow-md rounded-sm px-2 py-3"
    >
      <ArrowUp size={25} />
    </button>
  );
};

export default ScrollToTop;
