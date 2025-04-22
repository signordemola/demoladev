import { Github, Linkedin, Instagram, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

type SocialPlatform = "github" | "linkedin" | "instagram";

interface SocialIconProps {
  type: SocialPlatform;
  href: string;
  className?: string;
  size?: number;
}
const SocialIcon = ({
  type,
  href,
  className = "",
  size = 24,
}: SocialIconProps) => {
  const iconClass = `text-accent hover:text-accent-foreground transition-colors duration-300 ${className}`;

  const getIcon = () => {
    switch (type) {
      case "github":
        return <Github size={size} className={iconClass} aria-label="GitHub" />;
      case "linkedin":
        return (
          <Linkedin size={size} className={iconClass} aria-label="LinkedIn" />
        );
      case "instagram":
        return (
          <Instagram size={size} className={iconClass} aria-label="Instagram" />
        );
      default:
        return (
          <LinkIcon
            size={size}
            className={iconClass}
            aria-label="External Link"
          />
        );
    }
  };
  return <Link href={href}>{getIcon()}</Link>;
};

export default SocialIcon;
