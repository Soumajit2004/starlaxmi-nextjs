import styles from "../../styles/LiveResults.module.css";

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
      <h2 className={"uppercase text-4xl font-bold"}>Live results</h2>
    </div>
  );
};

const CurrentResult = () => {
  return (
    <div
      className={
        "flex mx-auto bg-primary/80 hover:bg-primary-focus rounded-xl " +
        "py-5 px-8 min-w-full justify-between items-center duration-500"
      }
    >
      <h3 className="text-white text-3xl font-display">Result of 11:30 PM</h3>
      <h1
        className={
          "text-5xl bg-success rounded-lg text-success-content pt-2 px-4 font-sans font-bold border-2 border-success-content"
        }
      >
        172-5
      </h1>
    </div>
  );
};

const ResultTable = () => {
  return (
    <div className={"grid grid-cols-2 grid-rows-5 w-full"}>
      <div
        className={
          "col-span-2 bg-primary/80 text-center py-6 rounded-lg font-sans font-bold uppercase text-xl"
        }
      >
        <h3>{"Today's Result"}</h3>
      </div>
    </div>
  );
};

export default function LiveResults() {
  return (
    <div
      className={
        "h-full py-5 px-10 rounded-2xl flex flex-col bg-base-100/20 justify-around text-center duration-500 " +
        "hover:scale-102 hover:bg-base-100/50 border-2 hover:border-primary"
      }
    >
      <LiveAnimation />

      <CurrentResult />

      <ResultTable />
    </div>
  );
}