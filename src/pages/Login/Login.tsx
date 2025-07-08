import BrandHeader from "@/shared/ui/BrandHeader";
import AuthForm from "@/features/auth/ui/AuthForm";
import useLogin from "@/features/auth/model/useLogin";

export default function Login() {
  const { setIdentifier, password, setPassword, login } = useLogin();

  return (
    <div className="grid place-items-center h-screen w-screen">
      <main className="flex flex-col gap-4 w-full max-w-lg p-4">
        <BrandHeader />
        <AuthForm 
          type="login" 
          onSubmit={(e) => login(e)}
          hasOAuth={true}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="identifier" className="text-sm text-lighter">
              Username/Email
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              onChange={(e) => setIdentifier(e.target.value)}
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
          <a
            href="/recovery"
            className="text-sm text-lighter hover:text-lightest hover:underline"
          >
            Forgot your password?
          </a>
        </AuthForm>
      </main>
    </div>
  );
}
