import { SignUpForm } from '../components/SignUpForm'

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center bg-slate-900 px-6 w-screen h-screen text-slate-200 overflow-hidden">
      <div className="relative z-10 after:-z-10 before:absolute after:absolute flex flex-col justify-center items-center gap-4 before:bg-gradient-to-tr after:bg-gradient-conic before:from-transparent after:from-transparent before:to-teal-400/30 after:to-violet-500/30 before:opacity-40 after:opacity-40 after:blur-2xl before:blur-2xl before:rounded-full w-full before:w-[120%] max-w-sm before:aspect-video after:w-1/2 before:-translate-y-1/3 before:translate-x-1/4 after:aspect-square after:-rotate-90">
        <SignUpForm />
      </div>
    </main>
  )
}