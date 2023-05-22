import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useInputWithValidation from "../@hooks/useInputWithValidation";
import { useAuthActions } from "../@store/use-auth";
import * as validateUtils from "../@utils/validationUtils";
import LoginForm from "../components/Login/LoginForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

function LoginPage() {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const {
    value: email,
    handleChangeInput: handleChangeEmail,
    errorMessage: emailErrorMessage,
    showErrorMessage: showEmailErrorMessage,
    validateAndSetErrorMessage: validateAndSetEmailErrorMessage
  } = useInputWithValidation(
    validateUtils.validateNotEmpty.bind(null, "이메일")
  );
  const {
    value: password,
    handleChangeInput: handleChangePassword,
    errorMessage: passwordErrorMessage,
    showErrorMessage: showPasswordErrorMessage,
    validateAndSetErrorMessage: validateAndSetPasswordErrorMessage
  } = useInputWithValidation(
    validateUtils.validateNotEmpty.bind(null, "비밀번호")
  );

  const showErrorMessage = showEmailErrorMessage || showPasswordErrorMessage;

  const [serverErrorMessage, setServerErrorMessage] = useState(null);

  const combinedPasswordErrorMessage = validateUtils.combineErrorMessages(
    emailErrorMessage,
    passwordErrorMessage
  );

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setServerErrorMessage(null);

    const hasEmailError = validateAndSetEmailErrorMessage();
    const hasPasswordError = validateAndSetPasswordErrorMessage();

    if (hasEmailError || hasPasswordError) return;

    const requestData = {
      email,
      password
    };

    const successCallback = () => {
      navigate(-1, { replace: true });
    };
    const errorCallback = () => {
      setServerErrorMessage(
        "등록되지 않은 이메일이거나, 이메일 또는 비밀번호를 잘못 입력하셨습니다."
      );
    };

    authActions.handleLogin(requestData, successCallback, errorCallback);
  };

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="로그인">
        <LoginForm
          email={email}
          password={password}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleSubmitLogin={handleSubmitLogin}
          showErrorMessage={showErrorMessage}
          errorMessage={combinedPasswordErrorMessage}
          serverErrorMessage={serverErrorMessage}
        />
      </HeadingPageContent>
    </RootPageContent>
  );
}
export default LoginPage;
