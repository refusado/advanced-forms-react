import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  field: string
}

export function FormErrorMessage(props: ErrorMessageProps) {
  const { formState: { errors } } = useFormContext();

  return (
    <span
      className="opacity-90 text-red-500/80 text-sm"
      {...props}
    >
      {errors[props.field]?.message?.toString()}
    </span>
  )
}