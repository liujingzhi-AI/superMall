<template>
  <div class="cart-bottom">
    <div class="left">
      <div class="check-button" :class="{check: isChecked}" @click="checkChange">
        <img src="@/assets/img/cart/yes1.svg" alt="">
      </div>
      <span>全选</span>
    </div>
    <div class="middle">
      合计:￥{{totalPrice}}
    </div>
    <div class="right">
      <br>
      <span @click="buyIt">去计算({{length}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Cartbottom",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      isChecked: false
    };
  },

  mounted() {
  },
  computed: {
    totalPrice() {
      let price = 0
      this.goods.forEach(item => {
        // console.log(item);
        if(item.checked == true) {
          price += Number(item.price * item.count) 
        } 
      })
      return price.toFixed(2)
    },
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    }),
    lista() {
      return JSON.parse(JSON.stringify(this.list))
    }
  },
  watch: {
    lista (newVal) {
      let arr = []
      newVal.forEach(item => {
        arr.push(item.checked)
      })
      let flag = arr.includes(false) 
      if(flag){
        this.isChecked = false
      } else {
        this.isChecked = true
      }
    }
  },
  methods: {
    // 全选
    checkChange() {
      this.isChecked = !this.isChecked
      if (this.isChecked == true) {
        this.list.forEach (item => {
          item.checked = true
        })
        this.$store.dispatch('checkChanAll', this.list)
      } else {
        this.list.forEach (item => {
          item.checked = false
        })
        this.$store.dispatch('checkChanAll', this.list)
      }
    },
    // 去结算
    buyIt() {
      if(this.list.length == 0) {
        this.$toast.show("请选择需要购买的商品", 2000)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.cart-bottom {
  display: flex;
  flex-direction: row;    // 从左向右排序
  align-items: center;    // 上下居中
  justify-content: space-between;  // 元素之间有空格
  height: 40px;
  background-color: rgb(241, 235, 235);
  .left {
    text-align: center;
    width: 15%;
    display: flex;
    span{
      margin-left: 5px;
      margin-top: 3px;
    }
  }
  .middle {
    text-align: center;
    width: 60%;
  }
  .right {
    text-align: center;
    width: 25%;
    height: 40px;
    background-color: rgb(240, 103, 49);
    color: #fff;
  }
}
.check-button {
  border: 2px solid #aaa;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 5px;
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