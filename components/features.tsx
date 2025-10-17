import Headline from "./headline";
import {
  FiLayout,
  FiZap,
  FiSmartphone,
  FiSearch,
  FiClock,
  FiServer,
} from "react-icons/fi";

const Features = () => {
  return (
    <section
      id="features"
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

            <Headline
              emoji="⚡"
              text="Why Choose Me?"
            />
          </div>
          <div className="border-b border-neutral-darker/60 dark:border-neutral-lighter/60" />
          <div className="px-[30px] py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="p-6 border dark:border-neutral-lighter/30 rounded-lg hover:border-primary/50 dark:hover:border-neutral-lighter/50 transition-colors">
                <FiZap className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Blazing-Fast Performance
                </h3>
                <p className="font-light">
                  Built with Next.js & Vercel infrastructure for 90+ Lighthouse
                  scores. Optimized APIs and static generation for maximum
                  speed.
                </p>
              </div>

              <div className="p-6 border dark:border-neutral-lighter/30 rounded-lg hover:border-primary/50 dark:hover:border-neutral-lighter/50 transition-colors">
                <FiLayout className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Modern Tech Stack
                </h3>
                <p className="font-light">
                  React, TypeScript, Tailwind CSS, and Framer Motion for
                  cutting-edge, maintainable solutions that scale with your
                  business.
                </p>
              </div>

              <div className="p-6 border dark:border-neutral-lighter/30 rounded-lg hover:border-primary/50 dark:hover:border-neutral-lighter/50 transition-colors">
                <FiSmartphone className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Mobile-First Approach
                </h3>
                <p className="font-light">
                  Responsive designs that adapt perfectly to all devices,
                  ensuring seamless user experience across desktop, tablet &
                  mobile.
                </p>
              </div>

              <div className="p-6 border dark:border-neutral-lighter/30 rounded-lg hover:border-primary/50 dark:hover:border-neutral-lighter/50 transition-colors">
                <FiSearch className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  SEO-Optimized Foundations
                </h3>
                <p className="font-light">
                  Built-in SEO best practices with proper semantic markup,
                  optimized metadata, and lightning-fast page loads.
                </p>
              </div>

              <div className="p-6 border dark:border-neutral-lighter/30 rounded-lg hover:border-primary/50 dark:hover:border-neutral-lighter/50 transition-colors">
                <FiClock className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Agile Development
                </h3>
                <p className="font-light">
                  Weekly sprints with progress updates and flexible iterations.
                  Average project delivery in 2-4 weeks.
                </p>
              </div>

              <div className="p-6 border dark:border-neutral-lighter/30 rounded-lg hover:border-primary/50 dark:hover:border-neutral-lighter/50 transition-colors">
                <FiServer className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Full-Cycle Development
                </h3>
                <p className="font-light">
                  From concept to deployment: UI/UX design, development,
                  testing, launch, and 30-day post-launch support.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center border-t dark:border-neutral-lighter/30 pt-8">
              <p className="text-lg font-light space-x-2">
                <span>Dedicated Technical Support•</span>
                <span> 100% Client Satisfaction •</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
