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
                
                <input
                    type={type}
                    className={`border rounded px-3 py-2 transition w-full 
                        ${icon? "pl-10": ""}
                        ${inputSize === "sm"? "text-sm py-1":
                          inputSize === "lg"? "text-lg py-3":
                          "text-md py-2"}
                        ${error?"border-red-500":"border-gray-300 focus:border-blue-500"}
                        `}
                        {...props}
                />
            </div>
            {error &&<span className="text-red-500 text-xs">{error}</span>}
        </div>

    )
}