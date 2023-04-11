import styles from "../../styles/liveResults.module.css";
import { timeOptions } from "../../utils/data";
import type { todayResultType } from "../../types/resultTypes";

const LiveAnimation = () => {
  return (
    <div
      className={"flex text-center font-sans items-center gap-2 justify-center"}
    >
      <div className={styles.circles}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
      <h2 className={"uppercase text-xl lg:text-2xl xl:text-4xl font-bold"}>Live results</h2>
    </div>
  );
};

export default function LiveResults({ todayResult }: { todayResult: todayResultType }) {
  const getResultByTime = (timeSlot: string): { resultLarge: number, resultSmall: number } => {
    const filteredData = todayResult.filter(({ timeSlot: t }) => {
      return t === timeSlot;
    });
    return {
      resultLarge: filteredData[0]?.resultLarge || 0,
      resultSmall: filteredData[0]?.resultSmall || 0
    };
  };

  const getLatestResult = (): { timeSlot: string | undefined, resultLarge: number, resultSmall: number } => {
    let res = {
      timeSlot: " * * * ",
      resultLarge: 0,
      resultSmall: 0
    };
    const reversedResults = todayResult.reverse();
    reversedResults.forEach((r) => {
      res = {
        timeSlot: r?.timeSlot ? r.timeSlot : "--",
        resultLarge: r.resultLarge || 0,
        resultSmall: r.resultSmall || 0
      };
    });

    return res;
  };


  const latestResult = getLatestResult();
  return (
    <div className={"flex items-center justify-center"}>
      <div
        className={
          "h-min p-4 md:p-10 rounded-2xl bg-base-100/20 text-center duration-500" +
          "hover:scale-102 hover:bg-base-100/50 border-2 hover:border-primary md:mx-20 lg:mx-5 w-full"
        }
      >
        <LiveAnimation />


        <div className={"flex flex-col gap-2 mt-4"}>
          {/*latest result*/}
          <div
            className={
              "flex mx-auto bg-primary/80 hover:bg-primary-focus rounded-xl " +
              "p-3 lg:py-5 lg:px-8 min-w-full justify-between items-center duration-500"
            }
          >
            <h3 className="text-white sm:text-xl xl:text-2xl font-display">Result of {latestResult.timeSlot}</h3>
            <h1
              className={
                "text-xl sm:text-2xl  xl:text-4xl bg-success rounded-lg text-success-content pt-2 px-4 font-sans font-bold border-2 border-success-content"
              }
            >
              {latestResult.resultLarge} - {latestResult.resultSmall}
            </h1>
          </div>

          {/*result table*/}
          <div className={"grid grid-cols-2 grid-rows-5 w-full gap-2"}>
            <div
              className={
                "col-span-2 bg-primary/80 py-2 lg:py-4 flex items-center justify-center rounded-lg font-sans font-bold uppercase text-xl"
              }
            >
              <h3>{"Today's Result"}</h3>
            </div>

            {timeOptions.map((timeSlot) => {
              const result = getResultByTime(timeSlot);

              return (
                <div key={timeSlot}
                     className={"bg-secondary/60 text-center py-2 lg:py-4 rounded-lg " +
                       "font-sans font-bold uppercase sm:text-xl flex justify-around p-2 xl:px-10 items-center"}>
                  <h3>{timeSlot}</h3>
                  <div className={"bg-success text-success-content px-2 py-1 rounded-lg"}>
                    <h3>{result.resultLarge} - {result.resultSmall}</h3>
                  </div>
                </div>);
            })}
          </div>
        </div>
      </div>
    </div>

  );
}