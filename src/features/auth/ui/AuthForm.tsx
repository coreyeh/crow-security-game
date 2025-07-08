import { Link } from "react-router-dom";
import { type AuthFormProps } from "@/features/auth/types/AuthFormProps";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function AuthForm({ children, type, hasOAuth, ...props } : AuthFormProps) {
  return (
    <form
      className="flex flex-col gap-6 p-8 rounded-md bg-darker shadow-md shadow-darkest"
      {...props}
      >
        <h3 className="text-2xl text-lightest">
          {type === 'register' ? 'Register' : 'Sign in'}
        </h3>
        <div className="flex flex-col gap-6">
          {children}
          <button
            type="submit"
            className="cursor-pointer w-full p-2 rounded-sm bg-foreground text-background hover:bg-lightest disabled:bg-dark disabled:text-lighter disabled:cursor-auto transition-colors duration-100"
          >
           {type === 'register' ? 'Register' : 'Sign in'}
          </button>
          {hasOAuth && (
            <>
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
            </>
          )}
          {type === 'register' ? (
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-sm text-lighter">
                Already have an account?
              </span>
              <Link
                to="/login"
                className="text-sm text-lightest hover:text-lightest hover:underline"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-sm text-lighter">
                Don't have an account?
              </span>
              <Link
                to="/register"
                className="text-sm text-lightest hover:text-lightest hover:underline"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </form>
  );
}