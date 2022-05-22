import { createStore } from 'vuex'

const mystore = createStore({
  state: {
    cartList: {} as any,
    sumList: {} as any,
    countList: {} as any
  },
  getters: {
  },
  mutations: {
    changeCartProductNum (state, payload) {
      const { shopId, productId, productName, price, imgUrl, num } = payload
      if (!state.cartList[shopId]) {
        state.cartList[shopId] = {}
      }
      if (!state.cartList[shopId][productId]) {
        state.cartList[shopId][productId] = { productId, productName, price, imgUrl }
        state.cartList[shopId][productId].number = 0
      }
      if (num === -1) {
        if (state.cartList[shopId][productId].number > 0) {
          state.cartList[shopId][productId].number -= 1
        }
      }
      if (num === 1) {
        if (state.cartList[shopId][productId].number < 99) {
          state.cartList[shopId][productId].number += 1
        }
      }
      // 更改完数量后触发一个计算某商铺当前的商品总数和总价的函数
      mystore.commit('updateShopSum', { shopId })
      // console.log(state.cartList)
    },
    // 计算某商店总件数和总价
    updateShopSum (state, payload) {
      const { shopId } = payload
      const shopProList = state.cartList[shopId]
      let sum = 0
      let count = 0
      for (const i in shopProList) {
        count += shopProList[i].number
        sum += shopProList[i].number * shopProList[i].price
      }
      state.countList[shopId] = count
      state.sumList[shopId] = sum
    },
    // 清空某商店的购物车
    clearShopCart (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = undefined
      // 记得清空总件数和总价
      state.countList[shopId] = 0
      state.sumList[shopId] = 0
    }
  },
  actions: {
  },
  modules: {
  }
})

export default mystore
