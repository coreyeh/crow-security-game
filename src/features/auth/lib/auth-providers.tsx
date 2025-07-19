import type { JSX } from "react";
import type { Provider } from '@/features/auth/types';

import { FaGithub, FaGoogle } from "react-icons/fa6";

export const oAuthProviders: Record<Provider, { label: string; icon: JSX.Element }> = {
  google: {
    label: "Continue with Google",
    icon: <FaGoogle aria-label="Google" className="text-lg text-lightest" />,
  },
  github: {
    label: "Continue with GitHub",
    icon: <FaGithub aria-label="GitHub" className="text-lg text-lightest" />,
  },
};