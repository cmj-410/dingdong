import { createStore } from 'vuex'
import { myget } from '@/request'
import router from '@/router'

const mystore = createStore({
  state: {
    homeInfo: {}
  },
  getters: {
  },
  mutations: {
    // 设置首页信息到vuex中
    setHomeInfo (state, payload) {
      state.homeInfo = payload
      // 获取到home信息后再跳转页面
      router.push({ name: 'home' })
    }
  },
  actions: {
    // 获取首页的信息
    async getHomeInfo (context) {
      try {
        const response = await myget('/shop/hot-list')
        let res
        if (response.ok) {
          res = await response.json()
          if (res.errno === 0) {
            context.commit('setHomeInfo', res.data)
          }
        } else {
          alert('服务器响应失败')
        }
      } catch {
        alert('请求失败')
      }
    }
  },
  modules: {
  }
})

export default mystore
