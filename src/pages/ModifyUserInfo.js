import { Link } from "react-router-dom";

import styled from "styled-components";

import ModifyEmoji from "../components/ModifyUserInfo/ModifyEmoji";
import ModifyNickname from "../components/ModifyUserInfo/ModifyNickname";
import ModifyPassword from "../components/ModifyUserInfo/ModifyPassword";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

const StyledLink = styled(Link)`
  width: 100%;
  text-align: right;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

function ModifyUserInfoPage() {
  const userInfo = {
    emoji: "😶‍🌫️",
    nickname: "닉네임입니다"
  };

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="프로필 수정">
        <ModifyEmoji emoji={userInfo.emoji} />
        <ModifyNickname />
        <ModifyPassword />
        <StyledLink to={`/profile/withdraw`}>회원 탈퇴하기</StyledLink>
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default ModifyUserInfoPage;
