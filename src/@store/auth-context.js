import { createContext } from "react";

export const AuthValueContext = createContext({
  token: null,
  isLoggedIn: false,
  userInfo: { emoji: "", email: "", nickname: "" } // null
});

export const AuthActionsContext = createContext({
  handleLogin: () => {},
  handleLogout: () => {}
});
