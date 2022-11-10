import Log from "./Log";

const Logs = ({ logs }) => {
  return (
    <div className="w-96 m-3">
      <p className=" text-lg ">Logs</p>
      <div>
        {logs.map((log, index) => (
          <Log log={log} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Logs;
