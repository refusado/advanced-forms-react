import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export function Form() {
  const [output, setOutput] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues
  } = useForm();

  async function onSubmit(data: FieldValues) {
    console.log(getValues('name')); 
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(data);
    setOutput(JSON.stringify(data, null, 2));
        
    reset();
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-4 max-w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          {...register('name', {
            required: 'Your name is required!'
          })}
          type="name"
          id="name"
          className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
        />
        {errors.name &&
          <span className="opacity-90 text-red-500/80 text-sm">{`${errors.name.message}`}</span>
        }
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          {...register('email', {
            required: 'E-mail required!',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
        />
        {errors.email &&
          <span className="opacity-90 text-red-500/80 text-sm">{`${errors.email.message}`}</span>
        }
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register('password', {
            required: 'Password required!',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters.'
            },

          })}
          className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
        />
        {errors.password &&
          <span className="opacity-90 text-red-500/80 text-sm">{`${errors.password.message}`}</span>
        }
      </div>
      
      <div className="flex flex-col gap-1">
        <label htmlFor="animal">Favorite animal</label>
        
        <select
          id="animal"
          {...register('animal', {
            validate: value =>
              value == 'cat' || `Your favorite animal must be cat, not ${value}!`
          })}
          className="border-slate-700 bg-slate-800 shadow-md px-2 border rounded h-10"
        >
          <option value="unicorn">Unicorn</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="hamster">Hamster</option>
        </select>

        {errors.animal &&
          <span className="opacity-90 text-red-500/80 text-sm">{`${errors.animal.message}`}</span>
        }
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-row">
          <input
            type="checkbox"
            id="terms"
            {...register('terms', {
              required: 'You need to accept the terms to submit' 
            })}
            tabIndex={-1}
            className="absolute opacity-0 w-6 h-6 cursor-pointer peer"
          />
          <label htmlFor="terms" className="after:flex after:justify-center peer-checked:after:content-['✓'] border-slate-700 bg-slate-800 peer-checked:bg-violet-600 p-0 border rounded w-6 h-6 after:h-6 font-bold cursor-pointer after" tabIndex={0}/>
          
          <label htmlFor="terms" className="px-1 select-none">I agree to the <a className="hover:text-slate-300 underline cursor-pointer">terms of use</a> and <a className="hover:text-slate-300 underline cursor-pointer">privacy policy</a>.</label>
        </div>

        {errors.terms &&
          <span className="opacity-90 text-red-500/80 text-sm">{`${errors.terms.message}`}</span>
        }
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-violet-600 enabled:hover:bg-violet-700 disabled:opacity-60 px-8 py-1 rounded h-10 font-semibold duration-150 cursor-pointer disabled:cursor-default self-end"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      <pre>{output}</pre>
    </form>
  );
}