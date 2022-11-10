import next from "next";
import React from "react";
import { useEffect, useState } from "react";

const Counter = ({ minutes, seconds, isCounting }) => {
  let initPomodori = minutes * 60 + seconds;
  const [countdownNumber, setCountdownNumber] = useState(initPomodori);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        if (countdownNumber <= 0) {
          // countdown 끝
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

  return (
    <div>
      <div className="text-4xl my-8 font-mono">
        {Math.floor(countdownNumber / 60)} : {countdownNumber % 60}
      </div>{" "}
    </div>
  );
};

export default Counter;
