<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Tabber",
  data() {
    return {};
  },
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  /* 均匀分布居中 */
  /* justify-content: space-around; */
  /* align-items: center; */
  /* height: 49px; */
  background-color: #ccc;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 起到一个过渡作用，横坐标偏移，纵坐标偏移，偏移范围，偏移部分颜色 */
  box-shadow: 0 -3px 2px rgba(100, 100, 100, 0.4);
}
</style>