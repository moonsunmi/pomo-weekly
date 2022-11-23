import React from "react";

const State = ({ stateName, stateNumber }) => {
  return (
    <div className="flex p-1">
      <div>{stateName}</div>
      <div className=" bg-yellow-600 text-white rounded-full mx-2 p-1">
        {stateNumber}
      </div>
    </div>
  );
};

export default React.memo(State);
