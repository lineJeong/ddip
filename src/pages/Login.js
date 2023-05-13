import LoginForm from "../components/Login/LoginForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";

function LoginPage() {
  return (
    <HeadingPageContent heading="로그인">
      <LoginForm />
    </HeadingPageContent>
  );
}

export default LoginPage;
