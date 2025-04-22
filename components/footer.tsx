import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";
import CustomButton from "./custom-button";
import ScrollToTop from "./scroll-to-top";
import Headline from "./headline";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-neutral-darker text-neutral-light px-4 pt-16 pb-8 font-inter"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="">
          <div className="section">
            <Headline emoji="🤙" text="Sold Yet?" />

            <div className="grid md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font- tracking-wider">
                  {"Let's make something great together."}
                </h2>
                <CustomButton
                  variant="primary"
                  className="mt-8 text-primary-foreground hover:text-neutral-medium"
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
                    <span> adedamola4678@gmail.com</span>
                  </Link>
                </CustomButton>
              </div>

              <div>
                <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                  {navItems.slice(0, -1)?.map(({ href, label }) => (
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
        </div>

        <div className="py-16 relative">
          <p className="absolute bottom-[1rem] text-xs text-neutral- text-wrap pr-2 md:pr-0">
            Copyright &copy; DemolaDev {year} &bull; All rights reserved
          </p>

          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
