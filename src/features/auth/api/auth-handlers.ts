import { signUp, signIn, type SignUpOutput, type SignInOutput } from "aws-amplify/auth";
import type { RegisterSchema, LoginSchema } from "@/features/auth/types";

export const handleSignUp = async (data: RegisterSchema): Promise<SignUpOutput> => {
  const result = signUp({
    username: data.email,
    password: data.password,
    options: {
      userAttributes: {
        email: data.email,
        preferred_username: data.username,
      },
    },
  })
  return result;
}

export const handleSignIn = async (data: LoginSchema): Promise<SignInOutput> => {
  const result = signIn({
    username: data.email,
    password: data.password,
  })
  return result;
}