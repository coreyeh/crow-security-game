import { SubmitField } from "@/shared/ui/parts";

import type { RecoverSubmitSchema, } from "@/features/auth/types";
import { recoverSubmitSchema, handleRecoverSubmit, handleRecoverRequest } from "@/features/auth/consts";
import { CodeField, EmailField, PasswordField } from "@/features/auth/parts";

import { toaster } from "@/widgets/toast/consts";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const RecoverSubmitForm = ({ email }: { email: string }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RecoverSubmitSchema>({ 
    resolver: zodResolver(recoverSubmitSchema) 
  });

  const onResend = async () => {
    handleRecoverRequest({ email }) 
      .then(() => {
        toaster.info({
          title: 'Reset Password',
          description: "A new confirmation code has been sent",
          type: 'info',
        });
      })
      .catch(error => {
        toaster.error({
          title: 'Reset Password',
          description: error instanceof Error ? error.message : error ?? 'Something went wrong',
          type: 'error',
        });
      });
  }

  const onSubmit = async (data: RecoverSubmitSchema) => {
    handleRecoverSubmit(data)
      .then(() => {
        toaster.success({
          title: 'Reset Password',
          description: 'Your password has been updated',
          type: 'success',
        });
        navigate('/login');
      })
      .catch(error => {
        toaster.error({
          title: 'Reset Password',
          description: error instanceof Error ? error.message : error ?? 'Something went wrong',
          type: 'error',
        });
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form:authform">
        <EmailField 
          label="email"
          error={errors.email?.message}
          defaultValue={email}
          hidden={true}
          {...register("email")}
        />
        <CodeField
          label="confirmation code"
          error={errors.code?.message}
          {...register("code")}
        >
          <button 
            type="button"
            onClick={onResend}
            className="form:action"
          >
            Resend Code
          </button>
        </CodeField>
        <PasswordField
          label="new password"
          error={errors.password?.message}
          {...register("password")}
        />
        <SubmitField 
          label="update password"
          isSubmitting={isSubmitting}
        />
    </form>
  );
}