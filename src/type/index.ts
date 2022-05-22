export interface Iloginres{
  errno: number
  message: string
  token: string
}
// ref对象，通过网络请求获得的
export interface IcartItem{
  value: {
    productId: number,
    productName: string,
    price: number,
    imgUrl: string,
    number: number
  }
}
// 自己构造的带有number
export interface IcartItemCount{
  productId: number,
  productName: string,
  price: number,
  imgUrl: string,
  number: number
}

// vux中的购物车类型
// export interface cartListItem{
//   productId:{
//     productName: string,
//     price: number,
//     imgUrl: string,
//     number: number
//   }
// }
// export interface cartList{
//   shopId: cartListItem
// }
