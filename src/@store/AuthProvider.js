import { useCallback, useEffect, useState } from "react";

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
      const { id, email, nickname, jwt, emoji } = response.data;
      authUtils.setAuthTokenInfo(jwt);
      authUtils.setUserInfo({ id, email, emoji, nickname });
      setToken(jwt);
      setUserInfo({ id, email, emoji, nickname });
      successCallback();
    } catch (error) {
      errorCallback();
      console.error(error);
    }
  };

  const handleLogout = useCallback(() => {
    setToken(null);
    setUserInfo(null);
    authUtils.removeStoredTokenInfo();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (!token || !duration) {
      return;
    }

    logoutTimer = setTimeout(() => {
      handleLogout();
    }, [duration]);
  }, [token, duration, handleLogout]);

  const handleWithdraw = async (
    requestData,
    successCallback,
    errorCallback
  ) => {
    try {
      await authAPI.withdraw(requestData);
      handleLogout();
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
    login: handleLogin,
    logout: handleLogout,
    withdraw: handleWithdraw
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
