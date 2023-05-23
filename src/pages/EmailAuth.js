import { useLocation, useNavigate } from "react-router-dom";

import * as authAPI from "../@api/authAPI";
import useValidatedInputWithBlur from "../@hooks/useValidatedInputWithBlur";
import * as validationUtils from "../@utils/validationUtils";
import EmailAuthForm from "../components/EmailAuth/EmailAuthForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

function EmailAuthPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const emailInput = useValidatedInputWithBlur(validationUtils.validateEmail);
  const authNumberInput = useValidatedInputWithBlur(
    validationUtils.validateNotEmpty.bind(null, "인증번호")
  );

  const combinedErrorMessage = validationUtils.combineErrorMessages(
    emailInput.errorMessage,
    authNumberInput.errorMessage
  );

  let isFormValid = false;
  if (state) {
    if (state.isEmailValid && authNumberInput.isValid) {
      isFormValid = true;
    }
  } else {
    if (emailInput.isValid && authNumberInput.isValid) {
      isFormValid = true;
    }
  }

  // 추후 이모지도 랜덤으로 전송해야 함!! 회원가입 때 혹은 이메일 인증 시!!
  const handleSubmitAuthNumber = async () => {
    if (!isFormValid) {
      authNumberInput.handleBlurInput();
      return;
    }

    const requestData = {
      email: state ? state.email : emailInput.value,
      authNumber: authNumberInput.value
    };

    try {
      await authAPI.confirmAuthNumber(requestData);
      window.alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      window.alert("이메일 또는 인증번호가 올바르지 않습니다.");
      console.error(error);
    }
  };

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="이메일 인증">
        <EmailAuthForm
          state={state}
          emailInput={emailInput}
          authNumberInput={authNumberInput}
          combinedErrorMessage={combinedErrorMessage}
          handleSubmit={handleSubmitAuthNumber}
        />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default EmailAuthPage;
