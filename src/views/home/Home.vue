<template>
  <div>
    <sticky-header ref="sticky_">
        <!-- contents -->
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    </sticky-header>
    <!-- 轮播图 -->
    <home-swiper
      :banner="banner"
    ></home-swiper>
    <!-- 推荐信息 -->
    <recommend-view
      :recommend="recommend"
    ></recommend-view>
    <!-- 本周流行 -->
    <feature-view
    ></feature-view>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import {
  getHomeMultidata
} from "network/home";
import HomeSwiper from './childComponts/HomeSwiper';
import RecommendView from './childComponts/RecommendView.vue';
import FeatureView from './childComponts/FeatureView.vue';
import stickyHeader from '@/components/common/stickyHeader'
// 该部分的修改由Home分支执行
export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    stickyHeader
  },
  data() {
    return {
      banner: [],// 轮播图数据
      recommend: [],// 推荐信息数据
      keywords: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      this.keywords = res.data.keywords.list
    })
  },
  mounted() {
    //获取高度变化
    this.$refs.sticky_.sticky_()
  },
  watch: {
    oldToNew(newVal, oldVal) {
      if(newVal.length !== oldVal.length) {
        this.$refs.sticky_.sticky_()
      }
    }
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