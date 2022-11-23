import React from "react";
import States from "./States";
import PropTypes from "prop-types";
import TimeLogs from "../log/TimeLogs";
import TimerContainer from "./TimerContainer";

const Excution = ({ minutes, seconds, setTimeLogs }) => {
  return (
    <div className="w-80 items-center content-center ">
      <TimerContainer
        minutes={minutes}
        seconds={seconds}
        setTimeLogs={setTimeLogs}
      />
      <States />

      <TimeLogs />
    </div>
  );
};

Excution.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  setTimeLogs: PropTypes.func, // { id: 0, start: "", end: "" } 형태의 매개변수, { id: 0, start: "", end: "" } 형태의 반환값
};

export default Excution;
