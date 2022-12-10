import React from "react";

const Report = ({ reportName, reportNumber }) => {
  return (
    <div className="flex p-1">
      <div>{reportName}</div>
      <div className=" bg-yellow-600 text-white rounded-full mx-2 p-1">
        {reportNumber}
      </div>
    </div>
  );
};

export default React.memo(Report);
