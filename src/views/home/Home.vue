<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="@/assets/img/turn/饼干.png"/></swiper-slide>
      <swiper-slide><img src="@/assets/img/turn/虾.png"/></swiper-slide>
      <swiper-slide><img src="@/assets/img/turn/饺子.png"/></swiper-slide>
      <!-- <swiper-slide><img src="../../static/images/home/index/banner_4.jpg"/></swiper-slide>
      <swiper-slide><img src="../../static/images/home/index/banner_5.jpg"/></swiper-slide> -->

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import NavBar from '@/components/common/navbar/NavBar';
import {
  getHomeMultidata
} from "network/home"
// 该部分的修改由Home分支执行
export default {
  name: 'Home',
  components:{
    NavBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      banner: {},
      recommend: {},
      swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: true,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        prevButton:'.swiper-button-prev',//上一张
        nextButton:'.swiper-button-next',//下一张
        scrollbar:'.swiper-scrollbar',//滚动条
        mousewheelControl : true,
        observeParents:true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        }
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log("请求回来的数据",res);
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  },
  methods: {
  }
};
</script>

<style scoped>
.home-nav{
  /* 这是base.css中定义的颜色 */
  background-color: var(--color-tint);
  color: white;
}
.swiper-slide{
  float: left;
  width: 100%;
  height: auto;
}
img{
  display: block;
  width: 100%;
  height: auto;
  background: none;
  /* .full(100%,auto,none);
*/ }
</style>