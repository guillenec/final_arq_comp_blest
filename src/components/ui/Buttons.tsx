import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
  rounded?: "lg" | "2xl" | "full";
};

export default function Button({ variant = "primary", rounded = "2xl", className = "", ...rest }: Props) {
  const base = "px-5 py-3 font-bold tracking-wide shadow-[0_6px_0_#8f1425] active:translate-y-[2px] active:shadow-[0_4px_0_#8f1425] transition";
  const shape = rounded === "full" ? "rounded-full" : rounded === "2xl" ? "rounded-2xl" : "rounded-lg";
  const styles = {
    primary: `bg-white text-[#b1182e] ${shape} border border-[#b1182e] hover:bg-[#b1182e] hover:text-white`,
    ghost: `bg-transparent ${shape} border border-[#b1182e] text-[#b1182e] hover:bg-[#b1182e]/10`,
    danger: `bg-[#b1182e] text-white ${shape} hover:opacity-90`,
  }[variant];

  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
