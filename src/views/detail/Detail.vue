<template>
  <div id="detail">
    <!-- 顶部tabbar -->
    <detail-navbar
      ref="detailNavbar"
      @titleClick="titleClick"
      :Index="Index"
    ></detail-navbar>
    <scroll 
      class="content" 
      ref="scroll"
      :probeType="probeType"
      @scroll="contentScroll"
    >
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
        ref="param"
        class="param"
        :paramInfo="paramInfo"
      ></detail-param-info>
      <!-- 用户评价信息 -->
      <detail-comment-info
        ref="comment"
        class="comment"
        :commentInfo="commentInfo"
        :recommendInfo="recommendInfo"
      ></detail-comment-info>
      <!-- 推荐商品 -->
      <goods-list 
        ref="goodList"
        class="goodList"
        v-if="recommendInfo.length !== '0'"
        :goods="recommend"
      ></goods-list>
    </scroll>
    <!-- 底部工具栏 -->
    <detail-bottom-bar
      @addCart="addCart1"
    ></detail-bottom-bar>
    <!-- 回到顶部 -->
    <!-- 如果想要监听组件的点击，那么一定要加native,否则监听不到 -->
    <back-top @click.native="backClick" v-show="backtopShow"></back-top>
    <!-- <toast
      :message="message"
      :show="show"
    ></toast> -->
  </div>
</template>

<script>
import detailNavbar from '@/views/detail/childComps/detailNavbar'
import detailSwiper from './childComps/detailSwiper';
import detailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
import detailShopInfo from '@/views/detail/childComps/detailShopInfo'
import detailGoodsInfo from '@/views/detail/childComps/detailGoodsInfo';
import detailParamInfo from '@/views/detail/childComps/detailParamInfo';
import detailCommentInfo from '@/views/detail/childComps/detailCommentInfo';
import detailBottomBar from '@/views/detail/childComps/detailBottomBar';
// import Toast from '@/components/common/toast/Toast'

import Scroll from '@/components/common/scroll/Scroll'
import GoodsList from '@/components/content/goods/GoodsList.vue';

import {itemListenerMixin, backTopMixin} from "@/common/mixin"

import { mapActions } from "vuex"
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "../../network/detail"
export default {
  name: "Detail",
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    detailNavbar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    Scroll,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    detailBottomBar,
    GoodsList,
    // Toast
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
      recommend: [],  // 简化推荐数据
      themeTopY: [],  // 每个模块距离顶部的距离数组
      distanceTop: 0,  // 滚动距离顶部的位置
      Index: 0,    // 当前选中Tab下标
      probeType: 3,     // 判断是否监听页面的滑动位置。0,1是不监听，2是监听惯性(不监听)，3是监听(惯性也监听)
      message: '',    // 提示语
      show: false,    // toast显隐
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
      // console.log(res);
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
    // console.log("deactivated");
    this.$bus.$off('detailItemImageLoad',this.itemImageListener)
  },
  mounted() {
  },
  watch: {
    // 推荐商品数据结构处理
    recommendInfo(val) {
      let arr = []
      val.forEach(item => {
        let show = {}
        let obj = {
          show
        }
        obj.show.img = item.image
        obj.title = item.title
        obj.orgPrice = item.price
        obj.cfav = item.cfav
        obj.iid = item.item_id
        arr.push(obj)
      })
      // console.log(arr);
      this.recommend = arr
    },
    // 监听当前滑动位置
    // distanceTop(val) {
    //   this.$refs.scroll.refresh()
    //   if(val > this.themeTopY[3]){
    //     this.Index = 3
    //   } else if (val > this.themeTopY[2]) {
    //     this.Index = 2
    //   } else if (val > this.themeTopY[1]) {
    //     this.Index = 1
    //   } else if (val > this.themeTopY[0]) {
    //     this.Index = 0
    //   }
    // }
  },
  methods: {
    // Vuex  actions的映射
    ...mapActions(['addCart']),
    goodsImgLoad() {
      this.$refs.scroll.refresh()
      // 当图片全部获取完了以后再去获取每个部分距离顶部的高度
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.goodList.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
      // console.log(this.themeTopY);
    },
    titleClick(val){
      // console.log("点击事件",val)
      this.$refs.scroll.scrollTo(0, -this.themeTopY[val], 200)
    },
    // 获取滚动位置
    contentScroll(position) {
      this.distanceTop = -position.y
      const positionY = -(position.y);
      let length = this.themeTopY.length
      for(let i = 0; i < length-1; i++) {
        if(this.Index !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])) {
          this.Index = i;
          // this.$refs.detailNavbar.currentIndex = this.Index
        }
      }
      // 1.判断BackTop是否显示
      this.listenShowBackTop(position)
    },
    // 添加购物车
    addCart1() {
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车
      // 虽然这样可以添加但是不要这样做
      // this.$store.cartList.push(product)
      // store的mutations调用写法
      // this.$store.commit('addCart',product)
      // store中actions调用写法
      // 如何在加入购物车以后弹出成功字样，封装toast
      // 在调用dispatch => addCart时，使用promise，返回成功，失败
      // 不过action本身就是promise,所以不用promise也可以，actions.js中包含了两种写法
      // actions可以映射到该文件内，就可以直接用this.addCart()
      this.addCart(product).then(res => {
        // this.message = res
        // this.show = true
        // // 一会儿提示框还需要消失，所以加一个定时器
        // setTimeout(() => {
        //   this.show = false
        // }, 2000);
        this.$toast.show(res,2000)
      })
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      //   this.$message.success(res)
      // })


    }
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