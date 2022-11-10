const Log = ({ log }) => {
  //return <div>{log.start}</div>;
  console.log(log.start);

  return (
    <div className=" bg-slate-100 text-slate-600 text-sm p-1 my-1 border border-slate-300 rounded-md">
      {log.start} - {log.end}
    </div>
  );
  //return <div>{console.log(log.start)}</div>;
};

export default Log;
