const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 默认在浏览器打开。
    open: true,
    // 修改主机
    host: "localhost",
    // 配置代理
    // proxy:'http://1.116.64.64:5004'
    proxy:{
      '/api2': {
        target: 'http://1.116.64.64:5004',
        pathRewrite:{''}
        // ws: true,
        // changeOrigin: true
      },
    }
  }

});
