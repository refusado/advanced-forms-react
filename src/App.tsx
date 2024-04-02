import { Form } from "./components/Form";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen px-6 overflow-hidden bg-slate-900 text-slate-200">
      <div className="relative after:-z-10 before:absolute after:absolute flex justify-center items-center before:bg-gradient-to-tr before: z-10 before:from-transparent before:to-teal-400/30 before:opacity-40 after:opacity-40 before:blur-2xl before:rounded-full before:w-[120%] before:aspect-video after:w-1/2 before:-translate-y-1/3 before:translate-x-1/4 after:aspect-square after:bg-gradient-conic after:from-transparent after:to-violet-500/30 after:-rotate-90 after:blur-2xl">
        <Form />
      </div>
    </main>
  )
}
