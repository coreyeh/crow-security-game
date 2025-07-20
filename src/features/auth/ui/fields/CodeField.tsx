import { GenericField } from "@/shared/ui/parts";
import type { GenericFieldProps } from "@/shared/ui/types";

export const CodeField = ({ label, error, hidden, children, ...props }: Partial<GenericFieldProps>) => {
  return (
    <GenericField 
      type="number" 
      label={label}
      inputMode="numeric"
      placeholder="123456" 
      error={error}
      hidden={hidden}
      {...props}
    >
      {children}
    </GenericField>
  );
}