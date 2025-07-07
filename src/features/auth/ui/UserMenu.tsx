import { useAuthenticator } from '@aws-amplify/ui-react';
import { FaUserCircle, FaCaretDown, FaCaretUp, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function UserMenu() {
  const { user, signOut, authStatus } = useAuthenticator((context) => [context.user, context.authStatus]);
  const isAuthenticated = authStatus === 'authenticated';

  const handleAuthentication = () => {
    if (isAuthenticated) {
      signOut();
      return;
    }

    /* Redirect to login or registration page */
  }

  return (
    <div className="relative">
      <button className="dropdown-button cursor-pointer flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-darker hover:bg-dark">
        <FaUserCircle className="text-3xl text-lightest" />
        <span className="text-sm text-lightest">
          {isAuthenticated ? user?.username || 'User' : 'Guest'}
        </span>
        <FaCaretDown className="dropdown-closed text-md text-lightest" />
        <FaCaretUp className="dropdown-open hidden text-md text-lightest" />
      </button>
      <menu className="dropdown-menu absolute right-0 top-full flex-col gap-2 min-w-48 mt-4 p-2 rounded-md bg-darker shadow-md shadow-darkest">
        <li className="rounded hover:bg-darkest text-lightest hover:text-foreground">
          <button className="cursor-pointer flex items-center text-left w-full gap-4 p-2">
            <FaUser className="text-md" />
            <span className="text-sm">Account</span>
          </button>
        </li>
        <li className="rounded hover:bg-darkest text-lightest hover:text-foreground">
          <button className="cursor-pointer flex items-center text-left w-full gap-4 p-2">
            <FaCog className="text-md" />
            <span className="text-sm">Settings</span>
          </button>
        </li>
        <li className="rounded hover:bg-darkest text-lightest hover:text-foreground">
          <button 
            onClick={handleAuthentication} 
            className="cursor-pointer flex items-center text-left w-full gap-4 p-2"
          >
            <FaSignOutAlt className="text-md" />
            <span className="text-sm">
              {isAuthenticated ? 'Sign Out' : 'Register/Login'}
            </span>
          </button>
        </li>
      </menu>
    </div>
  );
}