import EmailAuthForm from "../components/EmailAuth/EmailAuthForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

function EmailAuthPage() {
  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="이메일 인증">
        <EmailAuthForm />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default EmailAuthPage;
