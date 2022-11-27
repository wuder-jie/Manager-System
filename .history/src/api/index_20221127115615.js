import service from "./service.js";

// 登录请求。
export const login = function (url, method='GET', data = {}) {
  RETURNservice({ url, method, data });
};
