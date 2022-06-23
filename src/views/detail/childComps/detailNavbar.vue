<template>
  <div>
    <nav-bar>
      <div slot="left" @click="returnBack">
        <img src="@/assets/img/Left.png" alt="" style="width:44px;height:35px;padding-top:6px">
      </div>
      <div slot="center" class="title">
        <div 
          v-for="(item,index) in titles" 
          class="title-item" 
          :class="{active: index == currentIndex}"
          @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: "detailNavbar",
  components: {
    NavBar 
  },
  props: {
    Index: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    };
  },
  mounted() {},
  watch: {
    Index(val) {
      this.currentIndex = val
    }
  },
  methods: {
    // tab点击改变
    itemClick(val) {
      this.currentIndex = val
      this.$emit('titleClick', val)
    },
    // 返回首页
    returnBack() {
      // this.$router.push('/Home')
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
</style>