import { FormEvent, useState } from "react";
import { Form } from "./Form";

export function SignUpForm() {
  const [isSubmitting, setIssubmitting] = useState<boolean>(false);
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIssubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIssubmitting(false);
  }

  return (
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
          <Form.Checkbox label="terms" />
          <label htmlFor="terms" className="select-none">
            I agree to the terms of use and privacy policy.
          </label>
        </div>
        <Form.ErrorMessage>Error test</Form.ErrorMessage>
      </Form.Field>
      
      <Form.Submit disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Form.Submit>
    </form>
  )
}