import React, { useState } from "react";
import type { pastThreeMonthsResultType, monthlyResultType } from "../../types/resultTypes";
import { timeOptions } from "../../utils/data";
import moment from "moment";
import MonthlyResultTable from "../monthlyResultTable";

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
          <MonthlyResultTable month={thisMonth} />
        </div>
        <div id="lastMonth" className="carousel-item w-full">
          <MonthlyResultTable month={lastMonth} />
        </div>
        <div id="secondLastMonth" className="carousel-item w-full">
          <MonthlyResultTable month={secondLastMonth} />
        </div>
      </div>

    </>
  );
};

export default PastThreeMonthsResults;