import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/pages/home"),
    // 路由懒加载
    // 异步组件
    // component: (resolve) => require(["@/pages/home"], resolve),
  },
];

const router = new Router({
  mode: "history",
  routes,
});
export default router;
