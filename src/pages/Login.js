import AuthPageContent from "../components/PageContent/AuthPageContent";
import Button from "../components/UI/Button";
import ErrorMsg from "../components/UI/ErrorMsg";
import Input from "../components/UI/Input";

function LoginPage() {
  const inputs = (
    <>
      <Input type="email" placeholder="이메일" radius="top" />
      <Input type="password" placeholder="비밀번호" radius="bottom" />
      <ErrorMsg hasError>이메일을 입력해주세요.</ErrorMsg>
    </>
  );

  const buttons = (
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

  return <AuthPageContent heading="로그인" inputs={inputs} buttons={buttons} />;
}

export default LoginPage;
