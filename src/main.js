import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

Vue.config.productionTip = false
// swiper插件使用
Vue.use(Swiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

