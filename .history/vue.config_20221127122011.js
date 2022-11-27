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
      '/api': {  
          target: 'http://123.13.238.19:55555/',   /*请求地址*/                
          changeOrigin: true,                      /*是否跨域*/
          ws: true,  
          pathRewrite: {    
          '^/api': ''  
          }
      },
  }

作者：朝思慕远
链接：https://juejin.cn/post/6844903977801400333
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  },
});
