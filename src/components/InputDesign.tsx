import { InputHTMLAttributes } from "react";

interface InputDesignProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputDesign({ label, ...rest }: InputDesignProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-[color:var(--color-label)]">
          {label}
        </label>
      )}
      <input
        {...rest}
        className="w-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--color-blue-brand)] border border-[color:var(--color-input-border)] rounded-[var(--radius-default)]"
      />
    </div>
  );
}
