import Headline from "./headline";

const About = () => {
  return (
    <section
      id="about"
      className="cross-corners mt-20 mx-4 lg:mx-2 rounded-md border border-neutral-dark/20 scroll-mt-38"
    >
      <div className="mx-auto max-w-[1200px] gap-8 overflow-hidden p-6 bg-neutral-light">
        <div className="border-2 border-neutral-dark rounded-xl">
          <div className="quote">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Headline emoji="🔥" text="Learn more!" />
            </div>
          </div>
          <div className="border-b-2 border-neutral-dark" />
          <div className="px-[20px] py-8">
            <h2 className="text-xl md:text-3xl lg:text-5xl tracking-wide font-inter font-light">
              Demoladev Web Solutions specializes in creating custom
              prosessional websites for businesses, entrepreneurs & individuals.
              The aim is to help brands grow, streamline operations & stand out
              online
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
