import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function FormSubmit({className, ...rest}: SubmitProps) {
  return (
    <button 
      type="submit"
      className={twMerge("bg-violet-600 enabled:hover:brightness-125 disabled:opacity-60 px-8 py-1 rounded h-10 font-semibold duration-150 cursor-default enabled:cursor-pointer self-end", className)}
      {...rest}
    />
  )
}