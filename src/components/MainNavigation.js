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
    font-size: 0.875rem;

    > img {
      margin-right: 8px;
      margin-bottom: 2px;
    }
  }

  > .right-buttons {
    display: flex;
    > .auth-buttons {
      display: flex;
      align-items: center;
      padding: 2px;
      margin-left: 0.7rem;

      > hr {
        width: 1px;
        height: 12px;
        margin: 8px;
      }
    }
  }

  ${(props) =>
    props.logoOnly &&
    css`
      justify-content: center;
      background: ${props.theme.palette.mainMauve};
    `}

  ${(props) =>
    props.noSearchBox &&
    css`
      justify-content: space-between;
    `}
`;

function MainNavigation({ logoOnly, noSearchBox, loggedIn }) {
  if (logoOnly) {
    return (
      <Header logoOnly={logoOnly}>
        <img src="/images/logo.svg" alt="logo" />
      </Header>
    );
  }

  return (
    <Header noSearchBox={noSearchBox}>
      <img src="/images/logo.svg" alt="logo" />
      {!noSearchBox && (
        <div className="search-box">
          <img src="/images/search.svg" alt="search" />
          <span>어떤 번개를 찾으시나요?</span>
        </div>
      )}
      <div className="right-buttons">
        <Button background="mainViolet" color="white">
          <img
            className="icon-with-text"
            src="/images/thunder.svg"
            alt="thunder"
          />
          <span>번개 만들기</span>
        </Button>
        <div className="auth-buttons">
          {loggedIn ? (
            <img src="/images/user.svg" alt="user" />
          ) : (
            <>
              <Button noPadding>회원가입</Button>
              <hr />
              <Button noPadding>로그인</Button>
            </>
          )}
        </div>
      </div>
    </Header>
  );
}

export default MainNavigation;
