import { useLocation } from "react-router-dom";

import Button from "../UI/Button";
import Input from "../UI/Input";
import ValidMessage from "../UI/ValidMessage";

function EmailAuthForm() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <Input
        type="email"
        placeholder="이메일"
        radius="top"
        defaultValue={state.email}
        disabled
      />
      <Input placeholder="인증번호" radius="bottom" />
      <ValidMessage hasValidMessage>인증번호를 입력해주세요.</ValidMessage>
      <Button background="mainViolet" color="white" marginTop="16px" fullWidth>
        회원 가입 완료
      </Button>
    </>
  );
}

export default EmailAuthForm;
