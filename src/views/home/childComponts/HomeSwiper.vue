<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>

// import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Homeswiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,   // 是否循环播放
        // 自动轮播
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,  // 允许分页点击跳转
        },
        paginationClickable: true,
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.swiper-slide {
  float: left;
  width: 100%;
  height: auto;
}
img {
  display: block;
  width: 100%;
  height: auto;
  background: none;
  /* .full(100%,auto,none);
*/
}
</style>