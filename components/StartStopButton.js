import { useContext, useState } from "react";
import { timeLogsContext } from "../pages";
import { isCountingContext } from "./TimerContainer";

function getTimeRecord(now) {
  return `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 `;
}

const StartStopButton = ({ nextLogId, addtimeLogs, setIsCounting }) => {
  let startStopButton;
  let now = new Date();

  const isCounting = useContext(isCountingContext);
  const timetimeLogs = useContext(timeLogsContext);

  const startTimer = () => {
    // start는 로그 자체를 추가하고, end는 마지막 로그에 값만 추가하는 것이다.
    let timeRecord = getTimeRecord(now);
    nextLogId.current += 1;
    addtimeLogs((timetimeLogs) => [
      ...timetimeLogs,
      { id: nextLogId.current, start: timeRecord, end: "" },
    ]); // end 넣을 필요가 있을까?
    setIsCounting((prevState) => !prevState);
  };

  const stopTimer = () => {
    // start는 로그 자체를 추가하고, end는 마지막 로그에 값만 추가하는 것이다.
    console.log(timetimeLogs);
    let timeRecord = getTimeRecord(now);
    addtimeLogs((timetimeLogs) =>
      timetimeLogs.map((log) =>
        log.id == nextLogId.current ? { ...log, end: timeRecord } : log
      )
    );
    setIsCounting((prevState) => !prevState);
  };

  if (isCounting) {
    startStopButton = (
      <div className="button w-3/4" onClick={stopTimer}>
        Stop
      </div>
    );
  } else {
    startStopButton = (
      <div className="button w-3/4" onClick={startTimer}>
        Start
      </div>
    );
  }

  return <div className="flex justify-center m-3">{startStopButton}</div>;
};

export default StartStopButton;
