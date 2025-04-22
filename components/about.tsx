const About = () => {
  return (
    <section
      id="about"
      className="cross-corners mt-8 mx-2 rounded-md border border-neutral-dark/20 scroll-mt-[6rem] md:scroll-mt-[7rem] lg:scroll-mt-22"
    >
      <div className="mx-auto max-w-[1200px] gap-8 overflow-hidden p-6">
        <div className="border-2 border-neutral-dark rounded-xl">
          <div className="quote" />

          <div className="border-b-2 border-neutral-dark" />
          <div className="px-[20px] py-8">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-inter font-light">
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
