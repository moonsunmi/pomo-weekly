import { useEffect, useState } from "react";
import State from "./State";

const TimerContainer = ({ minutes, seconds }) => {
  // 분과 초를 따로 관리하는 게 나을 수도 있다.
  let init_pomodori = minutes * 60 + seconds;
  const [number, setNumber] = useState(init_pomodori);
  const [is_start, setStart] = useState(false);
  let start_stop_button;

  useEffect(() => {
    console.log("useEffect");
    if (is_start) {
      const interval = setInterval(() => {
        if (number <= 0) {
          setNumber(init_pomodori);
          setStart(false);
          clearInterval(interval);
        } else {
          setNumber(number - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [number, is_start]);

  if (is_start) {
    start_stop_button = (
      <div className="button w-3/4" onClick={() => setStart(false)}>
        Stop
      </div>
    );
  } else {
    start_stop_button = (
      <div className="button w-3/4" onClick={() => setStart(true)}>
        Start
      </div>
    );
  }

  return (
    <div className=" bg-yellow-100 text-yellow-600  text-lg items-center w-64 rounded-lg border border-yellow-600 p-3	">
      <div className=" border-yellow-600">리액트 프로그래밍 공부</div>
      <div className="text-4xl my-8 font-mono">
        {Math.floor(number / 60)} : {number % 60}
      </div>
      <div className="flex justify-center m-3">{start_stop_button}</div>
      <div className="border-t border-yellow-600 text-sm">
        <p className=" text-lg my-2">States</p>
        <State item_name={"오늘의 뽀모도리"} item_number="8" />
        <State item_name={"이번주 뽀모도리"} item_number="20" />
        <State item_name={"리액트 공부"} item_number="20" />
      </div>
    </div>
  );
};

export default TimerContainer;
