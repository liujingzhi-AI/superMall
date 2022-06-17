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

// export function getDetail(params = {}) {
//   return request({
//     url: '/detail',
//     method: 'get',
//     params,
//   })
// }

export const getDetail = (params = {}) => {
  return request({
    url: '/detail',
    method: 'get',
    params,
  })
}

// 商品基本信息
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
		this.price = itemInfo.price;
		this.oldPrice = itemInfo.oldPrice;
		this.lowNowPrice = itemInfo.lowNowPrice;
		this.discountDesc = itemInfo.discountDesc;
		this.columns = columns;
		this.services = shopInfo.services;
  }
}

// 店家信息
export class Shop {
	constructor(shopInfo) {
	  this.shopLogo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.score = shopInfo.score;
		this.cSells = shopInfo.cSells;
		this.cGoods = shopInfo.cGoods;
	}
}