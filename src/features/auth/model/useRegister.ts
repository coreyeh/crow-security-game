import { signUp } from "aws-amplify/auth";
import { useState, type FormEvent } from "react";

export default function useRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  async function register(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password || !confirm) {
      console.log("Empty input field");
      return;
    }

    if (password !== confirm) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const { isSignUpComplete, userId } = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });

      if (!isSignUpComplete) {
        console.log("Extra action required:", userId);
        return;
      }
    } catch (error) {
      if (error instanceof Error)
        console.error("Error:", error.message);
    } finally {
      setPassword("");
      setConfirm("");
    }
  }

  return {
    setEmail,
    password,
    setPassword,
    confirm,
    setConfirm,
    register,
  }
}