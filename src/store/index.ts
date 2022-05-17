import { createStore } from 'vuex'

// 当刷新页面，此时从本地缓存中恢复购物车列表
const getCartList = () => {
  if (!localStorage.cartList) {
    return []
  } else {
    return JSON.parse(localStorage.cartList)
  }
}

// 当刷新页面，获取总消费
const getSumCost = () => {
  if (!localStorage.sumCost) {
    return 0
  } else {
    return +localStorage.sumCost
  }
}

const getSumNumber = () => {
  if (!localStorage.sumNumber) {
    return 0
  } else {
    return +localStorage.sumNumber
  }
}

// 计算购物车商品总价和计数
const computeCost = (state: {sumCost: number, sumNumber: number}, cartList: {number: number, price: number}[]) => {
  let sum = 0; let count = 0
  cartList.forEach(x => {
    sum += x.number * x.price
    count += x.number
  })
  state.sumCost = sum
  state.sumNumber = count
  console.log(state.sumCost)
  console.log(state.sumNumber)
  // 本地存储，mock的原因，数据不好看，先关掉了
  // localStorage.sumCost = sum
  // localStorage.sumNumber = count
  return [sum, count]
}

const mystore = createStore({
  state: {
    cartList: getCartList(),
    sumCost: getSumCost(),
    sumNumber: getSumNumber()
  },
  getters: {
  },
  mutations: {
    // 设置购物车（某一项物品可能改变），并触发计算总价的函数
    addCartList (state, payload) {
      // 首先寻找下该商品是否本就存放在购物车中
      // 这样就只需更新数量
      let ind = -1
      if (state.cartList.length !== 0) {
        state.cartList.every((x: {productId: number, productName: string}, i: number) => {
          // 商品名和id作为鉴别标志
          if (x.productId === payload.productId &&
             x.productName === payload.productName) {
            ind = i
            return false
          } else {
            return true
          }
        })
      }
      // 新商品，加入列表
      if (ind === -1) {
        state.cartList.push(payload)
      } else {
        state.cartList[ind].number = payload.number
      }
      // 购物车列表存储到本地，防刷新
      // localStorage.cartList = JSON.stringify(state.cartList)
      // 计算总值
      computeCost(state, state.cartList)
    }
  },
  actions: {
  },
  modules: {
  }
})

export default mystore
