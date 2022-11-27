import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  /*  {
    path: "/",
    redirect: "/home",
  }, */
  {
    name:'home',
    path: "/home",
    component: () => import("@/pages/home"),
  },
];

const router = new Router({
  mode: "hi",
  routes,
});
export default router;
