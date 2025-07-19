import type z from 'zod';
import type { loginSchema, registerSchema } from './model/schemas';


export type Provider = "google" | "github";

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;