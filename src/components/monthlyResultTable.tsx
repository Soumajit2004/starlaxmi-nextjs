import React from "react";
import { monthlyResultType } from "../types/resultTypes";
import { timeOptions } from "../utils/data";
import moment from "moment/moment";

const MonthlyResultTable: React.FunctionComponent<{ month: { results: monthlyResultType, allDates: string[] } }> = ({ month }) => {
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

export default MonthlyResultTable