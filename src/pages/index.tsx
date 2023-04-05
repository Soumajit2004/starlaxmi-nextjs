import { type NextPage } from "next";
import Head from "next/head";
import type { FunctionComponent } from "react";


import Layout from "../components/layout";
import LiveResults from "../components/homePage/liveResults";

const HeroText: FunctionComponent = () => {
  return (
    <div className="prose flex min-w-full select-none flex-col justify-center font-sans">
      <h1 className="mb-0 font-display text-8xl text-white decoration-primary duration-500 hover:underline ">
        {"Bengal's NO 1"}
      </h1>
      <h2 className="mt-5 text-4xl text-white ">matka platform.</h2>
      <p>Starlaxmi is the best matka platform in Bengal. We provide the best</p>
      <button className="btn-xl btn-primary btn mt-10 h-16 w-40">
        Join Now
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Starlaxmi</title>
        <meta
          name="description"
          content="Check your result now at starlaxmi. Official result."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"container mx-auto grid h-[90vh] py-10 lg:grid-cols-2"}>
        <HeroText />

        <div className="px-20">
          <LiveResults />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
