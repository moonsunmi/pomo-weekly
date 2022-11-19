import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { isCountingContext } from "./TimerContainer";

const Counter = ({ minutes, seconds, setIsCounting }) => {
  let initPomodori = minutes * 60 + seconds;
  const isCounting = useContext(isCountingContext);
  const [countdownNumber, setCountdownNumber] = useState(initPomodori);

  useEffect(() => {
    // <- 커스텀 훅으로 만드는 게 좋을 것 같다. useTicking 이런 것..?
    if (isCounting) {
      const interval = setInterval(() => {
        if (countdownNumber <= 0) {
          // countdown 끝
          setCountdownNumber(initPomodori);
          setIsCounting((prevState) => !prevState);
          clearInterval(interval);
        } else {
          setCountdownNumber((prevCount) => prevCount - 1); // useState가
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

Counter.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  setIsCounting: PropTypes.func,
};

export default Counter;
