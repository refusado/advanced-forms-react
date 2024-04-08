import { HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {}

export function FormErrorMessage(props: ErrorMessageProps) {
  return (
    <span className="opacity-90 text-red-500/80 text-sm" {...props} />
  )
}