import React, { useState } from "react";

const useTasks = (initialState) => {
  const [tasks, setTasks] = useState(initialState);

  return [tasks];
};

export default useTasks;
