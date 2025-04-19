import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";
import CustomButton from "./custom-button";
import ScrollToTop from "./scroll-to-top";

const Footer = () => {
  return (
    <footer
      className="bg-neutral-dark text-neutral-light relative"
      id="contact"
    >
      <div className="container relative">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-secondary"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                {"Enough talk, let's make something great together."}
              </h2>
              <CustomButton
                variant="secondary"
                className="mt-8"
                icon={
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
                }
              >
                <Link href="mailto:adedamola4678@gmail.com">
                  adedamola4678@gmail.com
                </Link>
              </CustomButton>
            </div>

            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems?.map(({ href, label }) => (
                  <Link key={label} href={href}>
                    <CustomButton variant="text" className="text-lg">
                      {label}
                    </CustomButton>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <p className="py-16 text-sm text-neutral-medium">
          Copyright &copy; DemolaDev &bull; All rights reserved
        </p>

        <ScrollToTop />
      </div>
    </footer>
  );
};

export default Footer;
