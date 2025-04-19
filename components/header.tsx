"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { navItems } from "@/constants";
import { Logo } from "./logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        { duration: 0.7 }
      );

      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [
    isOpen,
    topLineScope,
    topLineAnimate,
    bottomLineScope,
    bottomLineAnimate,
    navScope,
    navAnimate,
  ]);

  const handleMobileNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);

    const url = new URL(event.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      {/* mobile nav */}
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-20"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems?.map(({ label, href }) => (
            <div
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-600 py-8 group/nav-item relative isolate"
            >
              <Link href={href} onClick={handleMobileNavClick}>
                <div className="container !max-w-full flex items-center justify-between">
                  <span className="text-3xl group-hover/nav-item:pl-2 transition-all duration-300">
                    {label}
                  </span>
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
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>

                <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-300 bottom-0 -z-10"></div>
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20">
            <div>
              <Link href={`/`}>
                <Logo />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end items-center h-20">
            <div className="flex items-center gap-4">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer size-11 border border-stone-400 rounded-full inline-flex justify-center items-center bg-stone-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                      // transform: "translateY(4px) rotate(45deg)",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                      // transform: "translateY(-4px) rotate(-45deg)",
                    }}
                  />
                </svg>
              </div>

              <Link href={`#contact`} className="hidden md:inline-flex">
                <Button className="" variant={`contact`} size={`xl`}>
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
