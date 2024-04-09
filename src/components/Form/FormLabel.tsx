import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fieldName: string
}

export function FormLabel({ fieldName, ...rest }: LabelProps) {
  return (
    <label
      htmlFor={fieldName}
      className="text-slate-300"
      {...rest}
    />
  )
}