function getDateFormat(day) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return `(${days[day.getDay()]}) ${day.getFullYear().toString().slice(2, 4)}.
    ${day.getMonth().toString().padStart(2, "0")}. 
    ${day.getDate().toString().padStart(2, "0")}. 
    ${day.getHours().toString().padStart(2, "0")} :
    ${day.getMinutes().toString().padStart(2, "0")}`;
}

const TimeLog = ({ timeLog }) => {
  // 여기서 useContext를 쓸 수도 있다.
  return (
    <div className="logContainer">
      {getDateFormat(timeLog.start)} -{" "}
      {timeLog.end && getDateFormat(timeLog.end)}
    </div>
  );
};

export default TimeLog;
