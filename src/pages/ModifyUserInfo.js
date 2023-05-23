import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import useValidatedInputWithBlur from "../@hooks/useValidatedInputWithBlur";
import { useAuthValue } from "../@store/use-auth";
import * as authUtils from "../@utils/authUtils";
import * as validationUtils from "../@utils/validationUtils";
import ModifyEmojiForm from "../components/ModifyUserInfo/ModifyEmojiForm";
import ModifyNicknameForm from "../components/ModifyUserInfo/ModifyNicknameForm";
import ModifyPasswordForm from "../components/ModifyUserInfo/ModifyPasswordForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

const StyledLink = styled(Link)`
  width: 100%;
  text-align: right;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

function ModifyUserInfoPage() {
  const { userInfo } = useAuthValue();

  const [emoji, setEmoji] = useState(userInfo ? userInfo.emoji : "");
  const nicknameInput = useValidatedInputWithBlur(
    validationUtils.validateNickname,
    userInfo ? userInfo.nickname : ""
  );

  const handleClickRandomEmoji = () => {
    const randomEmoji = authUtils.getRandomEmoji();
    setEmoji(randomEmoji);
  };

  if (!userInfo) return;

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="프로필 수정">
        <ModifyEmojiForm
          emoji={emoji}
          handleClickRandomEmoji={handleClickRandomEmoji}
        />
        <ModifyNicknameForm {...nicknameInput} />
        <ModifyPasswordForm />
        <StyledLink to="/profile/withdraw">회원 탈퇴하기</StyledLink>
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default ModifyUserInfoPage;
