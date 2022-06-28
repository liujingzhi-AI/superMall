<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list class="List"></cart-list>

    <!-- 底部的汇总 -->
    <cart-bottom
      class="cartBottom"
      :goods="list"
    ></cart-bottom>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import cartList from '@/views/cart/childComponts/cartList'
import cartBottom from '@/views/cart/childComponts/cartBottom'

import { mapGetters } from 'vuex'
// 该部分的修改由cart分支执行
export default {
  name: 'Cart',
  components: {
    NavBar,
    cartList,
    cartBottom
  },
  computed: {
    // 两种写法
    // ...mapGetters([
    //   'cartLength',
    //   'cartList'
    // ])
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.list);
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
	height: 100vh;
  width: 100%;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
}
.List {
  position: absolute;
  top: 44px;
  width: 100%;
  padding-bottom: 89px;
  background-color: #fff;
}
.cartBottom {
  position: fixed;
  width: 100%;
  bottom: 48px;
  z-index: 1;
}
</style>  