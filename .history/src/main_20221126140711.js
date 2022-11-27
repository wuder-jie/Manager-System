import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入reset样式重置文件。
import '@/assets/css/reset.css'
// 引入图标样式
import 'font-awesome/css/font-awesome.min.css'
// 引入axios
import axios from 'axios'
Vue.prototype.axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
