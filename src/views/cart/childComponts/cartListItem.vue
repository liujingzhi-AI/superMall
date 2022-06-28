<template>
  <div class="Item">
    <div class="left" @click="checkChange">
      <check-button class="checkB" :isChecked="listItem.checked"></check-button>
    </div>
    <div class="middle">
      <img :src="listItem.image" alt="" class="imgItem">  
    </div>
    <div class="right">
      <p style="font-size:18px">{{listItem.title}}</p>
      <p style="margin-top:25px">{{listItem.desc}}</p>
      <div style="margin-top:25px">
        <span style="color:var(--color-tint); font-size:15px">￥{{listItem.price}}</span>
        <span class="num">x{{listItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from '@/components/content/checkButton/CheckButton';

export default {
  components: { checkButton },
  name: "Cartlistitem",
  props: {
    listItem: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    // 是否选中
    checkChange() {
      this.listItem.checked = !this.listItem.checked
    }
  },
};
</script>

<style lang="scss" scoped>
.Item {
  height: 120px;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  border-bottom: 1px solid rgb(68, 66, 66);
  display: flex;
  flex-direction: row;    // 从左向右排序
  align-items: center;    // 上下居中
  justify-content: space-between;  // 元素之间有空格
  .left {
    width: 10%;
    .checkB {
      width: 20px;
      height: 20px;
    }
  }
  .middle {
    width: 30%;
  }
  .right {
    width: 60%;
    p {
      /* 超出部分以省略号形式隐藏 */
      overflow:hidden;
      white-space:nowrap;
      text-overflow:ellipsis;
      font-size: 15px;
    }
    .num {
      margin-left: 150px;
      font-size: 15px;
    }
  }
}
.imgItem {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
</style>