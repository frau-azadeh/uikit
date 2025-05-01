import { cn } from '@/utils/cn'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant: "primary" | "secondary" | "outline" | "destractive",
  size: "sm" | "md" | "lg" ,
  isLoading?: boolean,
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "sm",
  isLoading = false,
  className,
  children,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled = {isLoading || disabled}
      className={cn(
        'inline-flex items-center font-bold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        //Variant style
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        variant === 'outline' && 'border border-gray-400 text-gray-800 hover:bg-gray-100 focus:ring-red-500',
        variant === 'destractive' && 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        //Size Style
        size === 'sm' && 'px-3 py-1 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-5 py-3 text-lg',
        //Disable or Loading
        (isLoading || disabled) && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button