import React, { useContext, useState } from "react";
import { timeLogsContext } from "../../_app";
import Schedule from "../Schedule";

const Reservation = () => {
  const testLogs = useContext(timeLogsContext);
  const [age, setAge] = useState(18); // for test. must be deleted.

  return (
    <div>
      <div className="mainContainer">{testLogs.map((log) => log.id)}</div>
      <Schedule age={age} />
    </div>
  );
};

export default Reservation;
