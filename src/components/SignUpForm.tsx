import { Form } from "./Form";
import { FormProvider, useForm } from "react-hook-form";
import { TSingUpSchema, singUpSchema } from "../types/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export function SignUpForm() {
  const [output, setOutput] = useState('');

  const formMethods = useForm<TSingUpSchema>({
    resolver: zodResolver(singUpSchema)
  });
  const { handleSubmit, reset, formState: { errors, isSubmitting } } = formMethods;

  async function onSubmit(data: TSingUpSchema) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data.birthday.toLocaleString());
    setOutput(JSON.stringify(data, null, 2));
    reset();
  }

  function test() {
    console.log(errors);
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-4 w-full">
        <h2 className="mb-2 text-4xl">Sign up</h2>

        <Form.Field fieldName="name">
          <Form.Label>Name</Form.Label>
          <Form.Input type="text" />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field fieldName="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Input type="email" />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field fieldName="birthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Input type="date" className="max-w-60" />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field fieldName="password">
          <Form.Label>Password</Form.Label>
          <Form.Input type="password" />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field fieldName="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Input type="password" />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field fieldName="animal">
          <Form.Label>Favorite Animal</Form.Label>
          <Form.Selector
            options={[
              {name: 'unicorn', label: 'Unicorn'},
              {name: 'cat', label: 'Cat'},
              {name: 'dog', label: 'Dog'},
              {name: 'hamster', label: 'Hamster'}
            ]}
          />
          <Form.ErrorMessage />
        </Form.Field>

        <Form.Field fieldName="terms" className="flex-row flex-wrap gap-2">
          <Form.Checkbox className="peer-checked:bg-emerald-700" />
          <Form.Label className="flex-1">
            I agree to the terms of use and privacy policy.
          </Form.Label>
          <Form.ErrorMessage className="w-full" />
        </Form.Field>
        
        <Form.Submit onClick={test} disabled={isSubmitting} className="bg-emerald-700">
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