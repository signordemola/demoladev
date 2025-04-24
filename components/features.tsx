import Headline from "./headline";

const Features = () => {
  return (
    <section
      id="features"
      className="cross-corners mt-20 mx-4 lg:mx-2 rounded-md border border-neutral-dark/20 scroll-mt-38"
    >
      <div className="mx-auto max-w-[1200px] gap-8 overflow-hidden p-6 bg-neutral-light">
        <div className="border-2 border-neutral-dark rounded-xl">
          <div className="quote">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Headline emoji="🎁" text="What you get!" />
            </div>
          </div>
          <div className="border-b-2 border-neutral-dark" />
          <div className="px-[20px] py-8">
            <h2 className="text-xl md:text-3xl lg:text-5xl tracking-wide font-inter font-light">
              Custom website design, SEO optimization, perfomance-focused
              development, industry-specific solutions & ongoing support after
              launch
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
