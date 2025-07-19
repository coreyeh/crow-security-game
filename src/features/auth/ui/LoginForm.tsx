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

import type { LoginSchema } from "@/features/auth/types";
import { loginSchema } from "@/features/auth/consts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<LoginSchema>(
    { resolver: zodResolver(loginSchema) }
  );

  const onSubmit = async (data: LoginSchema) => {
    console.table(data);
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
    </FormWrapper>
  );
}