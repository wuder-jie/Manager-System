import service from "./service.js";

// 登录请求。/login    post  u
export const login = function (url, method = "GET", data = {}) {
  return service({ url, method, data });
};
