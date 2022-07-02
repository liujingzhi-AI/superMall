// 作为参数的时候没有加中括号
import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECK_CHAN,
  CHECK_CHAN_ALL
} from '@/store/mutation-type'

export default {
  addCart (context, payload) {
    // return new Promise((resolve,reject) => {
      // 1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        // resolve('当前的商品数量加一')
        return '当前的商品数量加一'
      } else {
        // payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        // resolve('添加了新的商品')
        return '添加了新的商品'
      } 
    // })
  },
  // 改变选中商品的checked状态
  checkChan(context, payload){
    payload.checked = !payload.checked
    context.commit(CHECK_CHAN, payload)
  },
  // 通过全选改变所有商品的选中状态
  checkChanAll(context, payload){
    context.commit(CHECK_CHAN_ALL, payload)
  }
}