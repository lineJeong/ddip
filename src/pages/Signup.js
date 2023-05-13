import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import SignupForm from "../components/Signup/SignupForm";

function SignupPage() {
  return (
    <HeadingPageContent heading="회원가입">
      <SignupForm />
    </HeadingPageContent>
  );
}

export default SignupPage;
