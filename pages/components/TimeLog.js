const TimeLog = ({ timeLog }) => {
  // 여기서 useContext를 쓸 수도 있다.
  return (
    <div className=" bg-slate-100 text-slate-600 text-sm p-1 my-1 border border-slate-300 rounded-md">
      {timeLog.start} - {timeLog.end}
    </div>
  );
};

export default TimeLog;
