import React, { useContext, useState } from "react";
import { tasksContext, timeLogsContext } from "../../_app";
import useInputs from "../common/hooks/useInputs";
import useSelectOptions from "../common/hooks/useSelectOptions";
import useTasks from "../common/hooks/useTasks";
import Schedule from "./Schedule";

const categoryOptions = [
  { value: "banana", text: "banana" },
  { value: "kiwi", text: "kiwi" },
  { value: "tomato", text: "tomato" },
];

const Reservation = () => {
  // -------------------- <input> ----------------------
  const [selectedCategory, onChangeOption, resetOption] =
    useSelectOptions(categoryOptions);

  const [{ taskName, date }, onChangeInput, resetInput] = useInputs();

  /*
  // -------------------- Schdule ----------------------
  const testLogs = useContext(timeLogsContext); //<???
  const [age, setAge] = useState(18); // for test. must be deleted.

  const initialTasks = useContext(tasksContext);
  const [tasks, addTask] = useTasks(initialTasks); // {taskName: "샘플 테스크", category: "샘플 카테고리", date: "샘플 데이트", time: "샘플 타임"},

  console.log(tasks);
  //const [task, setTask] = useState({});

  const onAddTask = () => {
    addTask({
      taskName: { taskName },
      category: { selectedCategory },
      date: { date },
      time: { time },
    });
    resetInput();
    resetOption();
  };
*/
  return (
    <div className="flex flex-col items-center">
      <div className="mainContainer ">
        {/* 하단의 input들을 컴포넌트로 만들어야 할까? */}
        <input
          className="border border-yellow-400 mb-2 bg-yellow-50"
          name="taskName"
          placeholder="Task Name"
          value={taskName}
          onChange={onChangeInput}
        />
        <select
          name="category"
          value={selectedCategory}
          onChange={onChangeOption}
        >
          {categoryOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <input
          className="border border-yellow-400  bg-yellow-50  mb-2"
          name="date"
          type="date"
          id="startDate"
          value={date}
          onChange={onChangeInput}
        />
        {/*
        <input
          className="border border-yellow-400  bg-yellow-50  mb-2"
          name="time"
          type="time"
          value={time}
          onChange={onChangeInput}
        />
        */}
        <button className="button w-60" onClick={resetInput}>
          뽀모도로 예약
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Reservation;
