import Counter from "./Counter";
import State from "./State";

const TimerContainer = ({ minutes, seconds, nextLogId, logs, addLogs }) => {
  // 분과 초를 따로 관리하는 게 나을 수도 있겠다.

  return (
    <div className=" shadow-lg bg-yellow-100 text-yellow-600  text-lg items-center w-64 rounded-lg border border-yellow-600 p-3	">
      <div className=" border-yellow-600">리액트 프로그래밍 공부</div>
      <Counter
        minutes={minutes}
        seconds={seconds}
        nextLogId={nextLogId}
        logs={logs}
        addLogs={addLogs}
      />
      <div className="border-t border-yellow-600 text-sm">
        <p className=" text-lg my-2">States</p>
        <State stateName={"오늘의 뽀모도리"} stateNumber="8" />
        <State stateName={"이번주 뽀모도리"} stateNumber="20" />
        <State stateName={"리액트 공부"} stateNumber="20" />
      </div>
    </div>
  );
};

export default TimerContainer;
