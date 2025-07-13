import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize(credentials, request) {
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === "development",
};

export const { handlers, signIn, signOut, auth, unstable_update } =
  NextAuth(authConfig);
