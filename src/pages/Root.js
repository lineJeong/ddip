import { Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";

import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/UI/PageContent";

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
  let maxWidth = "lg";
  let background = false;

  switch (pathname) {
    case "/login":
    case "/signup":
    case "/email-auth": {
      logoOnly = true;
      maxWidth = "sm";
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
      <PageContent maxWidth={maxWidth}>
        <Outlet />
      </PageContent>
    </StyledRootLayout>
  );
}

export default RootLayout;
