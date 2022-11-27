import Vue from "vue";
import Router from "vue-router";
import { component } from "vue/types/umd";
Vue.use(Router);
const routes = [
  {
    path:'/',
    redirect:'/home'
  }
  {
    path:'/home'
    component:function(){
      return imp
    }
  }
];

export default new Router({
  mode: "history",
  routes,
});
