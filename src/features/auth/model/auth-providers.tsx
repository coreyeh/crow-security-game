import type { JSX } from "react";
import { FaGoogle } from "react-icons/fa6";
import { handleOAuthSignIn } from "../api/auth-handlers";

type AuthProviderInterface = {
  id: string;
  icon: JSX.Element;
  label: string;
  onClick: () => void
};

export const authProviders: AuthProviderInterface[] = [
  {
    id: "Google",
    icon: <FaGoogle aria-label="Google" className="text-lg text-lightest" />,
    label: "Continue with Google",
    onClick: async () => handleOAuthSignIn("Google"),
  },
];