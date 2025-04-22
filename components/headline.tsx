import React from "react";

interface HeadlineProps {
  emoji: string;
  text: string;
  className?: string;
}

const Headline = ({ emoji, text, className }: HeadlineProps) => {
  return (
    <div className={`my-3 mb-4 ${className}`}>
      <div className="shadow-fade inline-flex items-center justify-start gap-2 rounded-md px-3.5 py-1 bg-neutral-medium flex-row [&_span]:hover:scale-110 [&_span]:focus-visible:scale-110">
        <span className="text-white">{emoji}</span>
        <span className="text-xs text-primary-foreground/80">{text}</span>
      </div>
    </div>
  );
};

export default Headline;
