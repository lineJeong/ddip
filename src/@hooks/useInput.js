import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const inputChangeHandler = (event) => {
    if (typeof initialValue === "object") {
      const { name, value } = event.target;
      setValue((prev) => ({ ...prev, [name]: value }));
    } else {
      setValue(event.target.value);
    }
  };
  const resetHandler = () => {
    setValue(initialValue);
  };

  return { value, onChange: inputChangeHandler, onReset: resetHandler };
}

export default useInput;
