import service from './service.js'

// 登录请求。
export const login=function(url,data={}){
  service({url:'/login',method:'POST',data})
}