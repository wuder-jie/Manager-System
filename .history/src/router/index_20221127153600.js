import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    // 路由懒加载
    component: () => import("@/pages/login"),
  },
  {
    name: "",
    path: "/login",
    // 路由懒加载
    component: () => import("@/pages/login"),
  },
  {
    name: "home",
    path: "/home",
    // 路由懒加载
    component: () => import("@/pages/home"),
    // 异步组件
    // component: (resolve) => require(["@/pages/home"], resolve),
  },
];

const router = new Router({
  mode: "history",
  routes,
});
export default router;
