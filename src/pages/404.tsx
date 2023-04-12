import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <main className={"h-screen flex flex-col justify-center items-center prose min-w-full font-sans"}>
        <h1>Page Not Found !</h1>
        <p>Looks like you are in a wrong page.</p>

        <Link href={"/"} className={"btn btn-primary btn-lg no-underline"}>Return to Home</Link>
      </main>
    </>
  );
}