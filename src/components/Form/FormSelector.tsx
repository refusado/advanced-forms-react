import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldName?: string,
  options: {
    name: string,
    label: string
  }[]
}

export function FormSelector({ fieldName, options, className, ...rest }: SelectorProps) {
  const { register, formState: { errors } } = useFormContext();

  if (!fieldName) throw new Error('FormSelector component must have a fieldName property');

  return (
    <select
      aria-invalid={errors[fieldName] ? true : false}
      aria-errormessage={`${fieldName}ErrorMessage`}
      id={fieldName}
      className={twMerge("border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10", className)}
      {...register(fieldName)}
      {...rest}
    >
      {options.map(({ name, label }) => (
          <option key={name} value={name}>
            {label}
          </option>
        )
      )}
    </select>
  )
}