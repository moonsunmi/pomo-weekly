import { useEffect, useState } from "react";

const TimerContainer = ({ minutes, seconds }) => {
  // let total_seconds = minutes * 60 + seconds;
  const [number, setNumber] = useState(minutes * 60 + seconds);
  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => {
      setNumber(number - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);
  return (
    <div className="grid">
      {Math.floor(number / 60)} : {number % 60}
      {/*<DigitDisplay number={number} unit="minutes" />
      <DigitDisplay number={number} unit="seconds" />*/}
    </div>
  );
};

export default TimerContainer;
