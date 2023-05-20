import { useEffect, useState } from "react";

import useAxios from "./useAxios";

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

  const onSuccess = () => {
    setIsNicknameUnique(false);
  };
  const onError = (error) => {
    setIsNicknameUnique(true);
    console.error(error);
  };

  const { sendRequest, isLoading } = useAxios(onSuccess, onError);

  const handleCheckNickname = async () => {
    if (!isNicknameValid || isLoading) return;

    const config = {
      method: "GET",
      url: `/auth/users?nickname=${nickname}`
    };
    sendRequest(config);
  };

  return {
    isNicknameUnique,
    validMessage,
    hasValidMessage,
    handleCheckNickname,
    isLoading
  };
}

export default useUniqueNickname;
