"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "./logo";
import { navItems } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import SocialIcon from "./social-icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(event.currentTarget.hash);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="border-b-0 before:hidden after:hidden">
        {/* Mobile Nav */}
        <div
          className={`fixed top-0 left-0 h-full w-full lg:hidden bg-neutral-light z-50 transition-max-height duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden`}
        >
          <nav
            className="mt-20 flex flex-col"
            aria-label="mobile navbar"
            data-orientation="vertical"
          >
            {navItems?.map(({ label, href }) => (
              <div
                key={label}
                className="text-neutral-darker border-t last:border-b border-neutral-dark py-8 group/nav-item relative isolate"
              >
                <Link
                  href={href}
                  onClick={handleMobileNavClick}
                  aria-label={`${label} section`}
                >
                  <div className="container !max-w-full flex items-center justify-between px-6">
                    <span className="text-3xl group-hover/nav-item:pl-2 transition-all duration-300">
                      {label}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 transition-transform duration-300 group-hover/nav-item:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                  <div className="absolute w-full h-0 bg-neutral-medium transition-all duration-300 group-hover/nav-item:h-full bottom-0 -z-10" />
                </Link>
              </div>
            ))}

            <div className="absolute bottom-12 w-full">
              <div className="flex items-center justify-around">
                <SocialIcon
                  type="github"
                  href="https://github.com/yourusername"
                />
                <SocialIcon
                  type="linkedin"
                  href="https://linkedin.com/in/yourprofile"
                />
                <SocialIcon
                  type="instagram"
                  href="https://instagram.com/in/yourprofile"
                />
              </div>
            </div>
          </nav>
        </div>
        <div
          className={`w-full max-w-[1440px] px-4 md:px-[34px] fixed left-1/2 top-0 z-50 mx-auto mb-8 flex -translate-x-1/2 items-center justify-between py-2 lg:mt-2 lg:max-w-[min(1150px,calc(100vw-24px))] lg:rounded-2xl lg:py-0 before:shadow-fade before:absolute before:inset-0 before:z-[-1] before:bg-white before:transition-opacity before:duration-300 lg:before:rounded-2xl bg-primary-50/95 border-0 before:block ${
            isScrolled
              ? "before:opacity-100 before:border-0 shadow-sm"
              : "before:opacity-0 before:border"
          }`}
        >
          <div className="flex cursor-pointer rtl:relative rtl:top-3">
            <Logo />
          </div>

          {/* desktop nav */}
          <nav
            aria-label="desktop navbar"
            data-orientation="horizontal"
            dir="ltr"
            className="hidden lg:block"
          >
            <div className="font-matter relative z-20">
              <div className="relative">
                <ul
                  data-orientation="horizontal"
                  id="nav-items"
                  className="flex items-center gap-8"
                  dir="ltr"
                >
                  {navItems.slice(0, -1)?.map(({ href, label }, index) => (
                    <li key={label} className="relative group">
                      <Link
                        href={href}
                        aria-label={`${label} section`}
                        className="text-sm font-medium leading-[22px] text-neutral-dark hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-foreground after:transition-all after:duration-300 hover:after:w-full px-2 py-1 rounded-lg before:content-[attr(data-number)] before:inline-block before:font-bold before:w-auto before:right-0 before:-top-3 before:leading-[0.6em] before:text-[0.6em] before:absolute before:h-auto before:opacity-75"
                      >
                        <span className="relative">
                          <span className="absolute -right-0 -top-3 text-[0.6em] font-bold opacity-75">
                            0{index + 1}
                          </span>
                          {"//"} {label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <div className="flex items-center justify-center">
            <a href="#contact" className="hidden lg:block">
              <Button variant={`contact`}>Contact Me</Button>
            </a>

            <button
              className="p-2 hover:cursor-pointer lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-4 w-4">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-4 bg-neutral-darker transition-all duration-500 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-[7px]" : "rotate-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-[7px] h-[1.5px] w-4 bg-neutral-darker transition-all duration-500 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-[14px] h-[1.5px] w-4 bg-neutral-darker transition-all duration-500 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : "rotate-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
