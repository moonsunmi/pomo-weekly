import TimeLog from "./TimeLog";
import { useContext } from "react";
import { timeLogsContext } from "../_app";

const TimeLogs = () => {
  const timeLogs = useContext(timeLogsContext);
  return (
    <div className="w-96 m-3">
      <p className=" text-lg ">timeLogs</p>
      <div>
        {timeLogs.map(
          (timeLog, index) =>
            timeLog.id > 0 && <TimeLog timeLog={timeLog} key={index} />
        )}
      </div>
    </div>
  );
};

export default TimeLogs;
