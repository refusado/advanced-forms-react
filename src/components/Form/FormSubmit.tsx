import { ButtonHTMLAttributes } from "react";

interface SubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function FormSubmit(props: SubmitProps) {
  return (
    <button 
      type="submit"
      className="bg-violet-600 enabled:hover:bg-violet-700 disabled:opacity-60 px-8 py-1 rounded h-10 font-semibold duration-150 cursor-default enabled:cursor-pointer self-end"
      {...props}
    />
  )
}