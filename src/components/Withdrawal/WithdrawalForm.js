import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Button from "../UI/Button";
import Input from "../UI/Input";
import StatusMessage from "../UI/StatusMessage";

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

function WithdrawalForm({ email }) {
  const navigate = useNavigate();

  return (
    <>
      <StyledParagraph>
        탈퇴가 완료된 계정은 다시 복구할 수 없습니다.
      </StyledParagraph>
      <Input
        type="email"
        placeholder="이메일"
        radius="top"
        defaultValue={email}
        disabled
      />
      <Input type="password" placeholder="비밀번호" radius="bottom" />
      <StatusMessage hasStatusMessage>비밀번호를 입력해주세요.</StatusMessage>
      <StyledButtonContainer>
        <Button
          background="white"
          onClick={() => navigate(-1)}
          outline
          fullWidth
        >
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
