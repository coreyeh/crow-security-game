import { FaUserCircle } from 'react-icons/fa';
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-dark p-2">
      <header className="flex items-center gap-2">
        <img src="/brandmark.svg" alt="Brandmark" className="h-7 w-auto" />
        <img src="/logotype.svg" alt="Logotype" className="h-3 w-auto" />
      </header>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer flex items-center justify-center rounded-md bg-darker hover:bg-dark gap-2 py-2 px-4">
          <FaUserCircle className="text-3xl text-lightest" />
          <div className="flex items-center gap-1">
            <span className="text-sm text-lightest">zrezerzezer</span>
            <FaCaretDown className="text-md text-lightest" />
          </div>
        </button>
      </div>
    </nav>
  );
}