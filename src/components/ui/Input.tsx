import { cn } from '@/utils/cn';
import { forwardRef, InputHTMLAttributes, useId } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps> (({
    label,
    error,
    name,
    className,
    ...rest
},ref) => {
    const internalId = useId();
    const inputId = name || internalId;

  return (
    <div className='w-full'>
        {label && <label htmlFor={inputId} className='block mb-1 text-sm font-bold'>{label}</label>}
        <input
            id={internalId}
            ref={ref}
            name={name}
            {...rest}
            className={cn(
                "border p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition",
                error ? "border-red-500" : "border-gray-300",
                className
            )}
        />
        {error && <p className='text-red-500 test-sm mt-1'>{error}</p>}
    </div>
  )
}
)

Input.displayName = 'Input';
export default Input