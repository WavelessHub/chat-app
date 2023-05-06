import { z } from "zod";

export const schema = z.object({
  displayName: z
    .string({ invalid_type_error: "Display Name is required." })
    .min(3, { message: "Display Name should be atleast 3 characters." }),
  email: z
    .string({ invalid_type_error: "Email is required." })
    .email({ message: "Enter a valid email." }),
  password: z
    .string({ invalid_type_error: "Password is required." })
    .min(8, { message: "Password should have a minimum of 8 characters." }),
});

export type FormData = z.infer<typeof schema>;
