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
      <div className=" bg-slate-100 text-slate-600 text-sm p-1 my-1 border border-slate-300 rounded-md">
        2022년 11월 15일 AM 10:02 - AM 10:27
      </div>
      <div className=" bg-slate-100 text-slate-600 text-sm p-1 my-1 border border-slate-300 rounded-md">
        2022년 11월 15일 AM 10:02 - AM 10:27
      </div>
    </div>
  );
};

export default Logs;
