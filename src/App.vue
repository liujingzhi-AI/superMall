<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>

<style>
/* 注意普通的import用于引用组件和js文件，@import用于引入css文件 */
 @import "assets/css/base.css";
</style>
