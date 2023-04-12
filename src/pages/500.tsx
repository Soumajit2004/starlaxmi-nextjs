import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>

      <main className={"h-screen flex flex-col justify-center items-center prose min-w-full font-sans"}>
        <h1>An Error Occurred !</h1>
        <p>Looks like an error from our side.</p>

        <Link href={"/"} className={"btn btn-primary btn-lg no-underline"}>Return to Home</Link>
      </main>
    </>
  )
}