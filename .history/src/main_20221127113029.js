import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入reset样式重置文件。
import "@/assets/css/reset.css";
// 引入图标样式
import "font-awesome/css/font-awesome.min.css";
// 引入axios
import service from "@/api/service.js";
// 引入路由器
import router from "@/router";
// 把axios挂载到原型，所有的vc都可访问。
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({ router, render: (h) => h(App) }).$mount("#app");
