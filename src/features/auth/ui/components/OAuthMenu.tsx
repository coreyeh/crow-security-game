import { oAuthProviders } from "@/features/auth/consts";
import type { Provider } from "@/features/auth/types";

type Providers = {
  providers: Provider[]
};

export const OAuthMenu = ({ providers }: Providers) => {
  return (
    <menu className="space-y-4">
      {providers.map((provider) => {
        const { label, icon } = oAuthProviders[provider];
        return (
          <button 
            key={provider} 
            type="submit" 
            className="form:oauth"
          >
            {icon}
            {label}
          </button>
        );
      })}
    </menu>
  );
}