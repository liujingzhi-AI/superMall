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
    <!-- 滑动页面过程中的导航栏 -->
    <tab-control
      class="sednav"
      :titles="['流行','新款','精选']"
      @indexChange="indexChange"
    ></tab-control>
    <!-- 商品的展示 -->
    <goods-list
      :goods="goods"
      :currentIndex="currentIndex"
    ></goods-list>
  </div>
</template>

<script>
import HomeSwiper from './childComponts/HomeSwiper';
import RecommendView from './childComponts/RecommendView.vue';
import FeatureView from './childComponts/FeatureView.vue';

import NavBar from '@/components/common/navbar/NavBar';
import stickyHeader from '@/components/common/stickyHeader';
import TabControl from '@/components/content/tabcontrol/TabControl';
import GoodsList from '@/components/content/goods/GoodsList'

import {
  getHomeMultidata,
  getHomeGoods
} from "network/home";
// 该部分的修改由Home分支执行
export default {
  name: 'Home',
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    stickyHeader,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banner: [],// 轮播图数据
      recommend: [],// 推荐信息数据
      goods: {
        'pop': {page:0, list:[]},  // 流行
        'new': {page:0, list:[]}, // 新款
        'sell': {page:0, list:[]}, // 精选
      },
      currentIndex: 0,   // 商品详情目前选中的下标
    };
  },
  created() {
    this.getData1()
    this.getData2('pop')
    this.getData2('new')
    this.getData2('sell')
  },
  mounted() {
    //获取高度变化
    this.$refs.sticky_.sticky_()
    console.log("this.$el:" + this.$el)
  },
  watch: {},
  methods: {
     // 1.请求多个数据
    getData1() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },

    // 请求商品数据
    getData2(type) {
      const page = this.goods[type].page + 1  // 第一次请求，page 0+1 请求第一页的数据。但是this.goods[type].page依然为0.
      getHomeGoods(type,page).then(res => {
        // es6的语法: ...扩展运算符可以把数组展平
        // 由于this.goods[type].list是一个数据，接口返回的res.data.list也是一个数据，所以不能直接push,否则会造成数组的嵌套。
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1  // 第一次数据请求完成后，this.goods[type].page +1。这时this.goods[type].page的值就为1了。
      })
    },

    // 商品详情目前选中的tab下标
    indexChange(val) {
      this.currentIndex = val
    }
  }
};
</script>

<style scoped>
.home-nav{
  /* 这是base.css中定义的颜色 */
  background-color: var(--color-tint);
  color: white;
}
.sednav{
  position: sticky;
  top: 43px;
  background-color: #fff;
  z-index: 9px; 
}
</style>