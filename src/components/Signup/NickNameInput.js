import Button from "../UI/Button";
import InputWithLabel from "../UI/InputWithLabel";
import StatusMessage from "../UI/StatusMessage";

function NickNameInput({ nicknameInput, uniqueNickname }) {
  return (
    <>
      <InputWithLabel
        label="닉네임"
        id="nickname-signup"
        placeholder="닉네임"
        radius="top"
        value={nicknameInput.value}
        onChange={nicknameInput.handleChangeInput}
        onBlur={nicknameInput.handleBlurInput}
      />
      <Button
        background="white"
        radius="bottom"
        size="sm"
        outline
        fullWidth
        onClick={uniqueNickname.hadleCheckNicknameDuplicate}
      >
        닉네임 중복 확인
      </Button>
      <StatusMessage hasStatusMessage={nicknameInput.hasError}>
        {nicknameInput.errorMessage}
      </StatusMessage>
      <StatusMessage
        hasStatusMessage={
          uniqueNickname.hasCheckedNickname ||
          uniqueNickname.hasNotCheckedNicknameWhenSubmit
        }
        success={uniqueNickname.isNicknameUnique}
      >
        {uniqueNickname.nicknameStatusMessage}
      </StatusMessage>
    </>
  );
}

export default NickNameInput;
