import { GenericField } from "@/shared/ui/parts";
import type { GenericFieldProps } from "@/shared/ui/types";

export const EmailField = ({ label, error, hidden, children, ...props }: Partial<GenericFieldProps>) => {
  return (
    <GenericField 
      type="text" 
      label={label}
      placeholder="johnpork@gmail.com" 
      error={error}
      hidden={hidden}
      {...props}
    >
      {children}
    </GenericField>
  );
}