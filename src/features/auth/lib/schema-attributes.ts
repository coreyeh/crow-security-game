import { z } from "zod";

export const schemaAttributes = z.object({
  username: z.string()
    .min(3, "Must be at least 3 characters long")
    .max(15, "Cannot be more than 15 characters long"),

  email: z.email("Invalid email address"),

  password: z.string()
    .min(8, "Must be at least 8 characters long")
    .regex(/[a-z]/, "Missing a lowercase letter")
    .regex(/[A-Z]/, "Missing an uppercase letter")
    .regex(/\d/, "Missing a number")
    .regex(/[^a-zA-Z\d]/, "Missing a special character"),
});