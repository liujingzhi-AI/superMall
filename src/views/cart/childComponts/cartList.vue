<template>
  <div class="cart-list">
    <cart-list-item 
      v-for="(item,index) in cartList"
      :listItem="item"
      :key="index"
    ></cart-list-item>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CartListItem from './cartListItem.vue';
export default {
  name: "Cartlist",
  components: {
    CartListItem 
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.cart-list {
  display: flex;
    /* 除了float的另外一个方法。nowrap不包裹，所有东西一行塞。wrap包裹根据宽度来决定一行显示多少个 */
    flex-wrap: wrap;
    align-items: center;
		padding: 0 6px;
    /* 均等分 */
		justify-content: space-between;
}
</style>