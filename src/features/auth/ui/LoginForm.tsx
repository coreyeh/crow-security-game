import { 
  FormDivider,
  FormHeader, 
  FormWrapper, 
  GenericField,
  SubmitField,  
} from "@/shared/ui/parts";

import { 
  AuthLink,
  OAuthMenu,
  PasswordField,
} from "@/features/auth/parts";

import { toaster } from "@/widgets/toast/consts";
import { GenericToaster } from "@/widgets/toast/parts";
 
import type { LoginSchema } from "@/features/auth/types";
import { handleSignIn, loginSchema } from "@/features/auth/consts";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

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
          case "CONFIRM_SIGN_IN_WITH_EMAIL_CODE":
            navigate('/verify-email');
            break;
          case "DONE":
            navigate('/');
            break;
          default:
            throw new Error("Client out of sync with server");
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
        <GenericField 
          label="email" 
          error={errors.email?.message}
          type="text" 
          placeholder="johnpork@gmail.com" 
          {...register("email")}
        />
        <PasswordField 
          label="password"
          error={errors.password?.message}
          forgot 
          {...register("password")}
        />
        <SubmitField 
          label="Login"
          isSubmitting={isSubmitting}
        />
      </form>
      <FormDivider label="or" />
      <OAuthMenu providers={['google', 'github']} />
      <AuthLink 
        to="/register" 
        label="Don't have an account?" 
        call="Sign up" 
      /> 
      <GenericToaster />
    </FormWrapper>
  );
}