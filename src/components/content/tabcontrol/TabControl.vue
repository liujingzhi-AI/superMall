<!-- 页面滑动过程中，文字固定定位部分的封装 -->
<template>
  <div class="tab-control">
    <div 
      v-for="(item,index) in titles" 
      class="tab-control-item"
      @click="Btnclick(index)"
      :class="{active:index == currentIndex}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabcontrol",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,   // 默认当前选中的第一个选项卡
    };
  },
  mounted() {},
  methods: {
    // titles选中变色
    Btnclick: function(index) {
      this.currentIndex = index
      this.$emit('indexChange',this.currentIndex)
    },
  },
};
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-style: 15px;
    height: 40px;
    /* line-height可以继承 */
    line-height: 40px;  
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>