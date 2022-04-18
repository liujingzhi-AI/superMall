import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 轮播图插件使用
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

