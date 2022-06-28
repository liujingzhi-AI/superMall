<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="@/assets/img/cart/yes1.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "Checkbutton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false
      }
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.check-button {
  border: 2px solid #aaa;
  border-radius: 50%;
}
img {
  width: 15px;
  height: 15px;
}
.check {
  border-color: red;
  background-color: red;
}
</style>