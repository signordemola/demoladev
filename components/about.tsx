import Image from "next/image";
import Headline from "./headline";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="dark:bg-neutral-darker/30 dark:text-neutral-lighter/85 rounded-md mt-20 mx-4 lg:mx-2 scroll-mt-38"
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

            <Headline emoji="🔥" text="Learn about me!" />
          </div>
          <div className="border-b border-neutral-darker/60 dark:border-neutral-lighter/60" />
          <div className="px-[30px] py-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Image Container */}
              <div className="w-[200px] h-[200px] min-w-[200px] relative group">
                <div className="absolute inset-0 rounded-full bg-primary/20 dark:bg-primary transform group-hover:scale-105 transition-transform" />
                <Image
                  src="/full.webp"
                  alt="Adedamola picture"
                  width={400}
                  height={400}
                  className="object-cover rounded-full relative z-10 border-2 border-primary/30 dark:border-neutral-lighter/30 hover:border-primary/50 dark:hover:border-neutral-lighter/50 transition-colors"
                />
              </div>

              {/* Text Content */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-light flex-1">
                <span className="block mb-4">
                  I’m <span className="text-primary">Adedemola</span>,
                </span>

                <span className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed">
                  a web developer from Lagos who builds high-performance
                  websites, SaaS MVPs, and digital tools. From landing pages to
                  scheduling apps, I use modern frameworks to create products
                  that scale and convert.
                </span>

                <div className="mt-6 space-y-3 text-base md:text-lg">
                  <p>
                    Connect on{" "}
                    <Link
                      href={`https://x.com/demoladev`}
                      className="text-blue-500 hover:underline inline-flex items-center gap-1 transition-colors"
                      aria-label="Demola’s LinkedIn profile"
                      target="_blank"
                    >
                      X (Twitter)
                    </Link>
                    ,{" "}
                    <Link
                      href="https://www.linkedin.com/in/abiodun-bello-553799199/"
                      className="text-blue-500 hover:underline inline-flex items-center gap-1 transition-colors"
                      aria-label="Demola’s LinkedIn profile"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="https://github.com/signordemola"
                      className="text-blue-500 hover:underline inline-flex items-center gap-1 transition-colors"
                      aria-label="Demola’s GitHub profile"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </p>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
