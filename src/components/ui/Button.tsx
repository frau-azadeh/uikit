import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: ReactNode;
  ctaText?: string;
  onCtaClick?: () => void;
  ctaVariant?: "primary" | "secondary" | "outline";
}

export const Button = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  children,
  ctaText,
  onCtaClick,
  ctaVariant = "primary",
  className,
  ...props
}: ButtonProps) => {
  
  return (
    <div className="flex items-center gap-2">
      <button
        className={`rounded flex items-center px-4 py-2 font-medium transition ${
          variant === "primary" ? "bg-blue-500 text-white" :
          variant === "secondary" ? "bg-gray-300 text-black" :
          "border border-gray-500 text-black"
        } ${
          size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base"
        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {isLoading ? "Loading..." : children}
      </button>
      {ctaText && (
        <button
          className={`px-3 py-1 rounded text-sm transition ${
            ctaVariant === "primary" ? "bg-green-500 text-white hover:bg-green-600" :
            ctaVariant === "secondary" ? "bg-gray-300 text-black hover:bg-gray-400" :
            "border border-gray-500 text-black hover:bg-gray-100"
          }`}
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};
