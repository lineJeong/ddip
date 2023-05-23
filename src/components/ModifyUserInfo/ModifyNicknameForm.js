import styled from "styled-components";

import Button from "../UI/Button";
import InputWithLabel from "../UI/InputWithLabel";
import StatusMessage from "../UI/StatusMessage";

const StyledModifyNicknameForm = styled.section`
  width: 100%;
  margin-bottom: 40px;
`;

function ModifyNicknameForm({ value, onChange }) {
  return (
    <StyledModifyNicknameForm>
      <InputWithLabel
        id="modify-nickname"
        label="닉네임"
        value={value}
        onChange={onChange}
        radius="top"
      />
      <Button background="white" radius="bottom" size="sm" outline fullWidth>
        닉네임 중복 확인
      </Button>
      <StatusMessage hasStatusMessage>닉네임을 입력해주세요.</StatusMessage>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        닉네임 변경하기
      </Button>
    </StyledModifyNicknameForm>
  );
}

export default ModifyNicknameForm;
