const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 默认在浏览器打开。
    open: true,
    // 修改主机
    host: 'localhost',
    // 配置代理
    proxy: {
      '/api2' : { // '/api'是代理标识，一般是每个接口前的相同部分
          target: "http://1.116.64.64:5004", // 请求地址，一般是服务器地址
          changeOrigin: true, // 是否进行跨域
        /*   pathRewrite: { // pathRewrite的作用是把请求接口中的 '/api'替换掉，一般是替换为空""
              '^/api':""
          } */
      }
  },
}
})
