import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const CustomButton = (
  props: {
    variant: "primary" | "secondary" | "text" | "projects";
    icon?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, icon, ...rest } = props;
  return (
    <button
      className={twMerge(
        "relative group/button h-11 px-6 rounded-xl uppercase inline-flex items-center gap-2 transition duration-500 cursor-pointer",
        variant === "primary" && "bg-neutral-medium hover:bg-neutral-dark/20 text-neutral-dark border-2 border-neutral-ddarker",
        variant === "secondary" && "hover:bg-primary hover:text-white",
        variant === "text" &&
          "h-auto text-primary px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-primary hover:after:w-full",
        variant === "projects" &&
          "border border-neutral-darker bg-neutral-dark py-4 text-white font-medium hover:bg-opacity-90 transition-all shadow-lg backdrop-blur-sm",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default CustomButton;
