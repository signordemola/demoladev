import Link from "next/link";
import React from "react";
import CustomButton from "./custom-button";
import ScrollToTop from "./scroll-to-top";
import Headline from "./headline";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-neutral-darker text-neutral-light mt-20 scroll-mt-38"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-18 relative">
        <Headline emoji="🤙" text="Sold Yet?" ariaLabel="Handshake icon" />

        <div className="grid md:grid-cols-3 md:items-center gap-8">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-satoshi my-6 font-extralight">
         {`     Enough talk, let's make something great together.`}
            </h2>

            <CustomButton
              variant="primary"
              className="mt-8"
              aria-label="Contact via email"
            >
              <Link
                href="mailto:adedamola4678@gmail.com"
                className="inline-flex items-center gap-2"
              >
                adedamola4678@gmail.com
                <ArrowIcon />
              </Link>
            </CustomButton>
          </div>
        </div>

        <div className="flex justify-between items-center pb-6 pt-12">
          <small className="text-sm text-neutral-medium">
            Copyright &copy; DemolaDev {year}
          </small>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);
