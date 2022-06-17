<template>
<!-- 对象的常用解构方法：Object.keys():对象的键以数组形式输出，Object.values():对象的值以数组形式输出，Object.entries():返回键值对数组。 -->
  <div v-if="flag" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span  v-if="goods.discountDesc" class="discount-desc">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    
    <div class="info-service">
      <div v-for="index in goods.services.length-1" :key="index"> 
				<img :src="goods.services[index-1].icon" alt=""> 
				{{goods.services[index-1].name}}
			</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detailbaseinfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      flag: false,   // 组件是否显示
    };
  },
  mounted() {
    this.flag = (Object.keys(this.goods).length !== 0)
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.info-title {
  margin: 10px 10px 0 10px;
  font-size: 15px;
  color: black;
}
.info-price {
  margin: 10px 10px 0 10px;
}
.n-price {
  font-size: 20px;
  color: var(--color-tint);
}
.o-price {
  text-decoration: line-through;
  margin-left: 10px;
}
.discount-desc {
  border-radius: 3px;
  background: var(--color-tint);
  color: #fff;
  margin: 0 0 0 10px;
  line-height: 22px;
}
.info-other {
  width: 90%;
  margin: 20px 0 0 3%;
  display: flex;
  flex-direction: row;    // 从左向右排序
  justify-content: space-between;  // 元素之间有空格
}
.info-service {
  height: 60px;
  display: flex;
  flex-direction: row;    // 从左向右排序
  align-items: center;    // 上下居中
  justify-content: space-between;  // 元素之间有空格
  margin: 10px 3% 0 3%;
  color: black;
  font-size: 14px;
  padding-top: -2px;
  border-top: 1px solid rgb(210, 210, 210);
  border-bottom: 5px solid rgb(230, 230, 230);
  img {
    width: 14px;
    height: 14px;
  }
}
</style>