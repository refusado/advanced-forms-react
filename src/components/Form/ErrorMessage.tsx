import { HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <span className="opacity-90 text-red-500/80 text-sm" {...props} />
  )
}