import http from "./http";

export const signup = ({ email, nickname, password, emoji }) => {
  return http.post("/auth/signup", { email, nickname, password, emoji });
};

export const confirmAuthNumber = ({ email, authNumber }) => {
  return http.patch("/auth/confirm", { email, authNumber });
};

export const login = ({ email, password }) => {
  return http.post("/auth/login", { email, password });
};

export const validateNickname = (nickname) => {
  return http.get(`/auth/users?nickname=${nickname}`);
};

export const withdraw = ({ email, password }) => {
  return http.delete("/auth/withdraw", { data: { email, password } });
};
