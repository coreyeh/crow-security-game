import { Field, PasswordInput } from "@ark-ui/react"
import { FaArrowRightLong, FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa6'
import { Link } from "react-router-dom"

export const Register = () => {
  return (
    <div className="grid place-items-center h-full">
      <main className="space-y-6 max-w-80 w-full">
        <header className="flex flex-col items-center gap-4">
          <Link to="/" className="hover:opacity-70">
            <img src="/brandmark.svg" alt="Brandmark" className="w-12 h-auto" /> 
          </Link>
          <h3 className="font-header text-2xl">Sign up with Grey Layer</h3>
        </header>
        <form className="space-y-6">
          <Field.Root className="flex flex-col gap-2 w-full">
            <Field.Label className="font-medium text-sm text-lightest">Username</Field.Label>
            <Field.Input 
              type="text" 
              placeholder="JohnPork" 
              className="w-full p-2 text-light rounded-md outline outline-darker focus:outline-2 focus:outline-light" 
            />
          </Field.Root>
          <Field.Root className="flex flex-col gap-2 w-full">
            <Field.Label className="font-medium text-sm text-lightest">Email</Field.Label>
            <Field.Input 
              type="text" 
              placeholder="johnpork@example.com" 
              className="w-full p-2 text-light rounded-md outline outline-darker focus:outline-2 focus:outline-light" 
            />
          </Field.Root>
          <PasswordInput.Root className="flex flex-col gap-2 w-full"> 
            <PasswordInput.Label className="font-medium text-sm text-lightest">Password</PasswordInput.Label>
            <PasswordInput.Control className="relative flex items-center w-full text-light">
              <PasswordInput.Input placeholder="••••••••" className="flex-1 p-2 pr-12 rounded-md outline outline-darker focus:outline-2 focus:outline-light" />
              <PasswordInput.VisibilityTrigger tabIndex={0} className="absolute right-0 mr-4 cursor-pointer">
                <PasswordInput.Indicator fallback={<FaEyeSlash />}>
                  <FaEye />
                </PasswordInput.Indicator>
              </PasswordInput.VisibilityTrigger>
            </PasswordInput.Control>
          </PasswordInput.Root>
          <Field.Root>
            <button type="submit" className="w-full p-2 mt-2 cursor-pointer rounded-sm bg-fore text-back hover:bg-lightest disabled:bg-darker disabled:text-dark disabled:cursor-auto transition-colors duration-100" disabled>
              Sign up
            </button>
          </Field.Root>
        </form>
        <div className="flex items-center gap-1">
          <hr className="flex-1 border-dark" />
          <span className="text-sm text-dark">or</span>
          <hr className="flex-1 border-dark" />
        </div>
        <menu className="space-y-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full p-2 cursor-pointer rounded-sm border border-lighter hover:bg-darker focus:outline-2 focus:outline-lightest transition-colors duration-100"
          >
            <FaGoogle aria-label="Google" className="text-lg text-lightest" />
            Continue with Google
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full p-2 cursor-pointer rounded-sm border border-lighter hover:bg-darker focus:outline-2 focus:outline-lightest transition-colors duration-100"
          >
            <FaGithub aria-label="Github" className="text-lg text-lightest" />
            Continue with GitHub
          </button>
        </menu>
        <div className="flex items-center justify-center gap-2 text-mid text-sm">
          Already have an account?
          <Link to="/login" className="flex items-center gap-1 text-lightest hover:text-light">
            Sign in 
            <FaArrowRightLong className="text-sm" />
          </Link>
        </div>
      </main>
    </div>
  );
}