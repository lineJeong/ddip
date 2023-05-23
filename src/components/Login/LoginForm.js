import styled from "styled-components";

import Button from "../UI/Button";
import Input from "../UI/Input";
import StatusMessage from "../UI/StatusMessage";

const StyledLoginForm = styled.form.attrs(({ onSubmit }) => ({ onSubmit }))`
  width: 100%;
`;

function LoginForm({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  handleSubmitLogin,
  showErrorMessage,
  errorMessage,
  serverErrorMessage
}) {
  return (
    <>
      <StyledLoginForm onSubmit={handleSubmitLogin}>
        <Input
          name="email"
          type="email"
          placeholder="이메일"
          radius="top"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          radius="bottom"
          value={password}
          onChange={handleChangePassword}
          autocomplete="current-password"
        />
        <StatusMessage hasStatusMessage={showErrorMessage}>
          {errorMessage}
        </StatusMessage>
        <StatusMessage hasStatusMessage={!!serverErrorMessage}>
          {serverErrorMessage}
        </StatusMessage>
        <Button
          background="mainViolet"
          color="white"
          marginTop="16px"
          fullWidth
        >
          로그인
        </Button>
      </StyledLoginForm>
      <Button
        type="button"
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
