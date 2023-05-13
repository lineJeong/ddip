import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";
import WithdrawalForm from "../components/Withdrawal/WithdrawalForm";

function WithdrawalPage() {
  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="회원 탈퇴">
        <WithdrawalForm />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default WithdrawalPage;
