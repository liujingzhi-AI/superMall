// 作为函数的时候加中括号了
import {
  ADD_COUNTER,
  ADD_TO_CART
} from '@/store/mutation-type'

export default {
  // 数量增加
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  // 加入到购物车
  [ADD_TO_CART](state,payload) {
    payload.checked = false
    payload.count = 1
    state.cartList.push(payload)
  }
}