import React, { ChangeEventHandler, FunctionComponent, useState } from "react";
import moment from "moment";
import { api } from "../../utils/api";
import { timeOptions } from "../../data/data";
import DashboardMessages from "../dashboardMessages";

const ResultSearch: FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = useState<{ date: Date }>({ date: new Date() });

  const { error, data, isFetching } = api.formatedResults.getFullDayResults.useQuery({ queryDate: selectedDate.date });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSelectedDate({ date: e.currentTarget.valueAsDate as Date });
  };

  const isResultPublished = () => {
    if (data) {
      const f = data.filter((r) => r.resultSmall || r.resultLarge);

      return f.length > 0;
    }

    return false;
  };
  return (
    <div className={"font-sans border-2 rounded-xl border-dashed border-primary"}>
      <div className={"bg-base-100/50 py-5 flex justify-center border-b-2 border-dashed rounded-xl border-primary"}>
        <input type="date" placeholder="Type here"
               className="input input-bordered w-full max-w-xs"
               value={moment(selectedDate.date).format("YYYY-MM-DD")}
               onChange={handleChange} />
      </div>

      <div className={"p-5 text-center"}>
        {
          isFetching ? <DashboardMessages message={"Loading . . . "} /> : <div />
        }

        {
          error ? <DashboardMessages message={"Error Occurred !"} /> : <div />
        }

        {
          (!isFetching) ?
            ((isResultPublished()) ? (
              <table className={"table table-zebra w-full text-center my-0"}>
                <thead>
                <tr>
                  <th>Time</th>
                  <th>Result</th>
                </tr>
                </thead>
                <tbody>
                {timeOptions.map((timeslot, index) => {
                  const f = data?.filter((r) => {
                    return r.timeSlot === timeslot;
                  })[0] || { resultLarge: 0, resultSmall: 0 };

                  return (
                    <tr key={index}>
                      <td>{timeslot}</td>
                      <td>{`${f.resultLarge} - ${f.resultSmall}`}</td>
                    </tr>
                  );
                })}
                </tbody>

              </table>
            ) : <DashboardMessages message={"Result not published"} />) : <div />
        }

      </div>

    </div>
  );
};

export default ResultSearch;