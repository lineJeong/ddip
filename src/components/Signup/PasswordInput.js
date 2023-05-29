import * as validationUtils from "../../@utils/validationUtils";
import Input from "../UI/Input";
import InputWithLabel from "../UI/InputWithLabel";
import StatusMessage from "../UI/StatusMessage";

function PasswordInput({ passwordInput, confirmPasswordInput }) {
  const combinedPasswordErrorMessage = validationUtils.combineErrorMessages(
    passwordInput.errorMessage,
    confirmPasswordInput.errorMessage
  );

  return (
    <>
      <InputWithLabel
        label="비밀번호"
        id="password-signup"
        type="password"
        placeholder="비밀번호"
        radius="top"
        value={passwordInput.value}
        onChange={passwordInput.handleChangeInput}
        onBlur={passwordInput.handleBlurInput}
      />
      <Input
        id="repassword-signup"
        type="password"
        placeholder="비밀번호 확인"
        radius="bottom"
        value={confirmPasswordInput.value}
        onChange={confirmPasswordInput.handleChangeInput}
        onBlur={confirmPasswordInput.handleBlurInput}
      />
      <StatusMessage
        hasStatusMessage={
          passwordInput.hasError || confirmPasswordInput.hasError
        }
      >
        {combinedPasswordErrorMessage}
      </StatusMessage>
    </>
  );
}

export default PasswordInput;
