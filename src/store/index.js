import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '@/store/mutations'
import actions from '@/store/actions'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
  // 修改任何state里面的东西都要经过mutations
  state: {
    cartList: [],  // 商品数组
  },
  mutations,  
  actions,
  // mutations唯一的一个目的就是修改state中的状态
  // mutations中每一个方法尽可能完成的事情比较单一一点
  // 但是下面的代码中，新添加商品和商品数量加一是放在一个函数里进行计算。无法区别每次到底是加一还是新增商品
  // mutations: {
    // addCart (state, payload) {
    //   // 1.payload 新添加的商品
    //   // let oldProduct = null
    //   // for(let item of state.cartList) {
    //   //   if(item.iid === payload.iid) {
    //   //     oldProduct = item
    //   //   }
    //   // }
    //   // // 2.判断oldProduct是否有值
    //   // if (oldProduct) {
    //   //   oldProduct.count += 1 
    //   // } else {
    //   //   payload.count = 1
    //   //   state.cartList.push(payload)
    //   // }



    //   // 1.查找之前数组中是否有该商品
    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)

    //   // 2.
    //   if (oldProduct) {
    //     oldProduct.count += 1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    //   console.log(this.state.cartList);
    // },



    // // 数量增加
    // addCounter(state, payload) {
    //   payload.count++
    // },
    // // 加入到购物车
    // addToCart(state,payload) {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }
  // },
  // 所以放到actions中比较好一点
  // actions: {
    // addCart (context, payload) {
    //   // context={state,commit}
    //   // 1.payload 新添加的商品
    //   // let oldProduct = null
    //   // for(let item of state.cartList) {
    //   //   if(item.iid === payload.iid) {
    //   //     oldProduct = item
    //   //   }
    //   // }
    //   // // 2.判断oldProduct是否有值
    //   // if (oldProduct) {
    //   //   oldProduct.count += 1 
    //   // } else {
    //   //   payload.count = 1
    //   //   state.cartList.push(payload)
    //   // }

    //   // 1.查找之前数组中是否有该商品
    //   let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    //   // 2.
    //   if (oldProduct) {
    //     // oldProduct.count += 1
    //     context.commit('addCounter', oldProduct)
    //   } else {
    //     // payload.count = 1
    //     // context.state.cartList.push(payload)
    //     context.commit('addToCart', payload)
    //   }
    //   console.log(this.state.cartList);
    // },
  // }
})

// 3.挂载vue实例上
export default store