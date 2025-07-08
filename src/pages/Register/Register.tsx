import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Register() {
  return (
    <div className="grid place-items-center min-h-screen w-screen">
      <main className="flex flex-col gap-4 w-full max-w-lg p-4">
        <header className="flex items-center gap-2">
          <img src="/brandmark.svg" alt="Brandmark" className="h-7 w-auto" />
          <img src="/logotype.svg" alt="Logotype" className="h-3 w-auto" />
        </header>
        <form
          method="POST"
          className="flex flex-col gap-6 p-8 rounded-md bg-darker shadow-md shadow-darkest"
        >
          <h3 className="text-2xl text-lightest">Register</h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-lighter">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
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
                className="mb-4 p-2 text-foreground bg-dark focus:outline focus:outline-lighter"
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full p-2 rounded-sm bg-foreground text-background hover:bg-lightest disabled:bg-dark disabled:text-lighter disabled:cursor-auto transition-colors duration-100"
              disabled
            >
              Sign in
            </button>
            <div className="flex items-center">
              <hr className="flex-1 border-t border-light" />
              <span className="px-2 text-sm text-lighter">or</span>
              <hr className="flex-1 border-t border-light" />
            </div>
            <menu className="flex flex-col items-center gap-2">
              <button
                type="submit"
                className="cursor-pointer flex items-center justify-center gap-2 w-full p-2 rounded-sm border border-lighter hover:bg-light transition-colors duration-100"
              >
                <FaGoogle className="text-lg text-lightest" />
                <span className="">Continue with Google</span>
              </button>
              <button
                type="submit"
                className="cursor-pointer flex items-center justify-center gap-2 w-full p-2 rounded-sm border border-lighter hover:bg-light transition-colors duration-100"
              >
                <FaGithub className="text-lg text-lightest" />
                <span className="">Continue with Github</span>
              </button>
            </menu>
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-sm text-lighter">
                Aready have an account?
              </span>
              <Link
                to="/login"
                className="text-sm text-lightest hover:text-lightest hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
