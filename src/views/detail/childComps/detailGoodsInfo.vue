<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc" clear-fix>
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SupermallDetailgoodsinfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,  // 计数
      imagesLength: 0,   // 图片长度，也就是图片个数
    };

  },
  mounted() {
    
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  },
  methods: {
    imgLoad() {
      // 如果下面只写this.$emit('imgLoad')的话，那么有多少张图片就会回调多少出去，十分浪费性能。
      if (++this.counter === this.imagesLength) {
        this.$emit('imgLoad')
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.info-list {
  img {
    width: 100%;
  }
}
</style>