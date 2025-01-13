import { ReactNode } from "react";
import Icon from "../Icons";

interface ButtonProps {
  variant: ButtonVariant;
  children?: ReactNode;
  className?: string;
  textClassName?: string;
  IconeColor?: string;
  handleClick: () => void;
  disabled?: boolean;
}

type ButtonVariant = "add" | "delete" | "correction";

const buttonStyles = {
  add: "bg-primary text-slate-900",
  delete: "bg-rose text-white",
  correction: "bg-slate-200 text-slate-900",
} as const;

const iconTypes = {
  add: "add",
  delete: "x",
  correction: "correction",
} as const;

export default function Button({
  variant,
  children,
  className = "",
  textClassName = "",
  IconeColor = "text-slate-200",
  handleClick,
  disabled,
}: ButtonProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`border-solid rounded-3xl border-2 border-slate-900 p-4 flex items-center gap-2 justify-center ${buttonStyles[variant]} ${className} max-w-44`}
    >
      <Icon type={iconTypes[variant]} color={IconeColor} />
      <span className={` ${textClassName}`}>{children}</span>
    </button>
  );
}
