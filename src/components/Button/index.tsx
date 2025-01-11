import { ReactNode } from "react";
import Icon from "../Icons";

interface ButtonProps {
  variant: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonVariant = "add" | "delete" | "correction";

const buttonStyles = {
  add: "bg-primary text-slate-900",
  delete: "bg-rose text-white",
  correction: "bg-yellowGreen text-slate-900",
} as const;

const iconTypes = {
  add: "add",
  delete: "x",
  correction: "correction",
} as const;

const textStyles = {
  add: "text-white",
  delete: "text-white",
  correction: "text-slate-900",
} as const;

export default function Button({
  variant,
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`border-solid rounded-3xl border-2 border-slate-900 p-4 flex items-center gap-2 ${buttonStyles[variant]} ${className}`}
    >
      <Icon type={iconTypes[variant]} color={textStyles[variant]} />
      <span className={`hidden md:block ${textStyles[variant]}`}>
        {children}
      </span>
    </button>
  );
}
