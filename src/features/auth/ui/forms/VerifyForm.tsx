import { 
  FormHeader, 
  FormWrapper,  
  SubmitField,
} from "@/shared/ui/parts";

import { toaster } from "@/widgets/toast/consts";

import type { VerifySchema } from "@/features/auth/types";
import { handleResendSignUp, handleVerifyEmail, verifySchema } from "@/features/auth/consts";
import { CodeField, EmailField } from "@/features/auth/parts";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";

export const VerifyEmailForm = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state?.email ?? localStorage.getItem("auth:pending_email");

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<VerifySchema>(
    { resolver: zodResolver(verifySchema) }
  );

  const onResend = async () => {
    handleResendSignUp(email)
      .then(() => {
        toaster.info({
          title: 'Verify Account',
          description: "A new confirmation code has been sent",
          type: 'info',
        });
      })
      .catch(error => {
        toaster.error({
          title: 'Verify Account',
          description: error instanceof Error ? error.message : error ?? 'Something went wrong',
          type: 'error',
        });
      });
  }

  const onSubmit = async (data: VerifySchema) => {
    handleVerifyEmail(data)
      .then(result => {
        const nextStep = result.nextStep.signUpStep;
        switch (nextStep) {
          case "COMPLETE_AUTO_SIGN_IN":
            toaster.success({
              title: 'Verify Account',
              description: 'Successfully logged in to your account',
              type: 'success',
            });
            navigate('/');
            break;
          case "DONE":
            toaster.success({
              title: 'Verify Account',
              description: 'Account successfully verified, you may now login',
              type: 'success',
            });
            navigate('/login');
            break;
          default:
            throw new Error("Client and server out of sync");
        }
      })
      .catch(error => {
        toaster.error({
          title: 'Verify Account',
          description: error instanceof Error ? error.message : error ?? 'Something went wrong',
          type: 'error',
        });
      });
  }

  return (
    <FormWrapper>
      <FormHeader title="Verify your account" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <EmailField 
          label="email"
          error={errors.email?.message}
          defaultValue={email}
          hidden={true}
          {...register("email")}
        />
        <CodeField
          label="verification code"
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
        <SubmitField 
          label="verify account"
          isSubmitting={isSubmitting}
        />
      </form>
    </FormWrapper>
  );
}