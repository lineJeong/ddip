import { redirect } from "react-router-dom";

import { emojiList } from "../@constants/emojiList";

export const setAuthTokenInfo = (token) => {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);

  localStorage.setItem("token", token);
  localStorage.setItem("expiration", expiration);
};

export const setUserInfo = ({ emoji, email, nickname }) => {
  const userInfo = {
    emoji,
    email,
    nickname
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

const getAuthTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const currentDate = new Date();
  const duration = expirationDate.getTime() - currentDate.getTime();
  return duration;
};

export const getAuthTokenInfo = () => {
  const storedToken = localStorage.getItem("token");
  const storedTokenDuration = getAuthTokenDuration();

  if (!storedToken || storedTokenDuration < 0) {
    return null;
  }

  return { token: storedToken, duration: storedTokenDuration };
};

export const getUserInfo = () => {
  const storedUserInfo = localStorage.getItem("userInfo");

  if (!storedUserInfo) {
    return null;
  }

  return JSON.parse(storedUserInfo);
};

export const removeStoredTokenInfo = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("userInfo");
};

export const getRandomEmoji = () => {
  const randomIdx = Math.floor(Math.random() * emojiList.length);
  return emojiList[randomIdx];
};

export const loginRedirectLoader = () => {
  const tokenInfo = getAuthTokenInfo();
  if (!tokenInfo) {
    return redirect("/login");
  }
  return null;
};

export const logoutRedirectLoader = () => {
  const tokenInfo = getAuthTokenInfo();
  if (tokenInfo) {
    return redirect("/");
  }
  return null;
};
