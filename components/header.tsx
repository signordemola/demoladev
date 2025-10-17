"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Logo } from "./logo";
import { navItems } from "@/constants";
import { Button } from "./ui/button";
import ThemeSwitcher from "./theme-switcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const overlayRef = React.useRef<HTMLDivElement | null>(null);

  // Debounced scroll handler to prevent excessive re-renders
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 1);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMobileNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const href = event.currentTarget.hash;

      // Close menu immediately
      setIsOpen(false);

      // Small delay to allow menu close animation, then scroll
      setTimeout(() => {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    []
  );

  const handleDesktopNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const href = event.currentTarget.hash;
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  useEffect(() => {
    if (isOpen && overlayRef.current) {
      const first = overlayRef.current.querySelector(
        "a, button, [tabindex]:not([tabindex='-1'])"
      ) as HTMLElement | null;
      first?.focus();
    }
  }, [isOpen]);

  return (
    <header aria-label="Header Section">
      <div className="border-b-0 before:hidden after:hidden">
        {/* Mobile Nav */}
        {isOpen && (
          <div
            ref={overlayRef}
            className={`fixed top-0 left-0 h-full w-full lg:hidden bg-neutral-light transition-all duration-300 ease-in-out z-[60] opacity-100 pointer-events-auto`}
            role="dialog"
            aria-modal="true"
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
                  <a
                    href={href}
                    onClick={handleMobileNavClick}
                    aria-label={`Navigate to ${label} section`}
                    className="block touch-manipulation"
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
                    <span className="sr-only">Open {label} section</span>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Header */}
        <div
          className={`w-full max-w-[1440px] px-4 md:px-[34px] fixed left-1/2 top-0 z-50 mx-auto mb-8 flex -translate-x-1/2 items-center justify-between py-2 lg:mt-2 lg:max-w-[min(1150px,calc(100vw-24px))] lg:rounded-2xl lg:py-0 before:shadow-fade before:absolute before:inset-0 before:z-[-1] before:bg-white before:transition-opacity before:duration-300 lg:before:rounded-2xl bg-primary-50/95 border-0 before:block ${
            isScrolled
              ? "before:opacity-100 before:border-0 shadow-sm"
              : "before:opacity-0 before:border"
          }`}
          role="navigation"
          aria-label="Main header"
        >
          <div className="cursor-pointer rtl:relative rtl:top-3">
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
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
                      <a
                        href={href}
                        onClick={handleDesktopNavClick}
                        aria-label={`${label} section`}
                        className={`text-sm font-medium leading-[20px] hover:text-primary transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full px-2 py-1 rounded-lg block touch-manipulation
                          ${isScrolled ? "dark:text-neutral-darker" : ""}
                          `}
                      >
                        <span className="relative">
                          <span className="absolute -right-0 -top-3 text-[0.6em] font-bold opacity-75">
                            0{index + 1}
                          </span>
                          {"//"} {label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <div className="flex items-center justify-center gap-2">
            <a
              href="#contact"
              onClick={handleDesktopNavClick}
              className="hidden lg:block"
              aria-label="Contact me (opens contact section)"
            >
              <Button variant={`contact`}>Contact Me</Button>
            </a>

            <ThemeSwitcher />

            <Button
              className="p-4 hover:cursor-pointer lg:hidden touch-manipulation"
              variant={`menu`}
              size={`xl`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className="relative h-4 w-4">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-4 bg-neutral-light transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-[7px]" : "rotate-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-[7px] h-[1.5px] w-4 bg-neutral-light transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-[14px] h-[1.5px] w-4 bg-neutral-light transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : "rotate-0"
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
