"use client";

import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second preloader

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-light z-[999]">
      <div>
        <h1 className="font-satoshi font-bold text-2xl md:text-3xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Loading Your Vision… <span className="emoji inline-block">✌🏻</span>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
