<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in finalData" :goodsItem="item" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  components: { GoodsListItem },
  name: "Goodslist",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
    currentIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      data1:[],
      data2:[],
      data3:[],
      finalData:[],  // 最终商品展示数据
      nowindex: 0,   // 当前选中页签
    };
  },
  mounted() {
    this.data1 = this.goods['new'].list
    this.data2 = this.goods['pop'].list
    this.data3 = this.goods['sell'].list
    this.dataChange()
  },
  methods: {
    // 展示商品数据变化
    dataChange(){
      switch(this.nowindex) {
        case 0:
          this.finalData = this.data1
          break;
        case 1:
          this.finalData = this.data2
          break;
        case 2:
          this.finalData = this.data3
          break;
      }
    }
  },
  watch: {
    currentIndex (newVal){
      this.nowindex = newVal
      this.dataChange()
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