<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper
      :banner="banner"
    ></home-swiper>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import {
  getHomeMultidata
} from "network/home";
import HomeSwiper from './childComponts/HomeSwiper'
// 该部分的修改由Home分支执行
export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banner: {},
      recommend: {},
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
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
</style>