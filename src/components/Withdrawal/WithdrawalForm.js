import styled from "styled-components";

import Button from "../UI/Button";
import Input from "../UI/Input";
import ValidMessage from "../UI/ValidMessage";

const StyledParagraph = styled.p`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  gap: 10px;
`;

function WithdrawalForm() {
  return (
    <>
      <StyledParagraph>
        탈퇴가 완료된 계정은 다시 복구할 수 없습니다.
      </StyledParagraph>
      <Input type="email" placeholder="이메일" radius="top" disabled />
      <Input type="password" placeholder="비밀번호" radius="bottom" />
      <ValidMessage hasValidMessage>비밀번호를 입력해주세요.</ValidMessage>
      <StyledButtonContainer>
        <Button background="white" outline fullWidth>
          취소
        </Button>
        <Button background="mainViolet" color="white" fullWidth>
          회원 탈퇴
        </Button>
      </StyledButtonContainer>
    </>
  );
}

export default WithdrawalForm;
