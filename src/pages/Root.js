import { Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";

import MainNavigation from "../components/MainNavigation";

const StyledRootLayout = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ background, theme }) =>
    background && theme.palette.mainMauve};
`;

function RootLayout() {
  const { pathname } = useLocation();

  // logoOnly, noSearchBox, loggedIn
  let logoOnly = false;
  let noSearchBox = false;

  let background = false;

  switch (pathname) {
    case "/login":
    case "/signup":
    case "/email-auth": {
      logoOnly = true;
      background = true;
      break;
    }
    case "/bungae/search":
      noSearchBox = true;
      break;
  }

  return (
    <StyledRootLayout background={background}>
      <MainNavigation logoOnly={logoOnly} noSearchBox={noSearchBox} />
      <Outlet />
    </StyledRootLayout>
  );
}

export default RootLayout;
