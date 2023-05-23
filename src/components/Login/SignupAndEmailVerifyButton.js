import { Link } from "react-router-dom";

import styled from "styled-components";

import Button from "../UI/Button";

const StyledLink = styled(Link)`
  align-self: end;
  margin-top: 16px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

function SignupAndEmailVerifyButton({ handleClickSignup }) {
  return (
    <>
      <Button
        type="button"
        background="white"
        color="black"
        marginTop="8px"
        onClick={handleClickSignup}
        outline
        fullWidth
      >
        회원가입
      </Button>
      <StyledLink to="/email-auth">이메일 인증하러 가기</StyledLink>
    </>
  );
}

export default SignupAndEmailVerifyButton;
