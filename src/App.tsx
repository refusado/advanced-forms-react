import { FormEvent } from "react";

export default function App() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <main className="flex flex-col justify-center items-center bg-slate-900 px-6 w-screen h-screen text-slate-200 overflow-hidden">

      <div className="relative after:-z-10 before:absolute after:absolute flex justify-center items-center before:bg-gradient-to-tr before: z-10 before:from-transparent before:to-teal-400/40 before:opacity-40 after:opacity-40 before:blur-2xl before:rounded-full before:w-[120%] before:aspect-video after:w-1/2 before:-translate-y-1/3 before:translate-x-1/4 after:aspect-square after:bg-gradient-conic after:from-transparent after:to-violet-500/50 after:-rotate-90 after:blur-2xl">
        <form onSubmit={onSubmit} className="relative flex flex-col gap-4 max-w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <input className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10" type="email" id="email" />
            <span className="opacity-90 text-sm"></span>
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10" type="password" id="password" />
            <span className="opacity-90 text-sm"></span>
          </div>

          <div className="flex flex-row gap-1">
            <input type="checkbox" id="terms" className="absolute opacity-0 w-0 peer" tabIndex={-1} required/>
            <label htmlFor="terms" className="after:flex after:justify-center peer-checked:after:content-['✓'] border-slate-700 bg-slate-800 peer-checked:bg-violet-600 p-0 border rounded w-6 h-6 after:h-6 font-bold cursor-pointer after" tabIndex={0}/>
            <label htmlFor="terms" className="px-1 w-full select-none">I agree to the <a className="hover:text-slate-300 underline cursor-pointer">terms of use</a> and <a className="hover:text-slate-300 underline cursor-pointer">privacy policy</a>.</label>
          </div>

          <button type="submit" className="bg-violet-600 hover:bg-violet-700 px-8 py-1 rounded h-10 font-semibold duration-150 cursor-pointer self-end">Submit</button>
        </form>
      </div>
    </main>
  )
}
