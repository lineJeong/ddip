import Button from "../UI/Button";
import Input from "../UI/Input";
import StatusMessage from "../UI/StatusMessage";

function EmailAuthForm({
  email,
  handleSubmit,
  value,
  hasError,
  errorMessage,
  handleChangeInput,
  handleBlurInput
}) {
  return (
    <>
      <Input
        type="email"
        placeholder="이메일"
        radius="top"
        defaultValue={email}
        disabled
      />
      <Input
        placeholder="인증번호"
        radius="bottom"
        value={value}
        onChange={handleChangeInput}
        onBlur={handleBlurInput}
      />
      <StatusMessage hasStatusMessage={hasError}>{errorMessage}</StatusMessage>
      <Button
        onClick={handleSubmit}
        background="mainViolet"
        color="white"
        marginTop="16px"
        fullWidth
      >
        회원 가입 완료
      </Button>
    </>
  );
}

export default EmailAuthForm;
