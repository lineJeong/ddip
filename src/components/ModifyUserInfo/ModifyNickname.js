import styled from "styled-components";

import Button from "../UI/Button";
import InputWithLabel from "../UI/InputWithLabel";

const StyledModifyNickname = styled.section`
  width: 100%;
  margin-bottom: 40px;
`;

function ModifyNickname({ value, onChange }) {
  return (
    <StyledModifyNickname>
      <InputWithLabel
        id="modify-nickname"
        label="닉네임"
        value={value}
        onChange={onChange}
        radius="top"
      />
      <Button background="white" radius="bottom" outline fullWidth>
        닉네임 중복 확인
      </Button>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        닉네임 변경하기
      </Button>
    </StyledModifyNickname>
  );
}

export default ModifyNickname;
