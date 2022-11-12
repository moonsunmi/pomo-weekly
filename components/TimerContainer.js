import { useState } from "react";
import Counter from "./Counter";
import StartStopButton from "./StartStopButton";
import State from "./State";

const TimerContainer = ({ minutes, seconds, nextLogId, logs, addLogs }) => {
  // 분과 초를 따로 관리하는 게 나을 수도 있겠다.
  const [isCounting, setIsCounting] = useState(false);

  return (
    <div className=" shadow-lg bg-yellow-100 text-yellow-600  text-lg items-center w-64 rounded-lg border border-yellow-600 p-3	">
      <div className=" border-yellow-600">리액트 프로그래밍 공부</div>
      <div className="border-t border-yellow-600">
        <Counter minutes={minutes} seconds={seconds} isCounting={isCounting} />
        <StartStopButton
          nextLogId={nextLogId}
          logs={logs}
          addLogs={addLogs}
          isCounting={isCounting}
          setIsCounting={setIsCounting}
        />
      </div>
    </div>
  );
};

export default TimerContainer;
