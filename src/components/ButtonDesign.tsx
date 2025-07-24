import { ButtonHTMLAttributes } from "react";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "link";
}

export default function BaseButton({
  children,
  variant = "solid",
  ...rest
}: BaseButtonProps) {
  const baseClass =
    variant === "link"
      ? "button-link cursor-pointer"
      : "button-design cursor-pointer";

  return (
    <button {...rest} className={baseClass}>
      {children}
    </button>
  );
}
