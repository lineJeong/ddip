import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Button from "../UI/Button";

const StyledUserInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  > .emoji {
    height: 120px;
    width: 120px;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 40px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .nickname {
    font-size: ${({ theme }) => theme.fontSize["3xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 16px;
  }
  > .email {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.palette.gray4};
    margin-bottom: 24px;
  }
`;

const StyledButtonContainer = styled.div`
  display: inline-flex;
  gap: 10px;
`;

function UserInfo({ emoji, nickname, email }) {
  const navigate = useNavigate();
  return (
    <StyledUserInfo>
      <div className="emoji">{emoji}</div>
      <p className="nickname">{nickname}</p>
      <p className="email">{email}</p>
      <StyledButtonContainer>
        <Button background="gray1" onClick={() => navigate(`/profile/modify`)}>
          로그아웃
        </Button>
        <Button
          background="mainMauve"
          onClick={() => navigate(`/profile/modify`)}
        >
          프로필 수정
        </Button>
      </StyledButtonContainer>
    </StyledUserInfo>
  );
}

export default UserInfo;
