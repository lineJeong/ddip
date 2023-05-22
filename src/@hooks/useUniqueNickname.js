import { useEffect, useState } from "react";

import * as authAPI from "../@api/authAPI";

function useUniqueNickname(nickname, isNicknameValid) {
  const [isNicknameUnique, setIsNicknameUnique] = useState(null);
  const [validMessage, setValidMessage] = useState(null);
  const hasValidMessage = isNicknameUnique !== null;

  useEffect(() => {
    setIsNicknameUnique(null);
  }, [nickname]);

  useEffect(() => {
    if (isNicknameUnique === true) {
      setValidMessage("사용 가능한 닉네임 입니다.");
    } else if (isNicknameUnique === false) {
      setValidMessage("이미 존재하는 닉네임 입니다.");
    } else {
      setValidMessage(null);
    }
  }, [isNicknameUnique]);

  const handleCheckNickname = async () => {
    if (!isNicknameValid) return;

    try {
      await authAPI.validateNickname(nickname);
      setIsNicknameUnique(false);
    } catch (error) {
      setIsNicknameUnique(true);
      console.error(error);
    }
  };

  return {
    isNicknameUnique,
    validMessage,
    hasValidMessage,
    handleCheckNickname
  };
}

export default useUniqueNickname;
