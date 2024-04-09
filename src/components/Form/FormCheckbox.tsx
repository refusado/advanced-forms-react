import { LabelHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fieldName: string
}

export function FormCheckbox({ fieldName, ...rest }: CheckboxProps) {
  const { register } = useFormContext();
  return (
    <>
      <input
        type="checkbox"
        tabIndex={-1}
        id={fieldName}
        className="absolute opacity-0 w-6 h-6 cursor-pointer peer"
        {...register(fieldName)}
      />
      <label
        htmlFor={fieldName}
        tabIndex={0}
        className="inline-flex justify-center items-center after:content-['✓'] border-slate-700 bg-slate-800 peer-checked:bg-violet-600 p-0 border rounded w-6 h-6 after:h-6 font-bold text-transparent peer-checked:text-inherit cursor-pointer"
        {...rest}
      />
    </>
  )
}