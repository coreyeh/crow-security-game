import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function useAuth() {
  const navigate = useNavigate();
  const {user, signOut, authStatus} = useAuthenticator((context) => [context.user, context.authStatus]);

  const isAuthenticated = authStatus === "authenticated";

  const handleAuthentication = () => {
    if (isAuthenticated) {
      signOut();
      return;
    }
    navigate("/login");
  };

  return {
    user,
    isAuthenticated,
    handleAuthentication,
  }
}


