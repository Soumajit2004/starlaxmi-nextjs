import React, { useState } from "react";
import type { pastThreeMonthsResultType, threeMonthResultType } from "../../types/resultTypes";
import { timeOptions } from "../../data/data";
import moment from "moment";

const monthIDs = [
  "thisMonth",
  "lastMonth",
  "secondLastMonth"
];

const PastThreeMonthsResults: React.FunctionComponent<{ pastThreeMonthsResultData: pastThreeMonthsResultType }> = ({
                                                                                                               pastThreeMonthsResultData
                                                                                                             }) => {
  const {
    thisMonth,
    secondLastMonth,
    lastMonth
  } = pastThreeMonthsResultData;

  const [selectedMonth, setSelectedMonth] = useState("#thisMonth");

  return (
    <>
      <div className="tabs flex w-full py-5 gap-5 font-sans items-baseline">
        {monthIDs.map((monthID) => {
          return <a href={`#${monthID}`}
                    key={monthID}
                    className={`tab tab-bordered tab-xs sm:tab-sm md:tab-lg  ${(selectedMonth === `#${monthID}`) ? "tab-active" : ""}`}
                    onClick={() => {
                      setSelectedMonth(`#${monthID}`);
                    }}>
            {moment(pastThreeMonthsResultData[monthID as keyof pastThreeMonthsResultType]["allDates"][0]).format("MMMM YYYY")}
          </a>;
        })}
      </div>
      <div className="carousel w-full">
        <div id="thisMonth" className="carousel-item w-full">
          <Table month={thisMonth} />
        </div>
        <div id="lastMonth" className="carousel-item w-full">
          <Table month={lastMonth} />
        </div>
        <div id="secondLastMonth" className="carousel-item w-full">
          <Table month={secondLastMonth} />
        </div>
      </div>

    </>
  );
};

const Table: React.FunctionComponent<{ month: { results: threeMonthResultType, allDates: string[] } }> = ({ month }) => {
  return <div className="overflow-x-auto w-full">
    <table className="table table-zebra w-full font-sans table-compact text-center">
      {/* head */}
      <thead className={"font-bold text-xl"}>
      <tr>
        <th>Date</th>
        {timeOptions.map(value => (<th key={value}>{value}</th>))}
      </tr>
      </thead>
      <tbody>
      {month.allDates.map((date) => {
        const mDate = moment(date);

        return <tr key={date}>
          <th>{mDate.format("Do MMM")}</th>
          {
            timeOptions.map((timeSlot, index) => {
              const result = month.results.filter((r) => {
                return (new Date(r.date).toDateString() === mDate.toDate().toDateString() && timeSlot === r.timeSlot);
              });

              return <td key={index}>
                <h6>{result[0]?.resultLarge || 0}</h6>
                <h5 className={"font-bold"}>{result[0]?.resultSmall || 0}</h5>
              </td>;
            })
          }
        </tr>;
      })}

      </tbody>
    </table>
  </div>;
};

export default PastThreeMonthsResults;