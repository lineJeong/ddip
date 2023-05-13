import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";
import SignupForm from "../components/Signup/SignupForm";

function SignupPage() {
  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="회원가입">
        <SignupForm />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default SignupPage;
