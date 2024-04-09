import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName?: string
}

export function FormInput({ fieldName, ...rest }: InputProps) {
  const { register, formState: { errors } } = useFormContext();

  if (!fieldName) throw new Error('FormInput component must have a fieldName property');

  return (
    <input
      aria-invalid={errors[fieldName] ? true : false}
      aria-errormessage={`${fieldName}ErrorMessage`}
      id={fieldName}
      className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
      {...register(fieldName)}
      {...rest}
    />
  )
}