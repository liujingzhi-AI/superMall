<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <p><img src="@/assets/img/detailBottom/service.png" alt=""></p>
        <span class="text">客服</span>
      </div>
      <div>
        <p><img src="@/assets/img/detailBottom/shop.png" alt=""></p>
        <span class="text">店铺</span>
      </div>
      <div>
        <p><img src="@/assets/img/detailBottom/collectBefore.png" alt=""></p>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detailbottombar",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 加入购物车
    addToCart() {
      this.$emit("addCart")
    }
  },
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  // position: relative;
  // bottom: 49px;  
  position: fixed;
  left: 0;
  right: 0;
  bottom: -1px;
  display: flex;
}
.bar-left {
  width: 60%;
  display: flex;
  div {
    width: 33%;
    text-align: center;
    img {
      width: 22px;
      height: 22px;
      margin-top: 7px;
    }
  }
}
.bar-right {
  width: 40%;
  background-color: pink;
  display: flex;
  div {
    width: 50%;
  }
  .cart {
    background-color: yellow;
    color: black;
    font-size: 14px;
    text-align: center;
    line-height: 49px;
  }
  .buy {
    background-color: rgb(236, 96, 119);
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 49px;
  }
}
</style>