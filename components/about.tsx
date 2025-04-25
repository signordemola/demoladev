import Headline from "./headline";

const About = () => {
  return (
    <section
      id="abiut"
      className="dark:bg-neutral-darker/30 dark:text-neutral-lighter/85 dark:shadow-sm rounded-md mt-20 mx-4 lg:mx-2 scroll-mt-38"
    >
      <div className="mx-auto max-w-[1200px] gap-8 overflow-hidden border border-neutral-darker/60 dark:border-neutral-lighter/60 rounded-md">
        <div className="">
          <div className="flex justify-between items-center mx-[20px]">
            <div
              className="flex items-center gap-1 my-5"
              role="region"
              aria-label="Features overview"
            >
              <span className="w-4 h-4 rounded-full bg-primary dark:bg-neutral-lighter/90"></span>
              <span className="w-4 h-4 rounded-full bg-primary dark:bg-neutral-lighter/90"></span>
              <span className="w-4 h-4 rounded-full bg-primary dark:bg-neutral-lighter/90"></span>
            </div>

            <Headline emoji="🔥" text="Learn more!" />
          </div>
          <div className="border-b border-neutral-darker/60 dark:border-neutral-lighter/60 " />
          <div className="px-[20px] py-8">
            <h2
              id="about-heading"
              className="text-xl md:text-3xl lg:text-5xl tracking-wide font-inter font-light"
            >
              Demoladev Web Solutions specializes in creating custom
              professional websites for businesses, entrepreneurs & individuals.
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
