<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default() {
  //       return ''
  //     }
  //   },
  //   show: {
  //     type: Boolean,
  //     default() {
  //       return false
  //     }
  //   }
  // },
  data() {
    return {
      message: '',
      isShow: false,
    };
  },
  mounted() {
    console.log(this.isShow);
  },
  methods: {
    show(message='默认文字', duration=1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
      }, duration)
    }
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  // 居中处理
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  color: #fff;
  background-color: rgb(0, 0, 0, .6);
  z-index: 99;
}
</style>