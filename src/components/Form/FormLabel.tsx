import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fieldName?: string
}

export function FormLabel({ fieldName, className, ...rest }: LabelProps) {

  if (!fieldName) throw new Error('FormLabel component must have a fieldName property');

  return (
    <label
      htmlFor={fieldName}
      className={twMerge("text-slate-300", className)}
      {...rest}
    />
  )
}