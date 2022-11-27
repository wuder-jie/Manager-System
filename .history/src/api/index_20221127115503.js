import service from './service.js'

// 登录请求。
export const login=function(data=){
  service({url:'/login',method:'POST',data})
}