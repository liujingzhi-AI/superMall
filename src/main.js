import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible';
import store from './store';
import toast from 'components/common/toast';
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// swiper插件使用
Vue.use(Swiper)
// element
Vue.use(ElementUI);
// vue实例可以作为事件总线
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 图片懒加载，就是图片滑动到的时候再显示，节省性能
Vue.use(VueLazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

