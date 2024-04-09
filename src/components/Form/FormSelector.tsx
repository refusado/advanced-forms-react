import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldName: string,
  options: {
    name: string,
    label: string
  }[]
}

export function FormSelector({ fieldName, options, ...rest }: SelectorProps) {
  const { register } = useFormContext();

  return (
    <select
    id={fieldName}
    className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
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