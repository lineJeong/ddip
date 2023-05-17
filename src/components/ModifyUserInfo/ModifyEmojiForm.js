import styled from "styled-components";

import Button from "../UI/Button";
import IconButton from "../UI/IconButton";

const StyledModifyEmojiForm = styled.section`
  width: 100%;
  margin-bottom: 40px;
  > .label {
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin-bottom: 6px;
  }
  > .emoji-change-box {
    display: flex;
    > .emoji {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 5px;
      height: 60px;
      margin-right: 10px;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

function ModifyEmojiForm({ emoji }) {
  return (
    <StyledModifyEmojiForm>
      <div className="label">이모지</div>
      <div className="emoji-change-box">
        <div className="emoji">{emoji}</div>
        <IconButton width="60px" height="60px" background="mainMauve">
          <img src="/images/refresh.svg" alt="random change" />
        </IconButton>
      </div>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        이모지 변경하기
      </Button>
    </StyledModifyEmojiForm>
  );
}

export default ModifyEmojiForm;
