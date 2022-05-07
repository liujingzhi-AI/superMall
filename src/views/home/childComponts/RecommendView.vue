<template>
  <div>
    <ul style="border-bottom: 8px solid #eee;">
      <li v-for="(item,index) in recommend" :key="index" class="rowCircle">
        <a :href="item.link">
          <div>
            <img :src="item.image" alt="" class="imgsty" /> 
          </div>
          <div style="text-align:center;font-size:15px">{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommendview",
  props:{
    recommend:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.rowCircle {
  display: inline-block;
  margin: 15px 0 15px 0;
  width: 25%;
  text-align: center;
}
.imgsty {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}
</style>