import { useEffect, useState } from "react";

import * as authAPI from "../@api/authAPI";

function useUniqueNickname(nickname, isNicknameValid, handleBlurNickname) {
  const [isNicknameUnique, setIsNicknameUnique] = useState(null);
  const [nicknameStatusMessage, setNicknameStatusMessage] = useState(null);
  const [isClickedToSubmit, setIsClickedToSubmit] = useState(false);

  const hasCheckedNickname = isNicknameUnique !== null;
  const hasNotCheckedNicknameWhenSubmit =
    isClickedToSubmit && !hasCheckedNickname;

  useEffect(() => {
    setIsNicknameUnique(null);
    setIsClickedToSubmit(false);
  }, [nickname]);

  useEffect(() => {
    if (isNicknameUnique === true) {
      setNicknameStatusMessage("사용 가능한 닉네임 입니다.");
    } else if (isNicknameUnique === false) {
      setNicknameStatusMessage("이미 존재하는 닉네임 입니다.");
    } else if (hasNotCheckedNicknameWhenSubmit) {
      setNicknameStatusMessage("닉네임 중복 확인이 필요합니다.");
    }
  }, [isNicknameUnique, hasNotCheckedNicknameWhenSubmit]);

  const hadleCheckNicknameDuplicate = async () => {
    if (!isNicknameValid) {
      handleBlurNickname();
      return;
    }

    try {
      await authAPI.validateNickname(nickname);
      setIsNicknameUnique(false);
    } catch (error) {
      setIsNicknameUnique(true);
      console.error(error);
    }
  };

  const handleCheckNicknameWhenSubmit = () => {
    setIsClickedToSubmit(true);
  };

  return {
    isNicknameUnique,
    nicknameStatusMessage,
    hasCheckedNickname,
    hadleCheckNicknameDuplicate,
    hasNotCheckedNicknameWhenSubmit,
    handleCheckNicknameWhenSubmit
  };
}

export default useUniqueNickname;
