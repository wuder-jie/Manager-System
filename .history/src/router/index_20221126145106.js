import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
   {
    path: "/",
    redirect: "/home",
  },
  {
    name:'home',
    path: "/home",
    // 路由懒加载
    // component: () => import("@/pages/home"),
    // 异步组件
    component:resolve=>require(['@/pages/home'],re)
  },
];

const router = new Router({
  mode: "history",
  routes,
});
export default router;
