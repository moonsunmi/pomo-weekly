import next from "next";
import PropTypes from "prop-types";
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
  isCounting: PropTypes.bool,
};

export default Counter;
