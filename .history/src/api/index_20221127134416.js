import service from "./service.js";

// 登录请求。/login    post   username,password
export const login = function (url, method = "GET", data = {}) {
   service({ url, method, data }).then((response) => {
    response.data()
  }).catch((err) => {
    
  });
};
