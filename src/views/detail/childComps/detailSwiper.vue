<template>
  <div>
    <swiper :options="swiperOption" class="swiperBox">
      <swiper-slide v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Detailswiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {    // 轮播控制组件
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

<style lang="scss" scoped>
.swiperBox {
  height: 300px;
  overflow: hidden;
  img {
    // height: 100%;
    width: 100%;
  }
}
</style>