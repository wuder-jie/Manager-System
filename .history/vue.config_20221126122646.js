const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 默认在浏览器打开。
    open: true,
    host: 'localhost'
  }
})
