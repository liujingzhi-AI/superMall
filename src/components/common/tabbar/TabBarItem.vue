<template>
  <div class="tab-bar-item" @click="btn">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!-- :class不能直接卸载slot插槽当中，因为插槽是会被替换掉的 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  // 动态改变isActive还可以用计算属性
  computed: {
    isActive() {
      // 当前活跃的分支
      // 如果当前活跃的path和父组件传进来的path一样的,也就是不等于-1，就返回true
      // return this.$route.path.indexOf(this.path) !== -1
      return this.$route.path === this.path
    },
    // 如果活跃，就赋样式。不活跃就空
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    btn() {
      // this.ni = !this.ni
      // this.$router.replace(this.path).catch(err => err)
      this.$router.replace(this.path)
    }
  },
};
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>