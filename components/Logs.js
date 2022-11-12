import Log from "./Log";
import PropTypes from "prop-types";

const Logs = ({ logs }) => {
  return (
    <div className="w-96 m-3">
      <p className=" text-lg ">Logs</p>
      <div>
        {logs.map((log, index) => log.id > 0 && <Log log={log} key={index} />)}
      </div>
    </div>
  );
};

Logs.propTypes = {
  logs: PropTypes.shape({
    id: PropTypes.number,
    start: PropTypes.string,
    end: PropTypes.string,
  }),
};

export default Logs;
