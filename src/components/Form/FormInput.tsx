import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: string
}

export function FormInput({ fieldName, ...rest }: InputProps) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <input
      aria-invalid={errors[fieldName] ? true : false}
      id={fieldName}
      className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
      {...register(fieldName)}
      {...rest}
    />
  )
}