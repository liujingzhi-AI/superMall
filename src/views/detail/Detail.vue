<template>
  <div id="detail">
    <!-- 顶部tabbar -->
    <detail-navbar></detail-navbar>
    <!-- 轮播图 -->
    <detail-swiper
      :topImages="topImages"
    ></detail-swiper>
  </div>
</template>

<script>
import detailNavbar from '@/views/detail/childComps/detailNavbar'
import DetailSwiper from './childComps/detailSwiper';

import {
  getDetail
} from "../../network/detail"
export default {
  name: "Detail",
  components: {
    detailNavbar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,    // 当前点击商品的id
      res: null,    // 接口拿到的全部数据
      topImages: [],  // 顶部轮播图片
    };
  },
  created() {
    console.log("当前路由值",this.$route);
    // 解释一下为什么这里是id,而不是iid,这是因为在路由的里面写的是id
    // 保存传入的iid
    this.iid = this.$route.params.id

    // 根据iid拿到详情页信息
    // getDetail(this.iid).then(res => {
      //   console.log(res);
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
      // 顶部轮播数据
      this.topImages = res.result.itemInfo.topImages
      console.log("轮播图数据",this.topImages);
    })
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>

</style>