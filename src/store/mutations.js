// 作为函数的时候加中括号了
import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECK_CHAN
} from '@/store/mutation-type'

export default {
  // 数量增加
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  // 加入到购物车
  [ADD_TO_CART](state,payload) {
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload)
  },
  // checked状态改变
  [CHECK_CHAN](state,payload) {
    state.cartList.forEach(item => {
      if(item.iid == payload.iid){
        item.checked = payload.checked
      }
    });
  }
}