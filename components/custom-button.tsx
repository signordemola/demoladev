// CustomButton.tsx
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "text" | "projects";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  icon?: ReactNode;
}

const CustomButton = ({
  className,
  children,
  variant,
  icon,
  ...rest
}: CustomButtonProps) => {
  const baseStyles =
    "relative group/button h-11 px-6 rounded-xl inline-flex items-center gap-2 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-neutral-light hover:bg-neutral-lighter text-primary border border-primary",
    secondary:
      "hover:bg-primary hover:text-white bg-transparent border border-primary",
    text: "h-auto text-primary px-0 border-transparent after:content-[''] after:transition-all after:duration-300 after:h-px after:w-0 after:absolute after:top-full after:bg-primary hover:after:w-full",
    projects:
      "border border-primary dark:border-neutral-lighter bg-neutral-darker/90 tracking-wider py-4 text-white font-medium hover:bg-opacity-90 shadow-lg backdrop-blur-sm",
  };

  return (
    <button
      className={twMerge(baseStyles, variantStyles[variant], className)}
      {...rest}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </span>
    </button>
  );
};

export default CustomButton;
