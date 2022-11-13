import React, { useContext, useReducer, useState } from "react";
import { nextLogIdContext, timeLogsContext } from "../pages";
import Counter from "./Counter";
import StartStopButton from "./StartStopButton";

const initialState = {
  isCounting: false,
};
const reducer = (state, action) => {
  if (action.type == "TOGGLE") {
    return !action.isCounting;
  }
  return initialState;
};

export const isCountingContext = React.createContext(false);

const TimerContainer = ({ minutes, seconds, addtimeLogs }) => {
  // 분과 초를 따로 관리하는 게 나을 수도 있겠다.
  const [isCounting, setIsCounting] = useState(false);

  const nextLogId = useContext(nextLogIdContext);

  return (
    <div className=" shadow-lg bg-yellow-100 text-yellow-600  text-lg items-center w-64 rounded-lg border border-yellow-600 p-3	">
      <div className=" border-yellow-600">리액트 프로그래밍 공부</div>
      <div className="border-t border-yellow-600">
        <isCountingContext.Provider value={isCounting}>
          <Counter
            minutes={minutes}
            seconds={seconds}
            setIsCounting={setIsCounting}
          />
          <StartStopButton
            nextLogId={nextLogId}
            addtimeLogs={addtimeLogs}
            setIsCounting={setIsCounting}
          />
        </isCountingContext.Provider>
      </div>
    </div>
  );
};

export default TimerContainer;
