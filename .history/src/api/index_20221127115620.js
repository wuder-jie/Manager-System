import service from "./service.js";

// 登录请求。
export const login = function (url, method='GET', data = {}) {
  return service({ url, method, data });
};
