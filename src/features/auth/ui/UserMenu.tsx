import { useAuthenticator } from '@aws-amplify/ui-react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

export default function UserMenu() {
  const { user, /*signOut,*/ authStatus } = useAuthenticator((context) => [context.user, context.authStatus]);
  
  const userLabel = authStatus === 'authenticated' 
    ? user?.username
    : 'Guest';

  return (
    <>
      <button className="cursor-pointer flex items-center justify-center rounded-md bg-darker hover:bg-dark gap-2 py-2 px-4">
        <FaUserCircle className="text-3xl text-lightest" />
        <div className="flex items-center gap-1">
          <span className="text-sm text-lightest">{userLabel}</span>
          <FaCaretDown className="text-md text-lightest" />
        </div>
      </button>
    </>
  );
}