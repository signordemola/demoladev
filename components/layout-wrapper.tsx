"use client";

import { useEffect, useState } from "react";
import Preloader from "./preloader";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.classList.remove("overflow-hidden");
    };

    if (document.readyState === "complete") {
      setTimeout(handleLoad, 1000);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <Preloader />
      <div
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default LayoutWrapper;
