import { SignUp } from "@clerk/nextjs";
import Head from "next/head";

const SignUpPage = () => (
  <div className={"flex h-screen items-center justify-center"}>
    <Head>
      <title>Admin Signup</title>
    </Head>
    <SignUp path="/sign-up" routing="path" />;
  </div>
);
export default SignUpPage;
