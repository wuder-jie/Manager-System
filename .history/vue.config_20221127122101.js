const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 默认在浏览器打开。
    open: true,
    // 修改主机
    host: "localhost",
    // 配置代理
    proxy: {
      "/api": {
        target: "http://1.116.64.64:5004/" /*请求地址*/,
        changeOrigin: true /*是否跨域*/,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
