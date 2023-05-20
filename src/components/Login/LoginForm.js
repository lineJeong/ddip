import Button from "../UI/Button";
import Input from "../UI/Input";
import ValidMessage from "../UI/ValidMessage";

function LoginForm() {
  return (
    <>
      <Input type="email" placeholder="이메일" radius="top" />
      <Input type="password" placeholder="비밀번호" radius="bottom" />
      <ValidMessage hasValidMessage>이메일을 입력해주세요.</ValidMessage>
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
