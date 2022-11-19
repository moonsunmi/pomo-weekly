import { useContext, useState } from "react";
import { timeLogsContext } from "../_app";
import { nextLogIdContext } from "../_app";
import { isCountingContext } from "./TimerContainer";
import { PropTypes } from "prop-types";

function getTimeRecord(now) {
  return `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 `;
}

const StartStopButton = ({ setTimeLogs, setIsCounting }) => {
  let now = new Date();

  const isCounting = useContext(isCountingContext);
  const timeLogs = useContext(timeLogsContext);
  const nextLogId = useContext(nextLogIdContext);

  const startTimer = () => {
    // start는 로그 자체를 추가하고, end는 마지막 로그에 값만 추가하는 것이다.
    let timeRecord = getTimeRecord(now);
    nextLogId.current += 1;
    setTimeLogs((timeLogs) => [
      ...timeLogs,
      { id: nextLogId.current, start: timeRecord, end: "" },
    ]); // end 넣을 필요가 있을까?
    setIsCounting((prevState) => !prevState);
  };

  const stopTimer = () => {
    // start는 로그 자체를 추가하고, end는 마지막 로그에 값만 추가하는 것이다.
    let timeRecord = getTimeRecord(now);
    setTimeLogs((timeLogs) =>
      timeLogs.map((log) =>
        log.id == nextLogId.current ? { ...log, end: timeRecord } : log
      )
    );
    setIsCounting((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center m-3">
      <div
        className="button w-3/4"
        onClick={isCounting ? stopTimer : startTimer}
      >
        {isCounting ? "Stop" : "Start"}
      </div>
    </div>
  );
};

StartStopButton.propTypes = {
  setTimeLogs: PropTypes.func, // { id: 0, start: "", end: "" } 형태의 매개변수, { id: 0, start: "", end: "" } 형태의 반환값
  setIsCounting: PropTypes.func,
};

export default StartStopButton;
