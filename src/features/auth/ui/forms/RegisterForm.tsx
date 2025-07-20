import { 
  FormDivider,
  FormHeader, 
  FormWrapper, 
  GenericField,
  SubmitField,  
} from "@/shared/ui/parts";

import { 
  AuthLink,
  EmailField,
  OAuthMenu,
  PasswordField,
} from "@/features/auth/parts";

import { toaster } from "@/widgets/toast/consts";

import type { RegisterSchema } from "@/features/auth/types";
import { handleSignUp, registerSchema } from "@/features/auth/consts";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<RegisterSchema>(
    { resolver: zodResolver(registerSchema) }
  );

  const onSubmit = async (data: RegisterSchema) => {
    handleSignUp(data)
      .then(result => {
        const nextStep = result.nextStep.signUpStep;
        switch (nextStep) {
          case "CONFIRM_SIGN_UP":
            localStorage.setItem('auth:pending_email', data.email)
            navigate('/verify-email', { state: { email: data.email } });
            break;
          default:
            throw new Error("Client and server out of sync");
        }
      })
      .catch(error => {
        toaster.error({
          title: 'Sign Up',
          description: error instanceof Error ? error.message : error ?? 'Something went wrong',
          type: 'error',
        });
      });
  }

  return (
    <FormWrapper>
      <FormHeader title="Sign up with Grey Layer" />
      <form onSubmit={handleSubmit(onSubmit)} className="form:authform">
        <GenericField 
          label="username"
          error={errors.username?.message}
          type="text" 
          placeholder="JohnPork" 
          {...register("username")}
        />
        <EmailField 
          label="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <PasswordField 
          label="password" 
          error={errors.password?.message}
          {...register("password")}
        />
        <SubmitField
          label="register"
          isSubmitting={isSubmitting}
        />
      </form>
      <FormDivider label="or" />
      <OAuthMenu />
      <AuthLink 
        to="/login" 
        label="Already have an account?" 
        call="Sign in" 
      /> 
    </FormWrapper>
  );
}