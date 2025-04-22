"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const LocomotiveScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let scroll: any;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    })();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [pathname]);
  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScroll;
