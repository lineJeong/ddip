import Button from "../UI/Button";
import ErrorMsg from "../UI/ErrorMsg";
import Input from "../UI/Input";

function LoginForm() {
  return (
    <>
      <Input type="email" placeholder="이메일" radius="top" />
      <Input type="password" placeholder="비밀번호" radius="bottom" />
      <ErrorMsg hasError>이메일을 입력해주세요.</ErrorMsg>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        로그인
      </Button>
      <Button
        background="white"
        color="black"
        marginTop="8px"
        outline
        fullWidth
      >
        회원가입
      </Button>
    </>
  );
}

export default LoginForm;
