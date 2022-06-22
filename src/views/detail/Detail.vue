<template>
  <div id="detail">
    <!-- 顶部tabbar -->
    <detail-navbar></detail-navbar>
    <scroll class="content" ref="scroll">
      <!-- 轮播图 -->
      <detail-swiper
        :topImages="topImages"
      ></detail-swiper>
      <!-- 商品基本信息 -->
      <detail-base-info
        v-if="flag"
        :goods="goods"
      ></detail-base-info>
      <!-- 店家基本信息 -->
      <detail-shop-info 
        :shop="shop"
      ></detail-shop-info>
      <!-- 详情页商品详情数据 -->
      <detail-goods-info
        :detailInfo="detailInfo"
         @imgLoad="goodsImgLoad"
      ></detail-goods-info>
      <!-- 详情页商品参数 -->
      <detail-param-info
        :paramInfo="paramInfo"
      ></detail-param-info>
      <!-- 用户评价信息 -->
      <detail-comment-info
        :commentInfo="commentInfo"
        :recommendInfo="recommendInfo"
      ></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import detailNavbar from '@/views/detail/childComps/detailNavbar'
import detailSwiper from './childComps/detailSwiper';
import detailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
import detailShopInfo from '@/views/detail/childComps/detailShopInfo'
import detailGoodsInfo from '@/views/detail/childComps/detailGoodsInfo.vue';
import detailParamInfo from '@/views/detail/childComps/detailParamInfo.vue';
import detailCommentInfo from './childComps/detailCommentInfo.vue';

import Scroll from '@/components/common/scroll/Scroll'

import {itemListenerMixin} from "@/common/mixin"

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "../../network/detail"
export default {
  name: "Detail",
  mixins: [itemListenerMixin],
  components: {
    detailNavbar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    Scroll,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
  },
  data() {
    return {
      iid: null,    // 当前点击商品的id
      res: null,    // 接口拿到的全部数据
      topImages: [],  // 顶部轮播图片
      goods: {},  // 轮播图下面的商品基本信息
      shop: {},   // 店铺信息
      flag: false,  // 在goods没有传递过去之前，组件不显示
      detailInfo: {},  // 商品详情数据
      paramInfo: {},   // 参数数据
      commentInfo: {},   // 用户评价数据
      recommendInfo: [],  // 推荐数据
    };
  },
  created() {
    console.log("当前路由值",this.$route);
    // 解释一下为什么这里是id,而不是iid,这是因为在路由的里面写的是id
    // 保存传入的iid
    this.iid = this.$route.params.id

    // 根据iid拿到详情页信息
    // getDetail(this.iid).then(res => {
    //     console.log(res);
    //   // 顶部轮播数据
    //   this.topImages = res.result.itemInfo.topImages
    //   console.log("轮播图数据",this.topImages);
    // })
    // 如果该接口调用放在created里面，那么由于keep-alive存在，使其保留状态，只会渲染一次。
    // 解决方法就是在keep-alive标签上exclude Detail
    getDetail({
      iid: this.iid
    }).then(res => {
      console.log(res);
      // 1.顶部轮播数据
      this.topImages = res.result.itemInfo.topImages
      let data = res.result
      // 2.商品基本信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
      // 4.详情页商品详情数据
      this.detailInfo = data.detailInfo
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 6.获取用户评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate
      }
      this.flag = true
    })
    //请求推荐数据
    getRecommend().then(res => {
      this.recommendInfo = res.data.list
    })
  },
  destroyed() {
    // 取消全局事件的监听
    console.log("deactivated");
    this.$bus.$off('detailItemImageLoad',this.itemImageListener)
  },
  mounted() {
  },
  methods: {
    goodsImgLoad() {
      this.$refs.scroll.refresh()
      // this.$refs.scroll.refresh();
      // this.themeTopY = [];
      // this.themeTopY.push(0);
      // this.themeTopY.push(this.$refs.param.$el.offsetTop);
      // this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      // this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      // this.themeTopY.push(Number.MAX_VALUE);
    },
  },
};
</script>

<style lang='scss' scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>