import styled from "styled-components";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const InputContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

function LoginPage() {
  return (
    <>
      <h1>로그인</h1>
      <InputContainer>
        <Input type="email" placeholder="이메일" radius="top" />
        <Input type="password" placeholder="비밀번호" radius="bottom" />
      </InputContainer>

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

export default LoginPage;
