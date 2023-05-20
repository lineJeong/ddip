import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChangeInput = (event) => {
    if (
      typeof initialValue === "object" &&
      !Array.isArray(initialValue) &&
      initialValue !== null
    ) {
      const { name, value } = event.target;
      setValue((prev) => ({ ...prev, [name]: value }));
    } else {
      setValue(event.target.value);
    }
  };
  const handleReset = () => {
    setValue(initialValue);
  };

  return { value, handleChangeInput, handleReset };
}

export default useInput;
