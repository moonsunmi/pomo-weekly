import React, { useCallback, useReducer, useState } from "react";

function inputReducer(state, action) {
  switch (action.type) {
    case "CHANGE": // type, name, value
      return { ...state, [action.name]: action.value };
    case "RESET":
      return { ...action.initialInput };
    default:
      return new Error(`Not Handled Action Type ${action.type}`);
  }
}

const useInputs = (initialInput) => {
  // input에서 받을 인풋과 아웃풋을 생각해 보자.

  const [inputs, dispatch] = useReducer(inputReducer, initialInput);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET", initialInput });
  }, [initialInput]);

  return [inputs, handleChange, handleReset];
};

export default useInputs;
