import { Field } from "@ark-ui/react";
import type { GenericFieldProps } from "@/shared/ui/types";

export const GenericField = ({ label, error, ...props }: GenericFieldProps) => {
  return (
    <Field.Root className="form:field">
      {label && <Field.Label className="form:label">{label}</Field.Label>}
      <Field.Input 
        {...props}
        className={`form:input ${error && 'outline-error'}`}
      />
      {error && <span className="text-sm text-error">{error}</span>}
    </Field.Root>
  );
}