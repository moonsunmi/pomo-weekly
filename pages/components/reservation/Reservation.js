import React, { useContext, useState } from "react";
import { timeLogsContext } from "../../_app";
import useInputs from "../common/hooks/useInputs";
import useSelectOptions from "../common/hooks/useSelectOptions";
import useTasks from "../common/hooks/useTasks";
import Schedule from "../Schedule";

const dateToString_yyyy_MM_dd = (date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

const timeToString_mm_ss = (date) => {
  return `${date.getHours()}:${date.getMinutes()}`;
};

const categoryOptions = [
  { value: "banana", text: "banana" },
  { value: "kiwi", text: "kiwi" },
  { value: "tomato", text: "tomato" },
];

const Reservation = () => {
  const testLogs = useContext(timeLogsContext);
  const [age, setAge] = useState(18); // for test. must be deleted.
  const today = new Date();

  const [selectedCategory, onChangeOption, resetOption] =
    useSelectOptions(categoryOptions);

  const [{ taskName, date, time }, onChangeInput, resetInput] = useInputs({
    taskName: "",
    date: dateToString_yyyy_MM_dd(today),
    time: timeToString_mm_ss(today),
  });

  // const [tasks] = useTasks({ taksName: "", category: "", date: "", time: "" });

  const onReset = () => {
    resetInput();
    resetOption();
  };
  return (
    <div className="flex content-center">
      <div className="mainContainer ">
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
        <input
          className="border border-yellow-400  bg-yellow-50  mb-2"
          name="time"
          type="time"
          value={time}
          onChange={onChangeInput}
        />
        <button className="button w-60" onClick={onReset}>
          뽀모도로 예약
        </button>
        {testLogs.map((log) => log.id) /* must be deleted */}
      </div>
      <Schedule age={age} />
    </div>
  );
};

export default Reservation;
