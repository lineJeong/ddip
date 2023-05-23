import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import * as authAPI from "../../@api/authAPI";
import useUniqueNickname from "../../@hooks/useUniqueNickname";
import useValidatedInputWithBlur from "../../@hooks/useValidatedInputWithBlur";
import * as validationUtils from "../../@utils/validationUtils";
import Button from "../UI/Button";
import Input from "../UI/Input";
import InputWithLabel from "../UI/InputWithLabel";
import StatusMessage from "../UI/StatusMessage";

const InputWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const StyledParagraph = styled.p`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.sm};
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
  } = useValidatedInputWithBlur(validationUtils.validateEmail);
  const {
    value: nickname,
    isValid: isNicknameValid,
    hasError: hasNicknameError,
    errorMessage: nicknameErrorMessage,
    handleChangeInput: handleChangeNickname,
    handleBlurInput: handleBlurNickname
  } = useValidatedInputWithBlur(validationUtils.validateNickname);
  const {
    value: password,
    isValid: isPasswordValid,
    hasError: hasPasswordError,
    errorMessage: passwordErrorMessage,
    handleChangeInput: handleChangePassword,
    handleBlurInput: handleBlurPassword
  } = useValidatedInputWithBlur(validationUtils.validatePassword);
  const {
    value: confirmPassword,
    isValid: isConfirmPasswordValid,
    hasError: hasConfirmPasswordError,
    errorMessage: confirmPasswordErrorMessage,
    handleChangeInput: handleChangeConfirmPassword,
    handleBlurInput: handleBlurConfirmPassword
  } = useValidatedInputWithBlur(
    validationUtils.validateConfirmPassword.bind(null, password)
  );

  const {
    isNicknameUnique,
    nicknameStatusMessage,
    hasCheckedNickname,
    hadleCheckNicknameDuplicate,
    hasNotCheckedNicknameWhenSubmit,
    handleCheckNicknameWhenSubmit
  } = useUniqueNickname(nickname, isNicknameValid, handleBlurNickname);

  const combinedPasswordErrorMessage = validationUtils.combineErrorMessages(
    passwordErrorMessage,
    confirmPasswordErrorMessage
  );

  let isFormValid = false;
  if (
    isEmailValid &&
    isNicknameValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    isFormValid = true;
  }

  // 추후 이모지도 랜덤으로 전송해야 함!!
  const handleSubmitSignup = async () => {
    if (!isFormValid) {
      handleBlurEmail();
      handleBlurNickname();
      handleBlurPassword();
      handleBlurConfirmPassword();
      return;
    }
    if (!isNicknameUnique) {
      handleCheckNicknameWhenSubmit();
      return;
    }

    const requestData = {
      email,
      nickname,
      password
    };

    try {
      await authAPI.signup(requestData);
      navigate("/email-auth", {
        state: { email, isEmailValid }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StyledParagraph>
        이메일 인증까지 마쳐야 정상적으로 회원가입이 완료 됩니다.
      </StyledParagraph>
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
        <StatusMessage hasStatusMessage={hasEmailError}>
          {emailErrorMessage}
        </StatusMessage>
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
          onClick={hadleCheckNicknameDuplicate}
        >
          닉네임 중복 확인
        </Button>
        <StatusMessage hasStatusMessage={hasNicknameError}>
          {nicknameErrorMessage}
        </StatusMessage>
        <StatusMessage
          hasStatusMessage={
            hasCheckedNickname || hasNotCheckedNicknameWhenSubmit
          }
          success={isNicknameUnique}
        >
          {nicknameStatusMessage}
        </StatusMessage>
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
        <StatusMessage
          hasStatusMessage={hasPasswordError || hasConfirmPasswordError}
        >
          {combinedPasswordErrorMessage}
        </StatusMessage>
      </InputWrapper>
      <Button
        background="mainViolet"
        color="white"
        onClick={handleSubmitSignup}
        fullWidth
      >
        이메일 인증하러 가기
      </Button>
    </>
  );
}
export default SignupForm;
