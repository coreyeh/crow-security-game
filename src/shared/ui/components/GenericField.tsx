import { Field } from "@ark-ui/react";
import type { GenericFieldProps } from "@/shared/ui/types";

export const GenericField = ({ label, error, hidden, children, ...props }: GenericFieldProps) => {
  return (
    <Field.Root className="form:field" hidden={hidden}>
      <div className="flex items-center justify-between">
        {label && <Field.Label className="form:label">{label}</Field.Label>}  
        {children}
      </div>
      <Field.Input 
        {...props}
        className={`form:input ${error && 'outline-error'}`}
      />
      {error && <span className="text-sm text-error">{error}</span>}
    </Field.Root>
  );
}