const State = ({ stateName, stateNumber }) => {
  return (
    <div className="flex p-1">
      <div>{stateName}</div>
      <div className=" mx-2 px-1 w-auto h-5 rounded-full bg-yellow-600 text-white">
        {stateNumber}
      </div>
    </div>
  );
};

export default State;
