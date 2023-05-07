import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import BungaeMainPage from "./pages/BunageMain";
import BungaeDetailPage from "./pages/BungaeDetail";
import BungaeSearchPage from "./pages/BungaeSearch";
import CreateBungaePage from "./pages/CreateBungae";
import EditBungaePage from "./pages/EditBungae";
import EmailAuthPage from "./pages/EmailAuth";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import ModifyUserInfoPage from "./pages/ModifyUserInfo";
import ProfilePage from "./pages/Profile";
import RootLayout from "./pages/Root";
import SignupPage from "./pages/Signup";
import WithdrawalPage from "./pages/Withdrawal";
import theme from "./styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <BungaeMainPage /> },
      { path: "/bungae/search", element: <BungaeSearchPage /> },
      { path: "/bungae/create", element: <CreateBungaePage /> },
      {
        path: "/bungae/:id",
        children: [
          { index: true, element: <BungaeDetailPage /> },
          { path: "edit", element: <EditBungaePage /> }
        ]
      },
      { path: "/signup", element: <SignupPage /> },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "email-auth",
        element: <EmailAuthPage />
      },
      {
        path: "/profile/:nickname",
        children: [
          { index: true, element: <ProfilePage /> },
          { path: "withdraw", element: <WithdrawalPage /> },
          { path: "modify", element: <ModifyUserInfoPage /> }
        ]
      },
      { path: "*", element: <ErrorPage /> }
    ]
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
