import InputWithLabel from "../UI/InputWithLabel";
import StatusMessage from "../UI/StatusMessage";

function EmailInput({ emailInput }) {
  return (
    <>
      <InputWithLabel
        label="이메일"
        id="email-signup"
        type="email"
        placeholder="이메일"
        value={emailInput.value}
        onChange={emailInput.handleChangeInput}
        onBlur={emailInput.handleBlurInput}
      />
      <StatusMessage hasStatusMessage={emailInput.hasError}>
        {emailInput.errorMessage}
      </StatusMessage>
    </>
  );
}

export default EmailInput;
