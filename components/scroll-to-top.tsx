import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  return (
    <a
      href={`#home`}
      aria-label="Scroll to next section"
      className="absolute bottom-[3.2rem] right-0 bg-neutral-light text-neutral-dark shadow-md rounded-sm px-1.5 py-3"
    >
      <ArrowUp size={25} />
    </a>
  );
};

export default ScrollToTop;
