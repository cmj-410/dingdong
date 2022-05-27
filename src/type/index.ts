// 登录成功返回的数据结构
export interface Iloginres{
  errno: number
  message: string
  token: string
  account: {
    userName: string,
    phone: number
  }
}
// 提交vuex前通过props拿到的商品描述信息
export interface IcartProInfo{
  productId: number,
  productName: string,
  price: number,
  imgUrl: string,
}

export interface IshopInfo{
  // 店名
  name: string
}

// vuex中更改购物车内商品信息和数量时提交的数据结构
export interface IcartProductInfo extends IcartProInfo{
  shopId: string,
  name: string
  // 指示+1/-1
  num: number
}

// vuex中购物车的数据结构
export interface IcartList{
  [shopId: string]:{
    // 商店名
    name: string,
    [productId: number]:{
      productId: number,
      productName: string,
      price: number,
      imgUrl: string,
      // 商品数量，后来添加的
      number: number
    }
  }
}

// vuex中sumList和countList的数据结构
export interface IsumCountList{
  [shopId: string]: number
}

// 订单页需要的数据结构
export interface IconfirmPro{
  productName: string,
  price: number,
  imgUrl: string,
  number: number,
}

export interface IpersonAdd{
  userName: string,
  phone: string,
  address: string
}
