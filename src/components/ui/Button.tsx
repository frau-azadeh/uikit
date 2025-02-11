import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "sm",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded flex items-center px-4 py-2 font-medium transition 
        ${variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}
        ${size === "sm" ? "text-sm" : "text-md"}
        hover:opacity-80 active:scale-95`}
      {...props}
    >
      {children}
    </button>
  );
};
