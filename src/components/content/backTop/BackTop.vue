<template>
  <div class="back-top">
    <img src="@/assets/img/backtop.png">
  </div>
</template>

<script>
export default {
  name: "SupermallBacktop",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
    background-color: #fff;
    border-radius: 10px;
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>