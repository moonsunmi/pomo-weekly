import React, { useContext, useState } from "react";
import { PropTypes } from "prop-types";
import { tasksContext } from "../../_app";

const Schedule = () => {
  const [count, setCount] = useState(0);

  const tasks = useContext(tasksContext); // {taskName: "샘플 테스크", category: "샘플 카테고리", date: "샘플 데이트", time: "샘플 타임"},

  console.log(tasks);
  return (
    <div>
      <div className="logContainer">
        {tasks.map((task) => (
          <p>
            {task.taskName} | {task.category} | {task.date} | {task.time}
          </p>
        ))}
      </div>
    </div>
  );
};

/*
Schedule.propTypes = {
  age: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        It must be 10 <= value <= 20.`
      );
    }
  },
};
*/
export default Schedule;
