import BrandHeader from '@/shared/ui/BrandHeader';
import UserMenu from '@/features/auth/ui/UserMenu';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 border-b border-dark">
      <BrandHeader />
      <UserMenu />
    </nav>
  );
}