<template>
  <div class="wrapper">
    <router-link v-for="item in homeInfo" :key="item.id"
      :to= "`/shop/${item.id}`">
      <homeShop :shopInfo = "item"/>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { myget } from '@/request'
import homeShop from './HomeShopView.vue'

// 获取首页店铺的信息
const getHomeInfoEffect = () => {
  const homeInfo = ref([])
  async function getHomeInfo () {
    try {
      const response = await myget('/shop/hot-list')
      if (response.ok) {
        const res = await response.json()
        if (res.errno === 0) {
          homeInfo.value = res.data
        }
      } else {
        alert('服务器响应失败')
      }
    } catch {
      alert('请求失败')
    }
  }
  getHomeInfo()
  return { homeInfo }
}

export default defineComponent({
  name: 'homeShopTotal',
  components: { homeShop },
  setup () {
    const { homeInfo } = getHomeInfoEffect()
    return { homeInfo }
  }
})
</script>

<style lang = 'scss' scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>
