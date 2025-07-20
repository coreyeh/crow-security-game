import { 
  FormDivider,
  FormHeader, 
  FormWrapper, 
  SubmitField,  
} from "@/shared/ui/parts";

import { 
  AuthLink,
  EmailField,
  OAuthMenu,
  PasswordField,
} from "@/features/auth/parts";

import { toaster } from "@/widgets/toast/consts";
 
import type { LoginSchema } from "@/features/auth/types";
import { handleSignIn, loginSchema } from "@/features/auth/consts";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<LoginSchema>(
    { resolver: zodResolver(loginSchema) }
  );

  const onSubmit = async (data: LoginSchema) => {
    handleSignIn(data)
      .then(result => {
        const nextStep = result.nextStep.signInStep;
        switch (nextStep) {
          case "CONFIRM_SIGN_UP":
            localStorage.setItem('auth:pending_email', data.email);
            navigate('/verify-email', { state: { email: data.email } });
            break;
          case "DONE":
            navigate('/');
            break;
          default:
            throw new Error("Client and server out of sync");
        }
      })
      .catch(error => {
        toaster.error({
          title: 'Sign In',
          description: error instanceof Error ? error.message : error ?? 'Something went wrong',
        });
      });
  }

  return (
    <FormWrapper>
      <FormHeader title="Sign in to Grey Layer" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <EmailField 
          label="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <PasswordField 
          label="password"
          error={errors.password?.message} 
          {...register("password")}
        >
          <Link 
            to="/recover-account" 
            className="text-sm text-light hover:underline"
          >
            Forgot your password?
          </Link>
        </PasswordField>
        <SubmitField 
          label="Login"
          isSubmitting={isSubmitting}
        />
      </form>
      <FormDivider label="or" />
      <OAuthMenu />
      <AuthLink 
        to="/register" 
        label="Don't have an account?" 
        call="Sign up" 
      /> 
    </FormWrapper>
  );
}