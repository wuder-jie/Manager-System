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
        target: "http://123.13.238.19:55555/" /*请求地址*/,
        changeOrigin: true /*是否跨域*/,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
