import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const CustomButton = (
  props: {
    variant: "primary" | "secondary" | "text";
    icon?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, icon, ...rest } = props;
  return (
    <button
      className={twMerge(
        "relative group/button h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-500",
        variant === "primary" && "bg-red-orange-500 text-white",
        variant === "secondary" &&
          "hover:bg-red-orange-500 hover:text-white/90",
        variant === "text" &&
          "h-auto text-red-orange-500 px-0 border-transparent after:content-[''] after:transition-all after:duration-500 after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full",
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
