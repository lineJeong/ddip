import { useEffect, useState } from "react";

const useValidInput = (validate, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const errorMsg = validate(value);
  const isValid = errorMsg.trim() === "";
  const hasError = !isValid && isTouched;

  useEffect(() => {
    setErrorMessage(errorMsg);
  }, [errorMsg]);

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };
  const handleBlurInput = () => {
    setIsTouched(true);
  };
  const handleReset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    errorMessage,
    handleChangeInput,
    handleBlurInput,
    handleReset
  };
};

export default useValidInput;
