import service from "./service.js";

// 登录请求。
export const login = function (url, method='GET', data = {}) {
  service({ url, method, data });
};
