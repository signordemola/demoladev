interface HeadlineProps {
  emoji?: string;
  text: string;
}

export default function Headline({ emoji, text }: HeadlineProps) {
  return (
    <div className="flex items-center gap-2">
      {emoji && <span className="text-2xl">{emoji}</span>}
      <h2 className="text-2xl font-bold text-primary">{text}</h2>
    </div>
  );
}
