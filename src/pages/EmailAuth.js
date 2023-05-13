import EmailAuthForm from "../components/EmailAuth/EmailAuthForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";

function EmailAuthPage() {
  return (
    <HeadingPageContent heading="이메일 인증">
      <EmailAuthForm />
    </HeadingPageContent>
  );
}

export default EmailAuthPage;
