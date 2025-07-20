import { useAuthenticator } from "@aws-amplify/ui-react";

export const Home = () => {
  const { user, signOut} = useAuthenticator();

  return (
    <div className="grid place-items-center text-center h-full">
      <main className="flex flex-col gap-2">
        <span className="text-lighter">Hello {user?.username}</span>
        <button 
          onClick={signOut}
          className="p-2 rounded-md"
        >
          Sign Out
        </button>
      </main>
    </div>
  );
}