import { z } from "zod";

export const singUpSchema = z.object({
  name: z.string().min(1, 'Your name is required.'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  confirmPassword: z.string(),
  animal: z.string().refine(value => value == 'cat', 'Your favorite animal must be cat'),
  terms: z.boolean().refine(value => value === true, 'You need to accept the terms to submit')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword']
});

export type TSingUpSchema = z.infer<typeof singUpSchema>;