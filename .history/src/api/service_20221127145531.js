import axios from "axios";
import { getToken } from "@/utils/localStorage.js";
const service = axios.create({
  baseURL: "/api2",
  timeout: 3000,
});
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 配置token到headers中。config.headers["TOKEN"] = getToken("TOKEN");
    if()

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default service;
