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
          <Form.Label fieldName="name">Name</Form.Label>
          <Form.Input type="text" fieldName="name" />
          <Form.ErrorMessage fieldName="name" />
        </Form.Field>

        <Form.Field>
          <Form.Label fieldName="email">E-mail</Form.Label>
          <Form.Input type="email" fieldName="email" />
          <Form.ErrorMessage fieldName="email" />
        </Form.Field>

        <Form.Field>
          <Form.Label fieldName="password">Password</Form.Label>
          <Form.Input type="password" fieldName="password" />
          <Form.ErrorMessage fieldName="password" />
        </Form.Field>

        <Form.Field>
          <Form.Label fieldName="confirmPassoword">Confirm password</Form.Label>
          <Form.Input type="password" fieldName="confirmPassword" />
          <Form.ErrorMessage fieldName="confirmPassword" />
        </Form.Field>

        <Form.Field>
          <Form.Label fieldName="animal">Favorite Animal</Form.Label>
          <Form.Selector
            fieldName="animal" 
            options={[
              {name: 'unicorn', label: 'Unicorn'},
              {name: 'cat', label: 'Cat'},
              {name: 'dog', label: 'Dog'},
              {name: 'hamster', label: 'Hamster'}
            ]}
          />
          <Form.ErrorMessage fieldName="animal" />
        </Form.Field>

        <Form.Field className="flex flex-row flex-wrap gap-2">
          <Form.Checkbox fieldName="terms" />
          <Form.Label fieldName="terms">
            I agree to the terms of use and privacy policy.
          </Form.Label>
          <Form.ErrorMessage fieldName="terms" />
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