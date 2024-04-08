import { LabelHTMLAttributes } from "react";

interface CheckboxProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
}

export function FormCheckbox(props: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        tabIndex={-1}
        id={props.label}
        className="absolute opacity-0 w-6 h-6 cursor-pointer peer"
      />
      <label
        htmlFor={props.label}
        tabIndex={0}
        className="inline-flex justify-center items-center after:content-['✓'] border-slate-700 bg-slate-800 peer-checked:bg-violet-600 p-0 border rounded w-6 h-6 after:h-6 font-bold text-transparent peer-checked:text-inherit cursor-pointer"
        {...props}
      />
    </>
  )
}