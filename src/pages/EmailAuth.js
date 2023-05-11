import AuthPageContent from "../components/PageContent/AuthPageContent";
import Button from "../components/UI/Button";
import ErrorMsg from "../components/UI/ErrorMsg";
import Input from "../components/UI/Input";

function EmailAuthPage() {
  const inputs = (
    <>
      <Input type="email" placeholder="이메일" radius="top" disabled />
      <Input placeholder="인증번호" radius="bottom" />
      <ErrorMsg hasError>인증번호를 입력해주세요.</ErrorMsg>
    </>
  );

  const buttons = (
    <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
      회원 가입 완료
    </Button>
  );

  return (
    <AuthPageContent heading="이메일 인증" inputs={inputs} buttons={buttons} />
  );
}

export default EmailAuthPage;
