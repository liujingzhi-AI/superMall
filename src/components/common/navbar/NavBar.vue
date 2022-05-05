<!-- 顶部插槽 -->
<template>
  <div class="nav-bar">
    <!-- 由于slot会被具体的元素替换，在slot上的属性也会被替换，所以要在slot外面包一个div来设置属性 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.right, .left {
  width: 60px;
}
.center {
  flex: 1;
}
</style>