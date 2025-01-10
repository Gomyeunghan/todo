import { ReactNode } from "react";
import Icon from "../Icons";

interface ButtonProps {
  bgColor: string;
  iconType: string;
  textColor: string;
  children: ReactNode;
  className?: string;
}

export default function Button({
  bgColor,
  iconType,
  textColor,
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`text-${textColor} border-solid rounded-3xl border-2 border-slate-900 p-4 flex items-center gap-2 ${bgColor} ${className}`}
    >
      <Icon type={iconType} color={textColor} />
      {children}
    </button>
  );
}
