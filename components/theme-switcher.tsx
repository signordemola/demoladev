"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    // Close dropdown on Escape key press
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative mr-4 lg:mr-0 lg:ml-4 py-1" ref={dropdownRef}>
      <button
        aria-label={`Change theme (current: ${theme})`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-accent bg-neutral-light dark:bg-neutral-800 hover:bg-neutral-lighter dark:hover:bg-neutral-700 transition-colors"
      >
        {theme === "light" ? (
          <Sun className="w-4 h-4" aria-hidden="true" />
        ) : theme === "dark" ? (
          <Moon className="w-4 h-4" aria-hidden="true" />
        ) : (
          <Monitor className="w-4 h-4" aria-hidden="true" />
        )}
        <span className="sr-only">Theme: {theme}</span>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-lg bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <div className="p-1">
            <button
              onClick={() => {
                setTheme("light");
                setOpen(false);
              }}
              className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-neutral-light dark:hover:bg-neutral-800 transition-colors"
            >
              <Sun className="w-4 h-4" aria-hidden="true" />
              <span>Light</span>
            </button>
            <button
              onClick={() => {
                setTheme("dark");
                setOpen(false);
              }}
              className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Moon className="w-4 h-4" aria-hidden="true" />
              <span>Dark</span>
            </button>
            <button
              onClick={() => {
                setTheme("system");
                setOpen(false);
              }}
              className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Monitor className="w-4 h-4" aria-hidden="true" />
              <span>System</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
