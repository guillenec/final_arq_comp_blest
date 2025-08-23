import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  active?: boolean;
  ariaLabel: string;
};

export default function IconButton({ icon, active, ariaLabel, className = "", ...rest }: Props) {
  return (
    <button
      aria-label={ariaLabel}
      className={`size-10 grid place-items-center rounded-xl bg-white shadow-[0_6px_0_#8f1425] border border-[#f3f0e3]
      hover:shadow-[0_8px_0_#8f1425] transition relative ${className}`}
      {...rest}
    >
      <span className={`transition ${active ? "text-[#b1182e]" : "text-[#283732]"}`}>{icon}</span>
    </button>
  );
}
