import useInputWithValidation from "../@hooks/useInputWithValidation";
import { useAuthValue } from "../@store/use-auth";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";
import WithdrawalForm from "../components/Withdrawal/WithdrawalForm";

function WithdrawalPage() {
  const { userInfo } = useAuthValue();
  const passwordInput = useInputWithValidation();

  if (!userInfo) return;

  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="회원 탈퇴">
        <WithdrawalForm email={userInfo.email} passwordInput={passwordInput} />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default WithdrawalPage;
