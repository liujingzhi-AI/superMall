<template>
  <div class="Item">
    <img :src="goodsItem.show.img" alt="" class="imgItem">  
    <p class="pItem" :title="goodsItem.title">{{goodsItem.title}}</p>
    <div class="thrid">
      <div class="vleft">
        <p style="display:inline;margin-left:30%">{{goodsItem.orgPrice}}</p>
      </div>
      <div class="vmiddle">
        <p style="display:inline;">{{collect}}</p>
      </div>
      <div class="vright">
        <img src="@/assets/img/Home/收藏.svg" alt="" class="collect">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goodslistitem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  computed: {
    collect: function() {
      if(this.goodsItem.cfav > 1000){
        return (this.goodsItem.cfav/1000).toFixed(1) + 'k'
      } else {
        return this.goodsItem.cfav
      }
    }
  },
  methods: {},
};
</script>

<style scoped>
  .Item {
    width: 49%;
    /* float: left; */
    /* margin: 0 0 10px 3%; */
  }
  .imgItem {
    width: 100%;
    height: 270px;
    border-radius: 5px;
  }
  .thrid {
    padding-top:5%;
    width: 100%;
    display: flex;
    float: left;
  }
  .vleft {
    width: 55%;
    margin-top: 4px;
  }
  .vmiddle {
    width: 10%;
    margin-top: 4px;
    text-align:right;
    margin-right: 5px;
  }
  .vright {
    width: 30%;
  }
  .collect {
    width: 20px;
    height: 20px;
    display: inline;
    margin-left: 5px;
  }
  .pItem {
    /* 超出部分以省略号形式隐藏 */
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    font-size: 15px;
  }
</style>