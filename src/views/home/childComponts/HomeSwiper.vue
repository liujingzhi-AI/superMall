<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item ,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-slide>

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
export default {
  name: 'Homeswiper',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        spaceBetween: 30,
        centeredSlides: true,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        paginationClickable :true,
        prevButton:'.swiper-button-prev',//上一张
        nextButton:'.swiper-button-next',//下一张
        scrollbar:'.swiper-scrollbar',//滚动条
        mousewheelControl : true,
        observeParents:true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
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