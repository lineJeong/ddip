import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChangeInput = (event) => {
    if (typeof initialValue === "object") {
      const { name, value } = event.target;
      setValue((prev) => ({ ...prev, [name]: value }));
    } else {
      setValue(event.target.value);
    }
  };
  const handleReset = () => {
    setValue(initialValue);
  };

  return { value, onChange: handleChangeInput, onReset: handleReset };
}

export default useInput;
