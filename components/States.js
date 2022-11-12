import State from "./State";

const States = ({ nextLogId }) => {
  return (
    <div className=" my-3 shadow-lg bg-yellow-100 text-yellow-600  text-sm items-center w-64 rounded-lg border border-yellow-600 p-3	">
      <p className=" text-lg">States</p>
      <div className="border-t border-yellow-600 text-sm pt-3">
        <State stateName={"오늘의 뽀모도리"} stateNumber={nextLogId.current} />
        <State stateName={"이번주 뽀모도리"} stateNumber="20" />
        <State stateName={"리액트 공부"} stateNumber="20" />
      </div>
    </div>
  );
};

export default States;
