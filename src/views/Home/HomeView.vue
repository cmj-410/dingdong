<template>
  <div class="wrapper">
    <homeHeader></homeHeader>
    <template v-for="item in homeInfo" :key="item.id">
      <!-- {{item}} -->
      <homeShop :shopInfo = 'item'/>
    </template>
  </div>
</template>

<script lang="ts">
import { myget } from '@/request'
import { defineComponent, ref } from 'vue'
import homeHeader from './HomeHeaderView.vue'
import homeShop from './HomeShopView.vue'

// 获取首页的信息
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
  components: { homeHeader, homeShop },
  setup () {
    const { homeInfo } = getHomeInfoEffect()
    return { homeInfo }
  }
})
</script>

<style lang = 'scss' scoped>
  .wrapper{
    margin: 0.1rem 0.1rem;
  }
</style>
