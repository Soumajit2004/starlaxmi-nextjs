import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";
import LiveResults from "../components/homePage/liveResults";
import { generateSSGHelper } from "../server/api/helpers/ssgHelper";
import type { pastThreeMonthsResultType, todayResultType } from "../types/resultTypes";
import type { DehydratedState } from "@tanstack/query-core";
import HeroText from "../components/homePage/hetoText";
import PastThreeMonthsResults from "../components/homePage/lastThreeMonthsResults";

interface HomePageProps {
  trpcState: DehydratedState,
  todayResult: todayResultType,
  pastThreeMonthsResult: pastThreeMonthsResultType
}

const Home: NextPage<HomePageProps> = ({ todayResult, pastThreeMonthsResult }) => {
  return (
    <Layout>
      <Head>
        <title>Starlaxmi</title>
        <meta
          name="description"
          content="Check your result now at starlaxmi. Official results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"mt-1 lg:mt-10"}>
        <section className={"container mx-auto grid lg:grid-cols-2"}>
          <HeroText />

          <LiveResults todayResult={todayResult} />
        </section>

        <section className={"container mx-auto py-10 lg:py-10"}>
          <h3
            className={"text-2xl md:text-4xl xl:text-5xl font-display font-bold text-white mb-10 text-center lg:text-left"}>Previous
            Results</h3>
          <PastThreeMonthsResults pastThreeMonthsResultData={pastThreeMonthsResult} />
        </section>
      </main>
    </Layout>
  );
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const ssg = await generateSSGHelper();

  const fetchedTodayResults = await ssg.formatedResults.getFullDayResults.fetch({ queryDate: new Date() });
  const fetchedThreeMonthsResults = await ssg.formatedResults.getThreeLastMonthsResults.fetch();

  return {
    props: {
      trpcState: ssg.dehydrate(),
      todayResult: fetchedTodayResults as todayResultType,
      pastThreeMonthsResult: fetchedThreeMonthsResults as pastThreeMonthsResultType
    },
    revalidate: 60
  };
};
