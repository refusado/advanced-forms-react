import { FormEvent } from "react";
import { Form } from "./components/Form";

export default function App() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    event.preventDefault();
  }

  return (
    <main className="flex flex-col justify-center items-center bg-slate-900 px-6 w-screen h-screen text-slate-200 overflow-hidden">
      <div className="relative z-10 after:-z-10 before:absolute after:absolute flex justify-center items-center before:bg-gradient-to-tr after:bg-gradient-conic before:from-transparent after:from-transparent before:to-teal-400/30 after:to-violet-500/30 before:opacity-40 after:opacity-40 after:blur-2xl before:blur-2xl before:rounded-full w-full before:w-[120%] max-w-sm before:aspect-video after:w-1/2 before:-translate-y-1/3 before:translate-x-1/4 after:aspect-square after:-rotate-90">

        <form onSubmit={onSubmit} className="relative flex flex-col gap-4 w-full">
          <Form.Field>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Input type="text" id="name" />
            <Form.ErrorMessage>Error test</Form.ErrorMessage>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Form.Input type="e-mail" id="email" />
            <Form.ErrorMessage>Error test</Form.ErrorMessage>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input type="password" id="password" />
            <Form.ErrorMessage>Error test</Form.ErrorMessage>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="confirmPassoword">Confirm password</Form.Label>
            <Form.Input type="password" id="confirmPassoword" />
            <Form.ErrorMessage>Error test</Form.ErrorMessage>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="animal">Animal</Form.Label>
            <Form.Selector id="animal">
              <option value="unicorn">Unicorn</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="hamster">Hamster</option>
            </Form.Selector>
            <Form.ErrorMessage>Error test</Form.ErrorMessage>
          </Form.Field>

          <Form.Field>
            <div className="flex flex-row gap-2">
              <Form.CustomCheckbox label="terms" />
              <label htmlFor="terms" className="select-none">
                I agree to the terms of use and privacy policy.
              </label>
            </div>
            <Form.ErrorMessage>Error test</Form.ErrorMessage>
          </Form.Field>
          
          <Form.Submit>
            Submit
          </Form.Submit>
        </form>
      </div>
    </main>
  )
}
