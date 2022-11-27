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
      '/api' : { // '/api'是代理标识，一般是每个接口前的相同部分
          target: "http://xxx.xxx.xx.xx:8080", // 请求地址，一般是服务器地址
          changeOrigin: true, // 是否进行跨域
          pathRewrite: { // pathRewrite的作用是把请求接口中的 '/api'替换掉，一般是替换为空""
              '^/api':""
          }
      }
————————————————
版权声明：本文为CSDN博主「万物之恋」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_47340917/article/details/122503361
  }
})
