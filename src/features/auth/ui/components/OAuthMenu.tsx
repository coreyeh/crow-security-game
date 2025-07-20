import { authProviders } from "@/features/auth/consts";

export const OAuthMenu = () => {
  return (
    <menu className="space-y-4">
      {authProviders.map((provider) => (
        <button 
          key={provider.id} 
          type="submit" 
          onClick={provider.onClick}
          className="form:oauth"
        >
          {provider.icon}
          {provider.label}
        </button>
      ))}
    </menu>
  );
}