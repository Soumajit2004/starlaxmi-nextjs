import { AuthOptions, getServerSession } from "next-auth";
import { GetServerSidePropsContext } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import { serverSideCaller } from "./api/root";

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        return await serverSideCaller.auth.validateUser({ email: credentials.email, password: credentials.password });
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/sign-in"
  }
};