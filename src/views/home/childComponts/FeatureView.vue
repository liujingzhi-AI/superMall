<template>
  <div>
    <div class="feature">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="@/assets/img/Home/recommend_bg.jpg" alt="" class="imgsty">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Featureview",
  props: {
    keywords: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.headline {
  color: black;
  text-align: center;
  margin-top: 10px;
}
.imgsty {
  width: 100%;
  height: 300px;
}
</style>