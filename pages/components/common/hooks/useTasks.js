import React, { useContext, useState } from "react";
import { tasksContext } from "../../../_app";

const useTasks = () => {
  // {taskName: "샘플 테스크", category: "샘플 카테고리", date: "샘플 데이트", time: "샘플 타임"},
  const tasks = useContext(tasksContext);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return [tasks, addTask];
};

export default useTasks;
