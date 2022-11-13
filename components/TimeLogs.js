import TimeLog from "./TimeLog";
import PropTypes from "prop-types";
import { useContext } from "react";
import { timeLogsContext } from "../pages";

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

TimeLogs.propTypes = {
  timeLogs: PropTypes.shape({
    id: PropTypes.number,
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};

export default TimeLogs;
