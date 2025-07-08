import { signIn } from "aws-amplify/auth";
import { useState, type FormEvent } from "react";

export default function useLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!identifier || !password) {
      console.log("Empty input field");
      return;
    }

    try {
      const { isSignedIn } = await signIn({
        username: identifier,
        password
      });

      if (!isSignedIn) {
        console.log("Extra action required");
        return;
      }
    } catch (error) {
      if (error instanceof Error)
        console.error("Error:", error.message);
    } finally {
      setPassword("");
    }
  }

  return {
    setIdentifier,
    password,
    setPassword,
    login,
  };
}
