import { PasswordInput } from "@ark-ui/react";
import type { GenericFieldProps } from "@/shared/ui/types";

import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

type PasswordFieldProps = {
  forgot?: boolean;
} & GenericFieldProps;

export const PasswordField = ({ label, error, forgot=false, ...props }: PasswordFieldProps) => {
  return (
    <PasswordInput.Root className="form:field"> 
      <div className="flex items-center justify-between">
        {label && <PasswordInput.Label className="form:label">{label}</PasswordInput.Label>}
        {forgot && <Link to="/recover" className="text-sm text-light hover:underline">Forgot your password?</Link>}
      </div>
      <PasswordInput.Control className="relative flex items-center w-full text-light">
        <PasswordInput.Input  
          {...props}
          placeholder="••••••••"
          className={`form:input pr-12 ${error && 'outline-error'}`}
        />
        <PasswordInput.VisibilityTrigger tabIndex={0} className="absolute right-0 mr-4 cursor-pointer">
          <PasswordInput.Indicator fallback={<FaEyeSlash />}>
            <FaEye />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
      {error && <span className="text-sm text-error">{error}</span>}
    </PasswordInput.Root>
  );
}