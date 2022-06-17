<template>
  <!-- 店家信息 -->
  <div>
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-milddle">
      <div class="shop-left">
        <div class="shoplt">
          <p style="text-align: center;font-size:15px">{{cSells}}</p>
          <p>总销量</p>
        </div>
        <div class="shoplb">
          <p style="font-size:15px">{{shop.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-right">
        <div v-for="(item,i) in shop.score" class="shoprr">
          <span style="margin-left:15%">{{item.name}}</span>
          <span :class="item.isBetter == true ? 'redColor' : 'greenColor'" style="margin-left:15%;width:30%">{{item.score}}</span>
          <span :class="item.isBetter == true ? 'redback' : 'greenback'">{{item.isBetter == true ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <button class="bottom-button">进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detailshopinfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    cSells: function() {
      if(this.shop.cSells > 10000){
        return (this.shop.cSells/10000).toFixed(1) + '万'
      } else {
        return this.shop.cSells
      }
    },
  },
  mounted() {
    
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.shop-top {
  height: 80px;
  display: flex;
  align-items: center;
  margin: 0 3%;
  .shop-name {
    margin-left: 10px;
  }
  img {
    width: 50px;
    height: 50px;
    border: 2px solid rgb(184, 177, 177);
    border-radius: 25px;
  }
}
.shop-milddle {
  height: 70px;
  display: flex;
  align-items: center;
  .shop-left {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: black;
    border-right: 1px solid rgb(184, 177, 177);
    .shoplt + .shoplb{
      text-align: center;
    }
    p {
      margin-top: 10px;
    }
  }
  .shop-right {
    width: 50%;
    .shoprr {
      display: flex;
      flex-direction: row;
    }
    span {
      margin-top: 10px;
    }
  }
}
.greenColor {
  color: green;
}
.redColor {
  color: red;
}
.redback {
  background-color: red;
  color: white;
}
.greenback {
  background-color: green;
  color: white;
}
.shop-bottom {
  text-align: center;
}
.bottom-button {
  margin: 10px;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border-color: white;
  font-size: 15px;
  color: rgb(105, 101, 101);
}
</style>