import React, { useCallback, useReducer, useState } from "react";
import { PropTypes } from "prop-types";

const today = new Date();

const dateToString_yyyy_MM_dd = (date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

/*
const timeToString_mm_ss = (date) => {
  return `${date.getHours()}:${date.getMinutes()}`;
};
*/

const initialInput = {
  taskName: "",
  date: dateToString_yyyy_MM_dd(today),
  //time: timeToString_mm_ss(today),
};

function inputReducer(state, action) {
  switch (action.type) {
    case "CHANGE": // type, name, value
      return { ...state, [action.name]: action.value };
    case "RESET":
      return { ...initialInput };
    default:
      return new Error(`Not Handled Action Type ${action.type}`);
  }
}

const useInputs = () => {
  const [inputs, dispatch] = useReducer(inputReducer, initialInput);

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);

  const resetInput = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  console.log(inputs);
  return [inputs, onChangeInput, resetInput];
};

/*
....Reducer로 만드는 중...
const useInputs = (initialState) => {
  const [inputs, setInputs] = useState(initialState);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setInputs(initialState);
  }, [initialState]);

  return [inputs, onChange, reset];
};

*/

useInputs.propTypes = {
  initialState: PropTypes.shape({
    taskName: PropTypes.string,
    date: PropTypes.Date,
  }),
};

export default useInputs;
