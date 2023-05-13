import styled from "styled-components";

import Button from "../UI/Button";
import ErrorMsg from "../UI/ErrorMsg";
import Input from "../UI/Input";
import InputWithLabel from "../UI/InputWithLabel";

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
      <ErrorMsg hasError>비밀번호를 입력해주세요.</ErrorMsg>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        비밀번호 변경하기
      </Button>
    </StyledModifyPasswordForm>
  );
}

export default ModifyPasswordForm;
