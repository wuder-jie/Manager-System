import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/pages/home"),
  },
];

export default new Router({
  mode: "history",
  routes,
});
