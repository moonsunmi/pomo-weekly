import React, { useState } from "react";
import { PropTypes } from "prop-types";

const Schedule = ({ age }) => {
  const [count, setCount] = useState(0);

  return <div>{age}</div>;
};

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

export default Schedule;
