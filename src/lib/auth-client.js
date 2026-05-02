import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  // baseURL: "http://localhost:3000",
  baseURL: "https://online-book-browing-platform.vercel.app/",
});

export const { signIn, signUp, signOut, useSession } = createAuthClient();
