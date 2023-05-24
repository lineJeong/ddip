import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useInputWithValidation from "../@hooks/useInputWithValidation";
import { useAuthActions, useAuthValue } from "../@store/use-auth";
import * as validationUtils from "../@utils/validationUtils";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";
import WithdrawalForm from "../components/Withdrawal/WithdrawalForm";

function WithdrawalPage() {
  const navigate = useNavigate();

  const { userInfo } = useAuthValue();
  const authActions = useAuthActions();

  const passwordInput = useInputWithValidation(
    validationUtils.validateNotEmpty.bind(null, "비밀번호")
  );

  const [serverErrorMessage, setServerErrorMessage] = useState(null);

  if (!userInfo) return;

  const handleClickGoBack = () => {
    navigate(-1);
  };

  const handleSubmitWithdrawal = (e) => {
    e.preventDefault();
    setServerErrorMessage(null);

    const hasPasswordError = passwordInput.validateAndSetErrorMessage();

    if (hasPasswordError) return;

    const requestData = {
      email: userInfo.email,
      password: passwordInput.value
    };

    const successCallback = () => {
      navigate("/", { replace: true });
    };

    const errorCallback = () => {
      setServerErrorMessage("비밀번호가 일치하지 않습니다.");
    };

    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      authActions.withdraw(requestData, successCallback, errorCallback);
    }
  };

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="회원 탈퇴">
        <WithdrawalForm
          email={userInfo.email}
          passwordInput={passwordInput}
          serverErrorMessage={serverErrorMessage}
          handleSubmitWithdrawal={handleSubmitWithdrawal}
          handleClickGoBack={handleClickGoBack}
        />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default WithdrawalPage;
