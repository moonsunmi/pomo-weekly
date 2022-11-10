import React, { useState } from "react";

function getTimeRecord(now) {
  return `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 `;
}

const StartStopButton = ({
  nextLogId,
  logs,
  addLogs,
  isCounting,
  setIsCounting,
}) => {
  let startStopButton;
  let now = new Date();

  const startTimer = () => {
    // start는 로그 자체를 추가하고, end는 마지막 로그에 값만 추가하는 것이다.
    let timeRecord = getTimeRecord(now);
    addLogs([...logs, { id: nextLogId.current, start: timeRecord, end: "" }]); // end 넣을 필요가 있을까?
    setIsCounting(true);
    nextLogId.current += 1;
  };

  const stopTimer = () => {
    // start는 로그 자체를 추가하고, end는 마지막 로그에 값만 추가하는 것이다.
    let lastLogId = nextLogId.current - 1;
    let timeRecord = getTimeRecord(now);
    addLogs(
      logs.map((log) =>
        log.id == lastLogId ? { ...log, end: timeRecord } : log
      )
    );
    setIsCounting(false);
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
