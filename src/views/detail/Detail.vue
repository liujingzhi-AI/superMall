<template>
  <div id="detail">
    <!-- 顶部tabbar -->
    <detail-navbar></detail-navbar>
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
  </div>
</template>

<script>
import detailNavbar from '@/views/detail/childComps/detailNavbar'
import DetailSwiper from './childComps/detailSwiper';
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
import detailShopInfo from '@/views/detail/childComps/detailShopInfo'
import {
  getDetail,
  Goods,
  Shop,
} from "../../network/detail"
export default {
  name: "Detail",
  components: {
    detailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    detailShopInfo
  },
  data() {
    return {
      iid: null,    // 当前点击商品的id
      res: null,    // 接口拿到的全部数据
      topImages: [],  // 顶部轮播图片
      goods: {},  // 轮播图下面的商品基本信息
      shop: {},   // 店铺信息
      flag: false,  // 在goods没有传递过去之前，组件不显示
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
      this.flag = true
      console.log("数据",this.shop);
    })
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>