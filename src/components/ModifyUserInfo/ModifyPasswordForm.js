import styled from "styled-components";

import Button from "../UI/Button";
import Input from "../UI/Input";
import InputWithLabel from "../UI/InputWithLabel";
import ValidMessage from "../UI/ValidMessage";

const StyledModifyPasswordForm = styled.section`
  width: 100%;
  margin-bottom: 60px;
`;

function ModifyPasswordForm() {
  return (
    <StyledModifyPasswordForm>
      <InputWithLabel
        id="modify-password"
        label="비밀번호"
        placeholder="현재 비밀번호"
        radius="top"
      />
      <Input placeholder="새 비밀번호" radius="none" />
      <Input placeholder="새 비밀번호 확인" radius="bottom" />
      <ValidMessage hasValidMessage>비밀번호를 입력해주세요.</ValidMessage>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        비밀번호 변경하기
      </Button>
    </StyledModifyPasswordForm>
  );
}

export default ModifyPasswordForm;
