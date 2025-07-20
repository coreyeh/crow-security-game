import { toaster } from "@/widgets/toast/consts";
import { handleOAuthSignIn } from "../api/auth-handlers";

import type { JSX } from "react";
import { FaAmazon, FaGoogle } from "react-icons/fa6";

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
    onClick: async () => {
      handleOAuthSignIn("Google")
        .catch(error => {
          toaster.error({
            title: "Google Authentication",
            description: error instanceof Error ? error.message : error ?? "Something went wrong",
            type: "error",
          });
        });
    }
  },
  {
    id: "Amazon",
    icon: <FaAmazon aria-label="Amazon" className="text-lg text-lightest" />,
    label: "Continue with Amazon",
    onClick: async () => { 
      handleOAuthSignIn("Amazon")
        .catch(error => {
          toaster.error({
            title: "Google Authentication",
            description: error instanceof Error ? error.message : error ?? "Something went wrong",
            type: "error",
          });
        });
    }
  },
];