import React from "react";

const DashboardMessages: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div className={"text-center border-2 min-w-full rounded-lg border-dashed border-primary bg-base-100/50 p-36 prose"}>
    <h2 className={"text-3xl"}>{message}</h2>
  </div>
);

export default DashboardMessages