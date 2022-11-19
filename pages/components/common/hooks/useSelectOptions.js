import { useCallback, useState } from "react";
import PropTypes from "prop-types";

const useSelectOptions = (options) => {
  const [selected, setSelected] = useState(options[0].value);

  const onChange = useCallback((e) => {
    setSelected(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    setSelected(options[0].value);
  }, [options]);

  return [selected, onChange, onReset];
};

useSelectOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default useSelectOptions;
