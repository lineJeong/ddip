import Button from "../UI/Button";
import ErrorMsg from "../UI/ErrorMsg";
import Input from "../UI/Input";

function EmailAuthForm() {
  return (
    <>
      <Input type="email" placeholder="이메일" radius="top" disabled />
      <Input placeholder="인증번호" radius="bottom" />
      <ErrorMsg hasError>인증번호를 입력해주세요.</ErrorMsg>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        회원 가입 완료
      </Button>
    </>
  );
}

export default EmailAuthForm;
