import { SelectHTMLAttributes } from "react";

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function FormSelector(props: SelectorProps) {
  return (
    <select className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10" {...props} />
  )
}