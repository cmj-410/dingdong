<template>
  <div class="wrapper">
    <div class="header">
        <button>后退</button>
        <button>...</button>
    </div>
    <div class="shopIntro">
      <homeShop :shopInfo = 'shopInfor'/>
    </div>
    <div class="upBackground"></div>
    <div class="downBackground"></div>
    <div class="shopProduct">
      <div class="contexMenu">
        <template v-for="item in shopMenu" :key="item">
          <div class="contexMenu__item">{{item}}</div>
        </template>
      </div>
      <div class="productInfo">
        <shopTotalInduction :productIntro = 'shopProInfo[0]'/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { myget } from '@/request'
import { defineComponent, ref } from 'vue'
import homeShop from '../Home/HomeShopView.vue'
import shopTotalInduction from './ShopTotalInductionView.vue'

// 获取具体店铺的信息
const getShopInfoEffect = () => {
  const shopInfor = ref([])
  const shopProInfo = ref([])
  const shopMenu = ref([])
  async function getShopInfo () {
    try {
      const response = await myget('/shop/1')
      if (response.ok) {
        const res = await response.json()
        if (res.errno === 0) {
          shopInfor.value = res.shopdata
          shopProInfo.value = res.productInformation
          shopMenu.value = res.contextMenu
        }
      } else {
        alert('服务器响应失败')
      }
    } catch {
      alert('请求失败')
    }
  }
  getShopInfo()
  return { shopInfor, shopMenu, shopProInfo }
}

export default defineComponent({
  name: 'shopView',
  components: { homeShop, shopTotalInduction },
  setup () {
    const { shopInfor, shopMenu, shopProInfo } = getShopInfoEffect()
    return { shopInfor, shopMenu, shopProInfo }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  .shopIntro{
    margin: 0 0.1rem;
  }
  .header{
    height: 0.2rem;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.1rem;
    background: #aaa;
    position: sticky;
    top: 0;
    button{
      width: 0.4rem;
      background: #aaa;
      color: white;
      border: none;
    }
    button:active{
      color: red;
    }
  }
  .upBackground{
    position: absolute;
    height: 15%;
    width: 100%;
    top: 0;
    z-index: -1;
    background: #aaa;
  }
  .downBackground{
    position: absolute;
    height: 85%;
    width: 100%;
    bottom: 0;
    z-index: -1;
  }
  .shopProduct{
    display: flex;
    flex-direction: row;
    background: #ccc;
    .contexMenu{
      width: 0.6rem;
      height: 100%;
      &__item{
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        border: solid 1px;
        box-sizing: border-box;
      }
    }
    .productInfo{
      flex: 1;
      background: white;
    }
  }
}
</style>
