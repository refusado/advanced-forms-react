import { z } from "zod";

const birthdayErrorMap: { errorMap: z.ZodErrorMap } = {
  errorMap: () => {
    return { message: 'Invalid birthday date' }
  }
}
const yearsAgo18 = new Date(new Date().getTime() - 568025136000);

export const singUpSchema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().email('Invalid email address'),
  birthday: z.coerce.date(birthdayErrorMap).max(yearsAgo18, { message: 'You must be at least 18 years old' }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  animal: z.string().refine(value => value == 'cat', 'Your favorite animal must be cat'),
  terms: z.boolean().refine(value => value === true, 'You must accept the terms and privacy policy')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword']
});

export type TSingUpSchema = z.infer<typeof singUpSchema>;