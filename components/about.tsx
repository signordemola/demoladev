import Headline from "./headline";
import Link from "next/link";

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
          <div className="px-[30px] py-12">
            <h2
              id="about-heading"
              className="text-xl md:text-3xl lg:text-6xl font-poppins font-light"
            >
              I’m <span className="text-primary">Adedemola</span>, a Lagos-based
              web developer crafting fast, responsive sites with Next.js, React,
              Tailwind & Framer-Motion. I design and code for both brands &
              businesses to thrive online. Connect on{" "}
              <span>
                <Link
                  href="https://www.linkedin.com/in/your-profile"
                  className="text-blue-500 hover:underline inline-flex items-center gap-1"
                  aria-label="Demola’s LinkedIn profile"
                  target="_blank"
                >
                  linkedIn
                </Link>
              </span>{" "}
              or
              <span>
                <Link
                  href="https://github.com/signordemola"
                  className="text-blue-500 hover:underline inline-flex items-center gap-1"
                  aria-label="Demola’s GitHub profile"
                  target="_blank"
                >
                  gitHub
                </Link>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
