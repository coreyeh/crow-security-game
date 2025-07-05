import UserMenu from '@/features/auth/ui/UserMenu';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-dark p-2">
      <header className="flex items-center gap-2">
        <img src="/brandmark.svg" alt="Brandmark" className="h-7 w-auto" />
        <img src="/logotype.svg" alt="Logotype" className="h-3 w-auto" />
      </header>
      <UserMenu />
    </nav>
  );
}