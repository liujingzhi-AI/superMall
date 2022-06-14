import { request } from "./request";

// export function getDetail(iid) {
//   return request({
//     url: '/detail',
//     method: 'get',
//     params:{
//       iid
//     }
//   })
// }

export function getDetail(params = {}) {
  return request({
    url: '/detail',
    method: 'get',
    params,
  })
}

// export const getDetail = (params = {}) => {
//   return request({
//     url: '/detail',
//     method: 'get',
//     params,
//   })
// }