import { Children, HTMLAttributes, ReactNode, createElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  fieldName: string
}

export function FormField({ fieldName, children, className, ...rest }: FieldProps) {
  return (
      <div className={twMerge('flex flex-col gap-1', className)} {...rest}>
        {Children.map(children, (child: ReactNode, index: number) => {
          if (isValidElement(child)) {
            return createElement(child.type, { ...child.props, fieldName, key: index })
          }

          return child
        })}
      </div>
  )
}