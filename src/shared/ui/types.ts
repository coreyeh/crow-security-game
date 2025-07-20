import type { FieldInputProps } from "@ark-ui/react";

export type GenericFieldProps = React.PropsWithChildren<{
  label?: string;
  error?: string;
  hidden?: boolean;
  children?: React.ReactNode;
}> & FieldInputProps
