import { twMerge } from "tailwind-merge";

// Headline.tsx
interface HeadlineProps {
  emoji: string;
  text: string;
  className?: string;
  ariaLabel?: string;
}

const Headline = ({ emoji, text, className, ariaLabel }: HeadlineProps) => (
  <div className={twMerge("my-3 mb-4", className)}>
    <div className="inline-flex items-center gap-2 rounded-md px-3.5 py-1 bg-neutral-medium shadow-fade">
      <span role="img" aria-label={ariaLabel}>
        {emoji}
      </span>
      <span className="text-xs text-primary-foreground/80">{text}</span>
    </div>
  </div>
);

export default Headline;
