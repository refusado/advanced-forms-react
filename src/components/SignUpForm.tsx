import { Form } from "./Form";
import { FormProvider, useForm } from "react-hook-form";
import { TSingUpSchema, singUpSchema } from "../types/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export function SignUpForm() {
  const [output, setOutput] = useState('');

  const formMethods = useForm<TSingUpSchema>({resolver: zodResolver(singUpSchema)});
  const { handleSubmit, reset, formState: { isSubmitting } } = formMethods;

  async function onSubmit(data: TSingUpSchema) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setOutput(JSON.stringify(data, null, 2));
    reset();
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-4 w-full">
        <h2 className="mb-2 text-4xl">Sign up</h2>

        <Form.Field>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Input type="text" name="name" />
          <Form.ErrorMessage field="name" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <Form.Input type="email" name="email" />
          <Form.ErrorMessage field="email" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Input type="password" name="password" />
          <Form.ErrorMessage field="password" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="confirmPassoword">Confirm password</Form.Label>
          <Form.Input type="password" name="confirmPassword" />
          <Form.ErrorMessage field="confirmPassword" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="animal">Favorite Animal</Form.Label>
          <Form.Selector name="animal">
            <option value="unicorn">Unicorn</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="hamster">Hamster</option>
          </Form.Selector>
          <Form.ErrorMessage field="animal" />
        </Form.Field>

        <Form.Field>
          <div className="flex flex-row gap-2">
            <Form.Checkbox name="terms" />
            <label htmlFor="terms" className="select-none">
              I agree to the terms of use and privacy policy.
            </label>
          </div>
          <Form.ErrorMessage field="terms" />
        </Form.Field>
        
        <Form.Submit disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Form.Submit>
      </form>

      {output && (
        <pre className="bg-slate-950/60 p-3 rounded-lg max-w-full font-mono overflow-x-auto">
          {output}
        </pre>
      )}
    </FormProvider>
  )
}