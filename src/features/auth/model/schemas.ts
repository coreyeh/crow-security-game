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