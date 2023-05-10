import AuthPageLayout from "../components/AuthPageLayout";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

function LoginPage() {
  const input = (
    <>
      <Input type="email" placeholder="이메일" radius="top" />
      <Input type="password" placeholder="비밀번호" radius="bottom" />
    </>
  );

  const button = (
    <>
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

  return <AuthPageLayout heading="로그인" input={input} button={button} />;
}

export default LoginPage;
