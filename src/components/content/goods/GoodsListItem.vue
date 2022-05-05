<template>
  <div>
    <div class="Item">
      <img :src="goodsItem.show.img" alt="" class="imgItem">  
      <p class="pItem" :title="goodsItem.title">{{goodsItem.title}}</p>
      <div>
        <p style="display:inline;margin-left:10px">{{goodsItem.orgPrice}}</p>
        <p style="display:inline;line-height:10px;margin-left:35px">{{goodsItem.cfav}}</p>
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
  methods: {},
};
</script>

<style scoped>
  .Item {
    width: 46%;
    float: left;
    margin: 0 0 10px 3%;
  }
  .imgItem {
    width: 100%;
    height: 270px;
  }
  .collect {
    width: 20px;
    height: 20px;
    padding-top: 5px;
    display: inline;
  }
  .pItem {
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
</style>