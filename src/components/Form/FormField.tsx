import { Children, HTMLAttributes, ReactNode, createElement, isValidElement } from "react";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  fieldName: string
}

export function FormField({ fieldName, children, ...rest }: FieldProps) {
  return (
      <div className="flex flex-col gap-1" {...rest}>
        {Children.map(children, (child: ReactNode, index: number) => {
          if (isValidElement(child)) {
            return createElement(child.type, { ...child.props, fieldName, key: index })
          }

          return child
        })}
      </div>
  )
}