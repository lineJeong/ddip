import { useLocation, useNavigate } from "react-router-dom";

import useAxios from "../@hooks/useAxios";
import useValidInput from "../@hooks/useValidInput";
import * as validationUtil from "../@utils/validation";
import EmailAuthForm from "../components/EmailAuth/EmailAuthForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

function EmailAuthPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const authNumberInput = useValidInput(
    validationUtil.validateNotEmpty.bind(null, "인증번호")
  );

  let isFormValid = false;
  if (state.isEmailValid && authNumberInput.isValid) {
    isFormValid = true;
  }

  const onSuccess = () => {
    window.alert("회원가입이 완료되었습니다.");
    navigate("/login");
  };
  const onError = () => {
    window.alert("이메일 또는 인증번호가 올바르지 않습니다.");
  };

  const { error, isLoading, sendRequest } = useAxios(onSuccess, onError);

  // 추후 이모지도 랜덤으로 전송해야 함!!
  const handleSubmit = () => {
    if (isLoading) return;
    if (!isFormValid) {
      authNumberInput.handleBlurInput();
      return;
    }

    const config = {
      method: "PATCH",
      url: "/auth/confirm",
      data: {
        email: state.email,
        authNumber: authNumberInput.value
      }
    };
    sendRequest(config);
    console.error(error);
  };

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="이메일 인증">
        <EmailAuthForm
          email={state.email}
          handleSubmit={handleSubmit}
          {...authNumberInput}
        />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default EmailAuthPage;
