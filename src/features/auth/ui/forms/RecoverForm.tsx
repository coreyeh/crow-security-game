import { FormHeader, FormWrapper } from "@/shared/ui/parts";
import { RecoverRequestForm, RecoverSubmitForm } from "@/features/auth/parts";

import { useState } from "react";

export const RecoverAccountForm = () => {
  const [inRequestState, setInRequestState] = useState(true);
  const [email, setEmail] = useState("");

  return (
    <FormWrapper>
      <FormHeader title="Recover your account" />
      {inRequestState 
        ? <RecoverRequestForm setInRequestState={setInRequestState} setEmail={setEmail} />
        : <RecoverSubmitForm email={email} />
      }
    </FormWrapper>
  );
}