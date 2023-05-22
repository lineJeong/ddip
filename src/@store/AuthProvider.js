import { useState } from "react";

import { AuthValueContext, AuthActionsContext } from "./auth-context";
import * as authAPI from "../@api/authAPI";
import * as authUtils from "../@utils/authUtils";

let logoutTimer = null;

function AuthProvider({ children }) {
  const storedTokenInfo = authUtils.getAuthTokenInfo();
  const storedUserInfo = authUtils.getUserInfo();

  let initialToken = null;
  let duration = null;
  let initialUserInfo = null;
  if (storedTokenInfo && storedUserInfo && storedUserInfo) {
    initialToken = storedTokenInfo.token;
    duration = storedTokenInfo.duration;
    initialUserInfo = storedUserInfo;
  }

  const [token, setToken] = useState(initialToken);
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const isLoggedIn = !!token;

  const handleLogin = async (requestData, successCallback, errorCallback) => {
    try {
      const response = await authAPI.login(requestData);
      const { email, nickname, jwt } = response.data;
      const emoji = "🥑";
      authUtils.setAuthTokenInfo(jwt);
      authUtils.setUserInfo({ email, emoji, nickname });
      setToken(jwt);
      setUserInfo({ email, emoji, nickname });
      successCallback();
    } catch (error) {
      errorCallback();
      console.error(error);
    }
  };

  const authValue = {
    token,
    isLoggedIn,
    userInfo
  };
  const authActions = {
    handleLogin
  };

  return (
    <AuthValueContext.Provider value={authValue}>
      <AuthActionsContext.Provider value={authActions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthValueContext.Provider>
  );
}

export default AuthProvider;
