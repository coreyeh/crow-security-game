
import type { FormHTMLAttributes, ReactNode } from "react";

export type AuthFormProps = {
  children: ReactNode;
  type: "login" | "register";
  hasOAuth: boolean;
} & FormHTMLAttributes<HTMLFormElement>;