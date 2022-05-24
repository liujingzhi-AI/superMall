<template>
  <div class="Item">
    <img :src="goodsItem.show.img" alt="" class="imgItem" @load="imageLoad">  
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
  methods: {
    // 如果图片为设定高度，那么有可能出现刷新时，高度不够用的情况，由于我的高度是设置好了的，所以未出现卡顿的情况
    // 但还是进行一下监听操作。
    imageLoad() {
      // 说明为何使用事件总线，由于在这里想用scroll的refresh，但是该组件与Scroll组件之间的距离相隔太远了。事件总线可以在任何组件中使用。
      // 在Vue3.0中，this.$bus事件总线已经被mitt插件替代了。
      // 使用事件总线监听
      this.$bus.$emit('itemImageLoad')
    }
  },
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