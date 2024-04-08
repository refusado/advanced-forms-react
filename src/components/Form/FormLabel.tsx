import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function FormLabel(props: LabelProps) {
  return (
    <label className="text-slate-300" {...props} />
  )
}