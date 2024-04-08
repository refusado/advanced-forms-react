import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function FormInput(props: InputProps) {
  const { register } = useFormContext();
  return (
    <input
      id={props.name}
      className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
      {...register(props.name)}
      {...props}
    />
  )
}