import React from "react";
import { ArrowDown } from "lucide-react";

const ScrollToNext = () => {
  return (
    <a
      href={`#about`}
      aria-label="Scroll to next section"
      className="absolute bottom-10 text-xl left-1/2 transform -translate-x-1/2 animate-bounce bg-neutral-light rounded-full p-4"
    >
      <ArrowDown size={25} />
    </a>
  );
};

export default ScrollToNext;
