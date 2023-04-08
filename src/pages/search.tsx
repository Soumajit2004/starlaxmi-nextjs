import type { NextPage } from "next";
import Layout from "../components/layout";
import ResultSearch from "../components/searchPage/searchComponent";
import Head from "next/head";

const SearchPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Search Results</title>
        <meta
          name="description"
          content="Result Search"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"h-auto min-h-[90vh] container mx-auto justify-center items-center py-10"}>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className={"prose min-w-full pr-5"}>
            <h1 className={"font-display font-bold text-white text-3xl lg:text-5xl text-center lg:text-left"}>
              Search
              Results
            </h1>
            <h4 className={"text-white font-sans hidden lg:block"}>
              Welcome to our Matka Game Results search page!
              <br />
              <br />
              Here, you can easily search for the latest matka game results and scores.
              <br />
              <br />
              Whether your a seasoned matka enthusiast or a casual fan, our search page is the perfect tool to stay
              up-to-date with the latest matka game results. You can search by player name, team name, tournament name,
              or date to find the specific results your looking for.
              <br />
              <br />
              We also provide detailed match statistics, including scores, player statistics, and game highlights, to
              help you analyze the game and understand how each player performed. With our easy-to-use search function,
              you can quickly find the results you need and stay on top of all the latest matka action.
              <br />
              <br />
              So why wait? Start your search now and discover the latest matka game results!
            </h4>
          </div>
          <div>
            <ResultSearch />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SearchPage;