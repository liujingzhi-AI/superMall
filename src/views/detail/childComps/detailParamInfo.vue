<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Detailparaminfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
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

<style lang="scss" scoped>
.param-info {
  padding: 20px 15px;
  font-style: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 42px;
      td {
        border-bottom: 1px solid rgba(100,100,100,.1);
      }
    }
  }
}
.info-param {
  border-top: 1px solid rgba(0,0,0,.1);
}
.param-value {
  color: #eb4868;
  margin-left: 20px;
}
.info-img img {
  width: 100%;
}
</style>