import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  fieldName?: string
}

export function FormErrorMessage({ fieldName, className, ...rest }: ErrorMessageProps) {
  const { formState: { errors } } = useFormContext();

  if (!fieldName) throw new Error('FormErrorMessage component must have a fieldName property');

  return (
    errors[fieldName] && (
      <span
        id={`${fieldName}ErrorMessage`}
        className={twMerge("opacity-90 text-red-500/80 text-sm", className)}
        role="alert"
        {...rest}
      >
        {errors[fieldName]?.message?.toString()}
      </span>
    )
  )
}