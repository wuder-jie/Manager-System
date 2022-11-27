import service from './service.js'

// 登录请求。
expo const login=function(data){
  service({url:'/login',method:'POST',data})
}