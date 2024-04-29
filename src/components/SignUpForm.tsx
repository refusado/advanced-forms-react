'use client';

import { Form } from "./Form";
import { FormProvider, useForm } from "react-hook-form";
import { TSingUpSchema, blankSingUpSchema, singUpSchema } from "../types/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export function SignUpForm() {
  const [output, setOutput] = useState('');
  const [serverFailed, setServerFailed] = useState(false);
  const [enableServerTest, setEnableServerTest] = useState(true);

  const formMethods = useForm<TSingUpSchema>({
    resolver: zodResolver(enableServerTest ? singUpSchema : blankSingUpSchema)
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = formMethods;

  async function onSubmit(formData: TSingUpSchema) {
    setServerFailed(false);

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setOutput(JSON.stringify(formData, null, 2));
      reset();
      alert('Success!');
      return;
    }

    setServerFailed(true);
    console.error('Submitting form failed');
    const responseData = await response.json();
    console.error('Form errors: ', responseData.errors);
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-4 w-full">
        <h2 className="mb-2 text-4xl">Sign up</h2>

        <div 
          className="flex items-baseline gap-2 cursor-pointer"
          onClick={() => { setEnableServerTest(prev => !prev); setServerFailed(false) }}>
          <span className={`block rounded-full size-2 ${enableServerTest ? 'bg-red-500' : 'bg-green-500'}`}></span>
          <span className="text-sm select-none">disable client-side verification [testing purpose]</span>
        </div>

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
        
        <Form.Submit disabled={isSubmitting} className="bg-emerald-700">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Form.Submit>

        {serverFailed && (
          <>
            <p className="bg-red-800/30 px-2.5 py-1.5 border border-red-500/60 rounded">
              An error occurred on the server, reload the page and try again. If the error persists, come back later.
            </p>
            <p className="ml-auto text-sm">(watch logs)</p>
          </>
        )}
      </form>

      {output && (
        <pre className="bg-slate-950/60 p-3 rounded-lg max-w-full font-mono overflow-x-auto">
          {output}
        </pre>
      )}
    </FormProvider>
  )
}