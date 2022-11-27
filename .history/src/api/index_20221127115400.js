import service from './service.js'

// 登录请求。
const login=function(){
  service({url:'/login',me})
}