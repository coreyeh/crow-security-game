import { 
  signUp, 
  type SignUpOutput, 
  signIn, 
  type SignInOutput, 
  resetPassword, 
  type ResetPasswordOutput,
  confirmResetPassword,
  confirmSignUp,
  type ResendSignUpCodeOutput,
  resendSignUpCode,
  signInWithRedirect,
  type ConfirmSignUpOutput,
} from "aws-amplify/auth";

import type { 
  RegisterSchema, 
  LoginSchema, 
  RecoverRequestSchema, 
  RecoverSubmitSchema,
  VerifySchema,
  AuthProvider,
} from "@/features/auth/types";

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

export const handleResendSignUp = async (email: string): Promise<ResendSignUpCodeOutput> => {
  const result = resendSignUpCode({
    username: email,
  });
  return result;
}

export const handleSignIn = async (data: LoginSchema): Promise<SignInOutput> => {
  const result = signIn({
    username: data.email,
    password: data.password,
  })
  return result;
}

export const handleRecoverRequest = async (data: RecoverRequestSchema): Promise<ResetPasswordOutput> => {
  const result = resetPassword({
    username: data.email,
  });
  return result;
}

export const handleRecoverSubmit = async (data: RecoverRequestSchema & RecoverSubmitSchema) => {
  confirmResetPassword({
    username: data.email,
    confirmationCode: data.code,
    newPassword: data.password,
  })
}

export const handleVerifyEmail = async (data: VerifySchema): Promise<ConfirmSignUpOutput> => {
  const result = confirmSignUp({
    username: data.email,
    confirmationCode: data.code
  });
  return result;
}

export const handleOAuthSignIn = async (provider: AuthProvider) => {
  signInWithRedirect({ provider: provider });
}
