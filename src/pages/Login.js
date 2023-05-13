import LoginForm from "../components/Login/LoginForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

function LoginPage() {
  return (
    <RootPageContent maxWidth="sm">
      <HeadingPageContent heading="로그인">
        <LoginForm />
      </HeadingPageContent>
    </RootPageContent>
  );
}
export default LoginPage;
