import { Link, useNavigate } from "react-router-dom";

import styled, { css } from "styled-components";

import Button from "./UI/Button";

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-bottom: 1px solid black;
  background: white;
  z-index: 10;

  > .ddip-logo {
    width: 94px;
    display: flex;
  }

  > .search-box {
    height: 46px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding-right: 0.875rem;
    padding-left: 0.875rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    border: 1px solid black;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.palette.gray4};

    > .search-icon {
      width: 14px;
      margin-right: 6px;
    }
  }

  > .right-buttons {
    display: flex;
    > .auth-buttons {
      display: flex;
      align-items: center;
      margin-left: 16px;

      > .user-icon {
        width: 46px;
        display: flex;
      }

      > hr {
        width: 1px;
        height: 12px;
        margin: 8px;
      }
    }
  }

  ${({ logoOnly }) =>
    logoOnly &&
    css`
      justify-content: center;
      background: inherit;
    `}

  ${({ noSearchBox }) =>
    noSearchBox &&
    css`
      justify-content: space-between;
    `}
`;

const StyledLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

function MainNavigation({ logoOnly, noSearchBox, loggedIn }) {
  const navigate = useNavigate();

  const ddipLogo = (
    <Link to="/" className="ddip-logo">
      <img className="logo" src="/images/logo.svg" alt="ddip-logo" />
    </Link>
  );

  if (logoOnly) {
    return <Header logoOnly={logoOnly}>{ddipLogo}</Header>;
  }

  return (
    <Header noSearchBox={noSearchBox}>
      {ddipLogo}
      {!noSearchBox && (
        <Link to="/bungae/search" className="search-box">
          <div className="search-icon">
            <img src="/images/search.svg" alt="search" />
          </div>
          <span>어떤 번개를 찾으시나요?</span>
        </Link>
      )}
      <div className="right-buttons">
        <Button
          background="mainViolet"
          color="white"
          iconWidth="16px"
          iconWithText
          onClick={() => navigate("/bungae/create")}
        >
          <div>
            <img src="/images/thunder.svg" alt="thunder" />
          </div>
          <span>번개 만들기</span>
        </Button>
        <div className="auth-buttons">
          {loggedIn ? (
            <div className="user-icon">
              <img src="/images/user.svg" alt="user" />
            </div>
          ) : (
            <>
              <StyledLink to="/signup">회원가입</StyledLink>
              <hr />
              <StyledLink to="/login">로그인</StyledLink>
            </>
          )}
        </div>
      </div>
    </Header>
  );
}

export default MainNavigation;
