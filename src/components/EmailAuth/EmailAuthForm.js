import Button from "../UI/Button";
import Input from "../UI/Input";
import StatusMessage from "../UI/StatusMessage";

function EmailAuthForm({
  state,
  emailInput,
  authNumberInput,
  combinedErrorMessage,
  handleSubmit,
  serverErrorMessage
}) {
  const hasEmailError = state ? !state.isEmailValid : emailInput.hasError;

  return (
    <>
      <Input
        type="email"
        placeholder="이메일"
        radius="top"
        disabled={state}
        value={state ? state.email : emailInput.value}
        onChange={emailInput.handleChangeInput}
        onBlur={emailInput.handleBlurInput}
      />
      <Input
        placeholder="인증번호"
        radius="bottom"
        value={authNumberInput.value}
        onChange={authNumberInput.handleChangeInput}
        onBlur={authNumberInput.handleBlurInput}
      />
      <StatusMessage
        hasStatusMessage={hasEmailError || authNumberInput.hasError}
      >
        {combinedErrorMessage}
      </StatusMessage>
      <StatusMessage hasStatusMessage={!!serverErrorMessage}>
        {serverErrorMessage}
      </StatusMessage>
      <Button
        background="mainViolet"
        color="white"
        marginTop="16px"
        fullWidth
        onClick={handleSubmit}
      >
        이메일 인증하기
      </Button>
    </>
  );
}

export default EmailAuthForm;
