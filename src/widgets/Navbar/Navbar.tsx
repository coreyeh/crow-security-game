import UserMenu from '@/features/auth/ui/UserMenu';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 border-b border-dark">
      <header className="flex items-center gap-2">
        <img src="/brandmark.svg" alt="Brandmark" className="h-7 w-auto" />
        <img src="/logotype.svg" alt="Logotype" className="h-3 w-auto" />
      </header>
      <UserMenu />
    </nav>
  );
}