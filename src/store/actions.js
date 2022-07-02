// 作为参数的时候没有加中括号
import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECK_CHAN,
  CHECK_CHAN_ALL
} from '@/store/mutation-type'

export default {
  addCart (context, payload) {
    // 1.查找之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    // 2.
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      // payload.count = 1
      // context.state.cartList.push(payload)
      context.commit(ADD_TO_CART, payload)
    }
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