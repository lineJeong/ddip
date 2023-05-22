import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import AuthProvider from "./@store/AuthProvider";
import theme from "./@styles/theme";

const LoadingFallback = () => <div>Loading...</div>;

const BungaeMainPage = React.lazy(() => import("./pages/BunageMain"));
const BungaeDetailPage = React.lazy(() => import("./pages/BungaeDetail"));
const BungaeSearchPage = React.lazy(() => import("./pages/BungaeSearch"));
const CreateBungaePage = React.lazy(() => import("./pages/CreateBungae"));
const EditBungaePage = React.lazy(() => import("./pages/EditBungae"));
const EmailAuthPage = React.lazy(() => import("./pages/EmailAuth"));
const ErrorPage = React.lazy(() => import("./pages/Error"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const ModifyUserInfoPage = React.lazy(() => import("./pages/ModifyUserInfo"));
const ProfilePage = React.lazy(() => import("./pages/Profile"));
const RootLayout = React.lazy(() => import("./pages/Root"));
const SignupPage = React.lazy(() => import("./pages/Signup"));
const WithdrawalPage = React.lazy(() => import("./pages/Withdrawal"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <RootLayout />
      </Suspense>
    ),
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
        path: "/email-auth",
        element: <EmailAuthPage />
      },
      {
        path: "/profile",
        children: [
          { index: true, element: <ProfilePage /> },
          { path: "created", element: <ProfilePage /> },
          { path: "participated", element: <ProfilePage /> },
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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
