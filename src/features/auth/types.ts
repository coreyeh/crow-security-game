import type z from 'zod';
import type { 
  loginSchema, 
  recoverRequestSchema, 
  recoverSubmitSchema,
  registerSchema, 
  verifySchema 
} from './model/auth-schemas';

export type AuthProvider = 'Google'

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type VerifySchema = z.infer<typeof verifySchema>;
export type RecoverRequestSchema = z.infer<typeof recoverRequestSchema>;
export type RecoverSubmitSchema = z.infer<typeof recoverSubmitSchema>;