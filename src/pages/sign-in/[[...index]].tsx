import { SignIn } from "@clerk/nextjs";
import Head from "next/head";

const SignInPage = () => (
  <div className={"flex h-screen items-center justify-center"}>
    <Head>
      <title>Admin Login</title>
    </Head>
    <SignIn path="/sign-in" routing="path" />;
  </div>
);
export default SignInPage;
