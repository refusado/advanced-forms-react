import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
}

export function FormSelector(props: SelectorProps) {
  const { register } = useFormContext();
  return (
    <select
      id={props.name}
      className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
      {...register(props.name)}
      {...props}
    />
  )
}