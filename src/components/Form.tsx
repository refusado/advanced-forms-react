import { useState } from "react";
import { useForm } from "react-hook-form";

export function Form() {
  const [output, setOutput] = useState('');
  const { register, handleSubmit } = useForm();
  
  function onSubmit(data: unknown): void {
    setOutput(JSON.stringify(data, null, 2));
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col max-w-full gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="name" id="name" {...register('name')}
          className="h-10 px-2 border rounded shadow-md border-slate-700 bg-slate-800"
        />
        <span className="text-sm opacity-90"></span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">E-mail</label>
        <input
          type="email" id="email" {...register('email')}
          className="h-10 px-2 border rounded shadow-md border-slate-700 bg-slate-800"
        />
        <span className="text-sm opacity-90"></span>
      </div>
      
      <div className="flex flex-col gap-1">
        <label htmlFor="animal">Favorite animal</label>
        
        <select
          id="animal" {...register('animal')}
          className="h-10 px-2 border rounded shadow-md border-slate-700 bg-slate-800"
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="hamster">Hamster</option>
          <option value="unicorn">Unicorn</option>
        </select>

        <span className="text-sm opacity-90"></span>
      </div>

      <div className="flex flex-row gap-1">
        <input
          type="checkbox" id="terms" {...register('terms')}
          tabIndex={-1}
          className="absolute w-6 h-6 opacity-0 cursor-pointer peer"
        />
        <label htmlFor="terms" className="after:flex after:justify-center peer-checked:after:content-['✓'] border-slate-700 bg-slate-800 peer-checked:bg-violet-600 p-0 border rounded w-6 h-6 after:h-6 font-bold cursor-pointer after" tabIndex={0}/>
        
        <label htmlFor="terms" className="w-full px-1 select-none">I agree to the <a className="underline cursor-pointer hover:text-slate-300">terms of use</a> and <a className="underline cursor-pointer hover:text-slate-300">privacy policy</a>.</label>
      </div>

      <button type="submit" className="self-end h-10 px-8 py-1 font-semibold duration-150 rounded cursor-pointer bg-violet-600 hover:bg-violet-700">Submit</button>

      <pre>{output}</pre>
    </form>
  );
}