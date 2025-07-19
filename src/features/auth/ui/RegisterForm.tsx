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

import type { RegisterSchema } from "@/features/auth/types";
import { registerSchema } from "@/features/auth/consts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<RegisterSchema>(
    { resolver: zodResolver(registerSchema) }
  );

  const onSubmit = async (data: RegisterSchema) => {
    console.table(data);
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
          {...register("password")}
        />
        <SubmitField
          label="register"
          isSubmitting={isSubmitting}
        />
      </form>
      <FormDivider label="or" />
      <OAuthMenu providers={['google', 'github']} />
      <AuthLink 
        to="/login" 
        label="Already have an account?" 
        call="Sign in" 
      /> 
    </FormWrapper>
  );
}