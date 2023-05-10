import { Outlet, useLocation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
