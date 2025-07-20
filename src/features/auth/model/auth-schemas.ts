import { schemaAttributes } from '@/features/auth/consts';

export const registerSchema = schemaAttributes.pick({
  username: true,
  email: true,
  password: true,
});

export const loginSchema  = schemaAttributes.pick({
  email: true,
  password: true,
});

export const verifySchema = schemaAttributes.pick({
  email: true,
  code: true,
});

export const recoverRequestSchema = schemaAttributes.pick({
  email: true,
});

export const recoverSubmitSchema = schemaAttributes.pick({
  email: true,
  code: true,
  password: true,
})