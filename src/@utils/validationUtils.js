import { particlesMatching } from "../@constants/particlesMatching";

export const validateEmail = (email) => {
  const pattern =
    /^(?!.*[\s<>])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!pattern.test(email)) {
    return "유효한 이메일 주소를 입력해주세요.";
  }
  return null;
};

export const validateNickname = (nickname) => {
  const pattern = /^[a-zA-Z0-9ㄱ-힣]{2,10}$/;

  if (!pattern.test(nickname)) {
    if (nickname.length < 2 || nickname.length > 10) {
      return "닉네임은 2자 이상 10자 이하여야 합니다.";
    } else {
      return "닉네임은 영문, 숫자, 한글만 사용할 수 있습니다.";
    }
  }
  return null;
};

export const validatePassword = (password) => {
  const pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?!.*[ㄱ-ㅎㅏ-ㅣ가-힣])[A-Za-z\d]{8,}$/;

  if (!pattern.test(password)) {
    if (password.length < 8) {
      return "비밀번호는 최소 8자 이상이어야 합니다.";
    }
    if (!/(?=.*[A-Za-z])/.test(password)) {
      return "비밀번호에는 최소한 하나의 영문자가 포함되어야 합니다.";
    }
    if (!/(?=.*\d)/.test(password)) {
      return "비밀번호에는 최소한 하나의 숫자가 포함되어야 합니다.";
    }
    if (/.*[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(password)) {
      return "비밀번호에는 한글이 포함될 수 없습니다.";
    }
    if (/.*\s/.test(password)) {
      return "비밀번호에는 공백이 포함될 수 없습니다.";
    }
  }

  return null;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }
  return null;
};

export const validateNotEmpty = (label, value) => {
  if (!value.trim().length > 0) {
    const particle = particlesMatching[label] || "을(를)";
    return `${label}${particle} 입력해주세요.`;
  }
  return null;
};

export const combineErrorMessages = (...errorMessages) => {
  const validErrorMessages = errorMessages.filter(
    (errorMessage) =>
      typeof errorMessage === "string" && errorMessage.trim() !== ""
  );

  if (validErrorMessages.length === 0) {
    return null;
  }

  return validErrorMessages[0];
};
