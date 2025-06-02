import { cn } from "@/utils/cn";
import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}
const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  className,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-bold text-gray-700">{label}</label>
      )}
      <select
        {...rest}
        className={cn(
          "border rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200",
          className,
        )}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default Select;
