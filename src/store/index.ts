import { IcartList, IcartProductInfo, IsumCountList } from '@/type'
import { createStore } from 'vuex'

const mystore = createStore({
  state: {
    cartList: {} as IcartList,
    sumList: {} as IsumCountList,
    countList: {} as IsumCountList
  },
  getters: {
  },
  mutations: {
    // 改变购物车数据，增添描述以及（数量+1/-1）
    changeCartProductNum (state, payload: IcartProductInfo) {
      const { shopId, name, productId, productName, price, imgUrl, num } = payload
      if (!state.cartList[shopId]) {
        state.cartList[shopId] = { name }
      }
      if (!state.cartList[shopId][productId]) {
        const number = 0
        state.cartList[shopId][productId] = { productId, productName, price, imgUrl, number }
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
    },
    // 计算某商店总件数和总价
    updateShopSum (state, payload: { shopId: string}) {
      const { shopId } = payload
      const shopProList = state.cartList[shopId]
      let sum = 0
      let count = 0
      for (const i in shopProList) {
        // 跳过商店名
        if (i === 'name') {
          continue
        }
        count += shopProList[i].number
        sum += shopProList[i].number * shopProList[i].price
      }
      state.countList[shopId] = count
      state.sumList[shopId] = sum
    },
    // 清空某商店的购物车
    clearShopCart (state, payload: { shopId: string}) {
      const { shopId } = payload
      state.cartList[shopId] = { name: '' }
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
