import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function FormInput(props: InputProps) {
  return (
    <input
      id={props.name}
      className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
      {...props}
    />
  )
}