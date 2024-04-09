import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  fieldName: string
}

export function FormErrorMessage({ fieldName, ...rest }: ErrorMessageProps) {
  const { formState: { errors } } = useFormContext();

  return (
    errors[fieldName] && (
      <span
        className="opacity-90 text-red-500/80 text-sm"
        role="alert"
        {...rest}
      >
        {errors[fieldName]?.message?.toString()}
      </span>
    )
  )
}