import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  return (
    <a
      href={`#home`}
      aria-label="Scroll to next section"
      className="absolute bottom-[0.25rem] right-0 bg-neutral-light text-primary-foreground/80 shadow-md rounded-sm px-2 py-3"
    >
      <ArrowUp size={25} />
    </a>
  );
};

export default ScrollToTop;
