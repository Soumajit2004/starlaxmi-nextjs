import type { FunctionComponent } from "react";
import React from "react";
import { Formik } from "formik";
import moment from "moment";
import { timeOptions } from "../../../data/data";
import { useSetRecoilState } from "recoil";
import { selectedDateTimeState } from "../../../recoil/resultAtom";

const DateTimeSelectorForm: FunctionComponent = () => {
  const setDateTime = useSetRecoilState(selectedDateTimeState);

  return (
    <Formik
      initialValues={{
        date: moment(Date.now()).format("YYYY-MM-DD"),
        time: timeOptions[0]
      }}
      onSubmit={({ date, time }, { setSubmitting }) => {
        const dateConverted = new Date(date);
        const selectedTime = (timeOptions.includes(time as string) ? time : timeOptions[0]) || "10:00 AM";

        // set date and time in recoil state
        setDateTime({ date: dateConverted, time: selectedTime });
        setSubmitting(false);
      }}
    >
      {({
          values,
          handleBlur,
          handleSubmit,
          setFieldValue,
          submitForm
          /* and other goodies */
        }) => (
        <form
          onSubmit={handleSubmit}
          className="not-prose flex w-full max-w-xl gap-5"
        >
          <input
            type="date"
            name={"date"}
            className="input-bordered input flex-grow"
            onChange={(e) => {
              setFieldValue(
                "date",
                moment(new Date(e.target.value)).format("YYYY-MM-DD")
              );

              void submitForm();
            }}
            onBlur={handleBlur}
            value={values.date}
          />

          <select
            className="select-bordered select flex-grow"
            name={"time"}
            onChange={(e) => {
              setFieldValue(
                "time",
                e.target.value
              );

              void submitForm();
            }}
            onBlur={handleBlur}
            value={values.time}
          >
            {timeOptions.map((timeOptions, index) => (
              <option key={index}>{timeOptions}</option>
            ))}
          </select>
        </form>
      )}
    </Formik>
  );
};

export default DateTimeSelectorForm;
