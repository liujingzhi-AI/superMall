<template>
  <div id="home">
    <sticky-header ref="sticky_">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control
        ref="tabControl1"
        :titles="['流行','新款','精选']"
        @indexChange="indexChange"
        class="controlTab"
        v-show="isShow"
      ></tab-control>
    </sticky-header>
    <!-- 滑动页面过程中的导航栏 -->
    <scroll 
      class="content" 
      ref="scroll" 
      :probeType="probeType"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper
        :banner="banner"
        @swiperImageLoad="swiperImageLoad"
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
        ref="tabControl2"
        :titles="['流行','新款','精选']"
        @indexChange="indexChange"
        v-show="!isShow"
      ></tab-control>
      <!-- 商品的展示 -->
      <goods-list
        :goods="goods[type].list"
        ref="Goods"
      ></goods-list>
      <!-- <div style="height:52px"></div> -->
    </scroll>
    <!-- 如果想要监听组件的点击，那么一定要加native,否则监听不到 -->
    <back-top @click.native="backClick" v-show="backtopShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComponts/HomeSwiper';
import RecommendView from './childComponts/RecommendView.vue';
import FeatureView from './childComponts/FeatureView.vue';

import NavBar from '@/components/common/navbar/NavBar';
import stickyHeader from '@/components/common/stickyHeader';
import TabControl from '@/components/content/tabcontrol/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';
import Scroll from '@/components/common/scroll/Scroll';

import {itemListenerMixin, backTopMixin} from "@/common/mixin"

import {
  getHomeMultidata,
  getHomeGoods
} from "network/home";
// 该部分的修改由Home分支执行
export default {
  name: 'Home',
  mixins: [itemListenerMixin, backTopMixin],
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    stickyHeader,
    TabControl,
    GoodsList,
    Scroll,
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
      type: 'pop',         // 当前分类标识
      probeType: 3,     // 判断是否监听页面的滑动位置。0,1是不监听，2是监听惯性(不监听)，3是监听(惯性也监听)
      pullUpLoad: true,    // 是否监听上拉事件
      tabOffsetTop: 0,    //tabcontrol距离顶部的距离
      isShow: false,   //　默认不吸顶
      saveY: 0,   // 保存首页离开时的Y
    };
  },
  created() {
    this.getData1()
    this.getData2('pop')
    this.getData2('new')
    this.getData2('sell')

  },
  // 注意当离开首页的时候，调用destroyed钩子。
  // 所以在切换页面再回到首页时，首页不会保持离开以前的状态。所以需要在app.vue的<router-view>外面包裹一层<keep-alive>
  destroyed() {
    console.log('home destroyed');
  },
  // 这里就两个钩子函数做一下解释：当第一次进入页面的时候，created和activated同时被调用，离开时destroyed被调用。
  // 在app.vue加上keep-alive后，首页进行了缓存。所以再次进入该页面时不会再次调用created了。此时进入首页和离开首页只会调用下面的两个钩子函数
  // 活跃
  activated() {
    console.log("活跃",this.saveY);
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY)
    // this.$refs.scroll.scrollTo(0,this.saveY)
  },
  // 离开
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    console.log("不活跃",this.saveY); 
    // 取消全局事件的监听
    this.$bus.$off('homeItemImageLoad',this.itemImageListener)
  },
  mounted() {
    //获取高度变化
    this.$refs.sticky_.sticky_()
    // console.log("this.$el:" + this.$el)
  },
  watch: {
  },
  methods: {
    // 轮播图加载监听
    swiperImageLoad() {
      // 获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log("tab切换",this.tabOffsetTop);
    },

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
        this.$refs.scroll.finishPullUp()
      })
    },
    // 商品详情目前选中的tab下标
    indexChange(val) {
      this.currentIndex = val
      switch(this.currentIndex) {
        case 0:
          this.type = 'pop'
          break;
        case 1:
          this.type = 'new'
          break;
        case 2:
          this.type = 'sell'
          break;
      }
      console.log("当前选中类型",this.goods[this.type].list,this.type);
      this.$refs.tabControl1.currentIndex = val
      this.$refs.tabControl2.currentIndex = val
      this.getData2(this.type)
    },
    // 获取滑动位置
    contentScroll(position) {
      // console.log("位置",position);
      // 1.判断BackTop是否显示
      this.listenShowBackTop(position)

      // 2.决定tabControl是否吸顶（position: fixed）
      this.isShow = (-position.y) > this.tabOffsetTop ? true : false
    },
    // 监听是否滑动到了底部
    loadMore() {
      this.getData2(this.type)
      // 由于加载更多数据时图片还未撑开，scroll计算的高度与实际需要滚动的高度有差别。（还有一种办法就是设置每个li的高度，固定死了，就不会有这个问题。）
      // 所以在监听下拉动作时调用refresh()，作用：重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.$refs.scroll.scroll.refresh()
    },
  }
};
</script>

<style scoped>
/* scoped,作用域的意思。如果不加这个，那么如果其他页面中也有相同的class的话，在这里进行的样式修改也会在其他地方显现 */
.home-nav {
  /* 这是base.css中定义的颜色 */
  background-color: var(--color-tint);
  color: white;
  z-index: 9px;
}

/* .sednav {
  position: sticky;
  top: 43px;
  background-color: #fff;
  z-index: 9px; 
} */
/* calc() 函数计算元素的宽度 */
/* height: calc(100% - 92px); */
/* vh单位(viewport heigh) 视口。比如100vh就是百分之一百的视口，50vh就是百分之50的视口*/
/* 92的由来是因为上下tabbar相加 */
/* height: 100vh - 92px;   用这种高度，scroll失效  */
/* .content {
  height: 300px;
  height: calc(100% - 92px);
} */

/* 以下css设置能实现scroll滑动 */
/* 但是使用该css后，分类处的tabbar置顶失败，因为已经没有用原生的滑动了。目前认为是因为sticky与home的高度有冲突 */
#home {
  position: absolute;
	height: 100vh;
  width: 100%;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 43px;
  bottom: 49px;
  z-index: -10px;
}
.controlTab {
  background-color: #fff;
}
</style>