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
      // 自定义代理名，请求时使用
      "/api2": {
        //target:代表要跨域到哪（dy 要映射到 trget 的域名）
        target: "http://1.116.64.64:5004" /*请求地址*/,
        changeOrigin: true /*是否跨域*/,
        ws: true,
      },
    },
  },
});
