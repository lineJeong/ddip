import styled from "styled-components";

import AuthPageContent from "../components/PageContent/AuthPageContent";
import Button from "../components/UI/Button";
import ErrorMsg from "../components/UI/ErrorMsg";
import Input from "../components/UI/Input";
import InputWithLabel from "../components/UI/InputWithLabel";

const InputWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

function SignupPage() {
  const inputs = (
    <>
      <InputWrapper>
        <InputWithLabel
          label="이메일"
          id="email-signup"
          type="email"
          placeholder="이메일"
        />
        <ErrorMsg hasError>이메일을 입력해주세요.</ErrorMsg>
      </InputWrapper>
      <InputWrapper>
        <InputWithLabel
          label="닉네임"
          id="nickname-signup"
          placeholder="닉네임"
          radius="top"
        />
        <Button background="white" radius="bottom" outline fullWidth>
          닉네임 중복 확인
        </Button>
        <ErrorMsg hasError>닉네임을 입력해주세요.</ErrorMsg>
      </InputWrapper>
      <InputWrapper>
        <InputWithLabel
          label="비밀번호"
          id="password-signup"
          type="password"
          placeholder="비밀번호"
          radius="top"
        />
        <Input
          id="repassword-signup"
          type="password"
          placeholder="비밀번호 확인"
          radius="bottom"
        />
        <ErrorMsg hasError>비밀번호를 입력해주세요.</ErrorMsg>
      </InputWrapper>
    </>
  );

  const buttons = (
    <Button background="mainViolet" color="white" fullWidth>
      이메일 인증하러 가기
    </Button>
  );

  return (
    <AuthPageContent heading="회원가입" inputs={inputs} buttons={buttons} />
  );
}

export default SignupPage;
