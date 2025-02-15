import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  align?: "center"|"right";
  width?: "full" | "small" | "medium";
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "sm",
  align = "center",
  width = "full",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded flex items-center px-4 py-2 font-medium transition 
        ${variant === "primary" ? "bg-blue-500 text-white" : 
          variant === "secondary" ? "bg-green-700 text-white" : 
          "bg-gray-300 text-black"
        }
        ${size === "sm" ? "text-sm" :
          size === "md" ? "text-md":
           "text-lg"}
        ${align === "center" ? "justify-center" :
          align === "right" ? "justify-end" :
          "justify-start"
        }
        ${width === "full" ? "w-full" :
          width === "small" ? "w-24" :
          width === "medium" ? "w-36" : 
          "w-40"

        }
        hover:opacity-80 active:scale-95`}
      {...props}
    >
      {children}
    </button>
    
  );
};
