import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible';

Vue.config.productionTip = false
// swiper插件使用
Vue.use(Swiper)
// element
Vue.use(ElementUI);
// vue实例可以作为事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

