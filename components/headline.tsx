import { twMerge } from "tailwind-merge";

// Headline.tsx
interface HeadlineProps {
  emoji: string;
  text: string;
  className?: string;
}

const Headline = ({ emoji, text, className }: HeadlineProps) => (
  <div className={twMerge("my-3 mb-4 shadow-fade bg-neutral-light text-primary dark:bg-neutral-lighter/95 z-20 rounded-md ", className)}>
    <div className="inline-flex items-center gap-2 px-3.5 py-1">
      <span>{emoji}</span>
      <span className="text-xs font-semibold">{text}</span>
    </div>
  </div>
);

export default Headline;
