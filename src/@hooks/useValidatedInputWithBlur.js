import { useEffect, useState } from "react";

const useValidatedInputWithBlur = (validate, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const errorMsg = validate(value);
  const isValid = errorMsg === null;
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

export default useValidatedInputWithBlur;
