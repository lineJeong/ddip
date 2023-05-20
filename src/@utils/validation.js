export const isValidEmail = (email) => {
  const pattern =
    /^(?!.*[\s<>])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!pattern.test(email)) {
    return "유효한 이메일 주소를 입력해주세요.";
  }
  return "";
};

export const isValidNickname = (nickname) => {
  const pattern = /^[a-zA-Z0-9ㄱ-힣]{2,10}$/;
  let errorMessage = "";

  if (!pattern.test(nickname)) {
    if (nickname.length < 2 || nickname.length > 10) {
      errorMessage = "닉네임은 2자 이상 10자 이하여야 합니다.";
    } else {
      errorMessage = "닉네임은 영문, 숫자, 한글만 사용할 수 있습니다.";
    }
  }
  return errorMessage;
};

export const isValidPassword = (password) => {
  const pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?!.*[ㄱ-ㅎㅏ-ㅣ가-힣])[A-Za-z\d]{8,}$/;

  let errorMessage = "";

  if (!pattern.test(password)) {
    if (password.length < 8) {
      errorMessage = "비밀번호는 최소 8자리 이상이어야 합니다.";
    } else if (!/(?=.*[A-Za-z])/.test(password)) {
      errorMessage = "비밀번호는 최소한 하나의 영문자를 포함해야 합니다.";
    } else if (!/(?=.*\d)/.test(password)) {
      errorMessage = "비밀번호는 최소한 하나의 숫자를 포함해야 합니다.";
    } else if (/.*[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(password)) {
      errorMessage = "비밀번호에는 한글이 포함될 수 없습니다.";
    }
  }
  return errorMessage;
};

export const isValidConfirmPassword = (confirmPassword, password) => {
  if (confirmPassword !== password) {
    return "비밀번호가 일치하지 않습니다.";
  }
  return "";
};

export const combineTwoErrorMessage = (
  hasFirstError,
  firstErrorMessage,
  hasSecondError,
  secondErrorMessage
) => {
  const hasOnlySecondError = !hasFirstError && hasSecondError;
  let errorMessage = firstErrorMessage;
  if (hasOnlySecondError) {
    errorMessage = secondErrorMessage;
  }
  return errorMessage;
};
