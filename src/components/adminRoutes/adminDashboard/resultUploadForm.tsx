import React, { FunctionComponent, useCallback, useEffect } from "react";
import { Formik } from "formik";
import classNames from "classnames";
import { useRecoilValue } from "recoil";
import { selectedDateTimeState } from "../../../recoil/resultAtom";
import { api } from "../../../utils/api";
import toast from "react-hot-toast";
import DashboardMessages from "../../dashboardMessages";


const ResultStatusCard: FunctionComponent<{ title: string; message: string }> = ({ title, message }) => {
  return (
    <div
      className="flex flex-col items-center justify-center border-2 min-w-full rounded-lg border-dashed border-primary bg-base-100/50 p-10 gap-5 prose">
      <h1 className={"uppercase m-0"}>
        {title}
      </h1>
      <p className={"m-0"}>
        {message}
      </p>
    </div>
  );
};


const ResultUploadForm = () => {
  // getting selected date and time slot
  const selectedDateTime = useRecoilValue(selectedDateTimeState);

  const mutateResult = api.result.publishResult.useMutation();

  const { data, isFetching, error, refetch } = api.result.singleResult.useQuery({
    queryDate: selectedDateTime?.date as Date,
    queryTimeSlot: selectedDateTime?.time as string
  });

  useEffect(() => {
    void refetch();
  }, [selectedDateTime]);


  if (isFetching) return <DashboardMessages message={"Loading..."} />;

  if (!data || error) return <DashboardMessages message={"Something Went Wrong!"} />;

  return (
    <Formik
      initialValues={{
        resultBig: data?.resultBig || 0,
        resultSmall: data?.resultSmall || 0
      }}
      onSubmit={async ({ resultBig, resultSmall }, { setSubmitting }) => {
        const res = await mutateResult.mutateAsync({
          date: selectedDateTime.date as Date,
          timeSlot: selectedDateTime.time as string,
          resultLarge: resultBig,
          resultSmall: resultSmall
        });

        res.error ? toast.error("Ouch! An Error Occurred.") : null;

        setSubmitting(false);
      }}
    >
      {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
        <div>
          {(!data.resultBig && !data.resultBig) ?
            <ResultStatusCard title={"Result not declared"}
                              message={"To declare the result, enter the result below and hit save."} /> :

            <ResultStatusCard title={"Result declared"}
                              message={"To update the result, modify the result below and hit save."} />}

          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center border-2 min-w-full rounded-lg border-dashed border-white p-10 gap-5 mt-5">

            <input
              type="number"
              name={"resultBig"}
              className="input input-bordered"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.resultBig}
            />
            <input
              type="number"
              name={"resultSmall"}
              className="input input-bordered w-16"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.resultSmall}
            />

            <button type={"submit"} className={classNames("btn", isSubmitting ? "btn-disabled" : "btn-primary")}>Save
            </button>
          </form>
        </div>
      )}
    </Formik>

  );
};

export default ResultUploadForm;