<template>
  <div class="goods">
    <goods-list-item 
      v-for="(item,index) in finalData" 
      :goodsItem="item" 
      :key="index" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  components: { GoodsListItem },
  name: "Goodslist",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      finalData:[],  // 最终商品展示数据
    };
  },
  mounted() {
    this.finalData = this.goods
  },
  methods: {
  },
  watch: {
    goods (newVal) {
      this.finalData = newVal
    }
  }
};
</script>

<style scoped>
  .goods {
    display: flex;
    /* 除了float的另外一个方法。nowrap不包裹，所有东西一行塞。wrap包裹根据宽度来决定一行显示多少个 */
    flex-wrap: wrap;
    align-items: center;
		padding: 0 6px;
    /* 均等分 */
		justify-content: space-between;
  }
</style>