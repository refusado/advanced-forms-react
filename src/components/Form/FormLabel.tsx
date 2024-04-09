import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fieldName?: string
}

export function FormLabel({ fieldName, ...rest }: LabelProps) {

  if (!fieldName) throw new Error('FormLabel component must have a fieldName property');

  return (
    <label
      htmlFor={fieldName}
      className="text-slate-300"
      {...rest}
    />
  )
}