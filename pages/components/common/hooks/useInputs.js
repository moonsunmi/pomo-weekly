import React, { useCallback, useState } from "react";
import { PropTypes } from "prop-types";

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

useInputs.propTypes = {
  initialState: PropTypes.shape({
    taskName: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }),
};

export default useInputs;
