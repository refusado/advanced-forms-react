import { Metadata } from "next";
import { ReactNode } from "react";
import './index.css'

export const metadata: Metadata = {
  title: 'Advanced React Forms',
  description: 'Demonstration project using advanced forms in React with Typescript, Zod and React hook form.'
}

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
}