import { InputHTMLAttributes, ReactNode } from "react"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>,"size">{
    label ?: string;
    type ?: "text" | "password" | "email" | "number";
    inputSize ?: "sm" | "md" | "lg";
    icon?: ReactNode;
    error?: string;
    fullWidth?: boolean;
}

export const Input = ({
    label,
    type = "text",
    inputSize = "md",
    icon,
    error,
    fullWidth = false,
    ...props
}: InputProps) =>{
    return(
        <div className={`flex flex-col ${fullWidth ? "w-full" : "w-auto"}gap-1`}>
                {label && <label className="text-gray-700 text-sm">{label}</label>}
        
        <div className="relative flex items-center">
            {icon && <span className="absolute left-3 text-gray-500">{icon}</span>}
        </div>
        </div>

    )
}