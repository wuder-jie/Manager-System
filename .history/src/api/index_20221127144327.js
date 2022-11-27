import service from "./service.js";

// 登录请求。/login    post   username,password
export const login = function ( data = {}) {
  return service({ url, method, data })
    .then((response) => {
      
      return response.data
    })
    .catch((err) => {
      console.error(err.message);
    });
};
