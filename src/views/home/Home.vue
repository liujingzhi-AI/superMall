<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
export default {
  name: 'Home',
  components:{
    NavBar
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.home-nav{
  /* 这是base.css中定义的颜色 */
  background-color: var(--color-tint);
  color: white;
}
</style>