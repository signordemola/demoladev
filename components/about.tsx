import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mx-3 md:mx-0 my-4 relative cross-corners border border-neutral-dark/20"
    >
      <div className="mx-auto relative max-w-[1200px] gap-8 overflow-hidden p-6">
        <div className="border-2 border-neutral-dark rounded-3xl">
          <div className="quote" />
          <div className="border-b-2 border-neutral-dark" />
          <div className="px-[20px] py-8">
            <h2 className="text-3xl md:text-6xl lg:text-8xl font-inter font-light">
              Building beautiful websites with clean code and thoughtful design
              to help your brand grow and stand out online...
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
