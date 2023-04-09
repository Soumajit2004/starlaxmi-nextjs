import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import moment from "moment";
import { randomUUID } from "crypto";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        password: { label: "Password", type: "password" }
      },
      authorize(credentials) {
        if (credentials?.password === `${moment().format("DD-MM-YYYY")}-admin`) {
          return { id: randomUUID() };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/sign-in"
  }
});