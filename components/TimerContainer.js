import { useEffect, useState } from "react";
import State from "./State";

const TimerContainer = ({ minutes, seconds }) => {
  // 분과 초를 따로 관리하는 게 나을 수도 있겠다.
  let initPomodori = minutes * 60 + seconds;
  const [countdownNumber, setCountdownNumber] = useState(initPomodori);
  const [isCounting, setIsCounting] = useState(false);
  let startStopButton;

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        if (countdownNumber <= 0) {
          setCountdownNumber(initPomodori);
          setIsCounting(false);
          clearInterval(interval);
        } else {
          setCountdownNumber(countdownNumber - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countdownNumber, isCounting]);

  if (isCounting) {
    startStopButton = (
      <div className="button w-3/4" onClick={() => setIsCounting(false)}>
        Stop
      </div>
    );
  } else {
    startStopButton = (
      <div className="button w-3/4" onClick={() => setIsCounting(true)}>
        Start
      </div>
    );
  }

  return (
    <div className=" shadow-lg bg-yellow-100 text-yellow-600  text-lg items-center w-64 rounded-lg border border-yellow-600 p-3	">
      <div className=" border-yellow-600">리액트 프로그래밍 공부</div>

      <div className="text-4xl my-8 font-mono">
        {Math.floor(countdownNumber / 60)} : {countdownNumber % 60}
      </div>
      <div className="flex justify-center m-3">{startStopButton}</div>
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
