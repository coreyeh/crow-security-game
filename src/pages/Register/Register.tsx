import BrandHeader from "@/shared/ui/BrandHeader";
import AuthForm from "@/features/auth/ui/AuthForm";
import useRegister from "@/features/auth/model/useRegister";

export default function Register() {
  const { setEmail, password, setPassword, confirm, setConfirm, register } = useRegister();
  
  return (
    <div className="grid place-items-center min-h-screen w-screen">
      <main className="flex flex-col gap-4 w-full max-w-lg p-4">
        <BrandHeader />
        <AuthForm 
          type="register" 
          onSubmit={(e) => register(e)}
          hasOAuth={true}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-lighter">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-foreground bg-dark focus:outline focus:outline-lighter"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-lighter">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 text-foreground bg-dark focus:outline focus:outline-lighter"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm" className="text-sm text-lighter">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
              className="mb-4 p-2 text-foreground bg-dark focus:outline focus:outline-lighter"
              required
            />
          </div>
        </AuthForm>
      </main>
    </div>
  );
}
