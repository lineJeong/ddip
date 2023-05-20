import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import useAxios from "../../@hooks/useAxios";
import useUniqueNickname from "../../@hooks/useUniqueNickname";
import useValidInput from "../../@hooks/useValidInput";
import * as validationUtil from "../../@utils/validation";
import Button from "../UI/Button";
import Input from "../UI/Input";
import InputWithLabel from "../UI/InputWithLabel";
import ValidMessage from "../UI/ValidMessage";

const InputWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

function SignupForm() {
  const navigate = useNavigate();

  const {
    value: email,
    isValid: isEmailValid,
    hasError: hasEmailError,
    errorMessage: emailErrorMessage,
    handleChangeInput: handleChangeEmail,
    handleBlurInput: handleBlurEmail
  } = useValidInput(validationUtil.isValidEmail);
  const {
    value: nickname,
    isValid: isNicknameValid,
    hasError: hasNicknameError,
    errorMessage: nicknameErrorMessage,
    handleChangeInput: handleChangeNickname,
    handleBlurInput: handleBlurNickname
  } = useValidInput(validationUtil.isValidNickname);
  const {
    value: password,
    isValid: isPasswordValid,
    hasError: hasPasswordError,
    errorMessage: passwordErrorMessage,
    handleChangeInput: handleChangePassword,
    handleBlurInput: handleBlurPassword
  } = useValidInput(validationUtil.isValidPassword);
  const {
    value: confirmPassword,
    isValid: isConfirmPasswordValid,
    hasError: hasConfirmPasswordError,
    errorMessage: confirmPasswordErrorMessage,
    handleChangeInput: handleChangeConfirmPassword,
    handleBlurInput: handleBlurConfirmPassword
  } = useValidInput(validationUtil.isValidConfirmPassword.bind(null, password));

  const {
    isNicknameUnique,
    validMessage,
    hasValidMessage,
    handleCheckNickname,
    isLoading: isNicknameLoading
  } = useUniqueNickname(nickname, isNicknameValid);

  const combinedPasswordErrorMessage = validationUtil.combineTwoErrorMessage(
    hasPasswordError,
    passwordErrorMessage,
    hasConfirmPasswordError,
    confirmPasswordErrorMessage
  );

  let isFormValid = false;
  if (
    isEmailValid &&
    isNicknameValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isNicknameUnique
  ) {
    isFormValid = true;
  }

  const onSuccess = () => {
    navigate("/email-auth", {
      state: { email, isEmailValid }
    });
  };

  const { error, isLoading, sendRequest } = useAxios(onSuccess);

  // 추후 이모지도 랜덤으로 전송해야 함!!
  const handleSubmit = () => {
    if (!isFormValid || isLoading) return;

    const config = {
      method: "POST",
      url: "/auth/signup",
      data: {
        email,
        nickname,
        password
      }
    };
    sendRequest(config);
    console.error(error);
  };

  return (
    <>
      <InputWrapper>
        <InputWithLabel
          label="이메일"
          id="email-signup"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
        />
        <ValidMessage hasValidMessage={hasEmailError}>
          {emailErrorMessage}
        </ValidMessage>
      </InputWrapper>
      <InputWrapper>
        <InputWithLabel
          label="닉네임"
          id="nickname-signup"
          placeholder="닉네임"
          radius="top"
          value={nickname}
          onChange={handleChangeNickname}
          onBlur={handleBlurNickname}
        />
        <Button
          background="white"
          radius="bottom"
          size="sm"
          outline
          fullWidth
          onClick={handleCheckNickname}
          disabled={isNicknameLoading || hasNicknameError}
        >
          닉네임 중복 확인
        </Button>
        <ValidMessage hasValidMessage={hasNicknameError}>
          {nicknameErrorMessage}
        </ValidMessage>
        <ValidMessage
          hasValidMessage={hasValidMessage}
          success={isNicknameUnique}
        >
          {validMessage}
        </ValidMessage>
      </InputWrapper>
      <InputWrapper>
        <InputWithLabel
          label="비밀번호"
          id="password-signup"
          type="password"
          placeholder="비밀번호"
          radius="top"
          value={password}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
        />
        <Input
          id="repassword-signup"
          type="password"
          placeholder="비밀번호 확인"
          radius="bottom"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          onBlur={handleBlurConfirmPassword}
        />
        <ValidMessage
          hasValidMessage={hasPasswordError || hasConfirmPasswordError}
        >
          {combinedPasswordErrorMessage}
        </ValidMessage>
      </InputWrapper>
      <Button
        background="mainViolet"
        color="white"
        onClick={handleSubmit}
        disabled={!isFormValid || isLoading}
        fullWidth
      >
        이메일 인증하러 가기
      </Button>
    </>
  );
}
export default SignupForm;
