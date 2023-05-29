import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import * as authAPI from "../@api/authAPI";
import useUniqueNickname from "../@hooks/useUniqueNickname";
import useValidatedInputWithBlur from "../@hooks/useValidatedInputWithBlur";
import * as validationUtils from "../@utils/validationUtils";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";
import EmailInput from "../components/Signup/EmailInput";
import NickNameInput from "../components/Signup/NickNameInput";
import PasswordInput from "../components/Signup/PasswordInput";
import Button from "../components/UI/Button";

const StyledParagraph = styled.p`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

function SignupPage() {
  const navigate = useNavigate();

  const emailInput = useValidatedInputWithBlur(validationUtils.validateEmail);
  const nicknameInput = useValidatedInputWithBlur(
    validationUtils.validateNickname
  );
  const passwordInput = useValidatedInputWithBlur(
    validationUtils.validatePassword
  );
  const confirmPasswordInput = useValidatedInputWithBlur(
    validationUtils.validateConfirmPassword.bind(null, passwordInput.value)
  );

  const uniqueNickname = useUniqueNickname(
    nicknameInput.value,
    nicknameInput.isValid,
    nicknameInput.handleBlurInput
  );

  let isFormValid = false;
  if (
    emailInput.isValid &&
    nicknameInput.isValid &&
    passwordInput.isValid &&
    confirmPasswordInput.isValid
  ) {
    isFormValid = true;
  }

  // 추후 이모지도 랜덤으로 전송해야 함!!
  const handleSubmitSignup = async () => {
    if (!isFormValid) {
      emailInput.handleBlurInput();
      nicknameInput.handleBlurInput();
      passwordInput.handleBlurInput();
      confirmPasswordInput.handleBlurInput();
      return;
    }
    if (!uniqueNickname.isNicknameUnique) {
      uniqueNickname.handleCheckNicknameWhenSubmit();
      return;
    }

    const requestData = {
      email: emailInput.value,
      nickname: nicknameInput.value,
      password: passwordInput.value
    };

    try {
      await authAPI.signup(requestData);
      navigate("/email-auth", {
        replace: true,
        state: { email: emailInput.value, isEmailValid: emailInput.isValid }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="회원가입">
        <StyledParagraph>
          이메일 인증까지 마쳐야 정상적으로 회원가입이 완료 됩니다.
        </StyledParagraph>
        <InputWrapper>
          <EmailInput emailInput={emailInput} />
        </InputWrapper>
        <InputWrapper>
          <NickNameInput
            nicknameInput={nicknameInput}
            uniqueNickname={uniqueNickname}
          />
        </InputWrapper>
        <InputWrapper>
          <PasswordInput
            passwordInput={passwordInput}
            confirmPasswordInput={confirmPasswordInput}
          />
        </InputWrapper>
        <Button
          background="mainViolet"
          color="white"
          onClick={handleSubmitSignup}
          fullWidth
        >
          이메일 인증하러 가기
        </Button>
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default SignupPage;
