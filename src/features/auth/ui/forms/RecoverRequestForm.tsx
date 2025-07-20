import { SubmitField } from "@/shared/ui/parts";
import { EmailField } from "@/features/auth/parts";

import { recoverRequestSchema, handleRecoverRequest } from "@/features/auth/consts";
import type { RecoverRequestSchema, } from "@/features/auth/types";

import { toaster } from "@/widgets/toast/consts";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type RecoverRequestFormProps = {
  setInRequestState: (value: boolean) => void;
  setEmail: (value: string) => void;
};

export const RecoverRequestForm = ({ setInRequestState, setEmail }: RecoverRequestFormProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RecoverRequestSchema>({ 
    resolver: zodResolver(recoverRequestSchema) 
  });

  const onSubmit = async (data: RecoverRequestSchema) => {
    handleRecoverRequest(data)
      .then(result => {
        const nextStep = result.nextStep.resetPasswordStep;
        switch (nextStep) {
          case "CONFIRM_RESET_PASSWORD_WITH_CODE":
            setInRequestState(false);
            setEmail(data.email);

            toaster.info({
              title: 'Reset Password',
              description: `A recovery code has been sent to your email`,
              type: 'info',
            });
            break;
          default:
            throw new Error("Client and server out of sync");
        }
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
        {...register("email")}
      />
      <SubmitField
        label="send code"
        isSubmitting={isSubmitting}
      />
    </form>
  );
}