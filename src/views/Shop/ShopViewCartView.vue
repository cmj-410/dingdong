<template>
  <div class="wrapper">
    <div class="orderList" :hidden = 'ishidden'>
      <div class="topbar"></div>
      <div class="aboveList">
        <span>已选商品</span>
        <span @click="clearAll">清空</span>
      </div>
      <template v-for="(item, key) of curCartList" :key="key">
        <template v-if="item.number > 0">
          <cartProductionList :msg = 'item'/>
        </template>
      </template>
    </div>
    <div class="footerContent" @click="changeOpen()" >
      <img src="../../assets/cart.png"><span class="count">{{sumNumber}}</span>
      <span>￥{{sumCost}}</span>
      <button>去结算</button>
    </div>
  </div>
</template>

<script lang="ts">
import mystore from '@/store'
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import cartProductionList from './CartProductionListView.vue'

export default defineComponent({
  name: 'shopViewCart',
  components: { cartProductionList },
  setup () {
    const ishidden = ref(true)
    const route = useRoute()
    const shopId = route.params.id
    // 获取当前商店购物车信息
    const curCartList = computed(() => {
      const res = mystore.state?.cartList?.[shopId as string] ?? {}
      return res
    })
    // 商品总件数
    const sumNumber = computed(() => {
      return mystore.state.countList[(shopId as string)] ?? 0
    })
    // 当前商铺总价
    const sumCost = computed(() => {
      return mystore.state.sumList[(shopId as string)] ?? 0
    })
    // 试图打开小购物车
    const changeOpen = () => {
      if (sumNumber.value > 0) {
        ishidden.value = !ishidden.value
      } else {
        ishidden.value = true
      }
    }
    // 清空购物车的逻辑
    const clearAll = () => {
      mystore.commit('clearShopCart', { shopId })
    }
    return {
      ishidden,
      curCartList,
      sumNumber,
      sumCost,
      changeOpen,
      clearAll
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  background: white;
  .orderList{
    .topbar{
      height: 0.16rem;
      border-radius: 0.12rem 0.12rem 0 0;
      background: rgb(245, 245, 139);
    }
    .aboveList{
      display: flex;
      justify-content: space-between;
      padding: 0 0.03rem;
    }
  }
 .footerContent{
    position: relative;
    height: 0.4rem;
    img{
      width: 0.3rem;
      height: 0.3rem;
      position: relative;
      top: 0.05rem;
      left: 0.05rem;
    }
    .count{
      display: inline-block;
      width: 0.15rem;
      height: 0.15rem;
      line-height: 0.15rem;
      text-align: center;
      border-radius: 50%;
      background: red;
      color: white;
      position: relative;
      bottom: 0.15rem;
    }
    button{
      position: absolute;
      right: 0.03rem;
      bottom: 0.05rem;
      width: 0.6rem;
      height: 0.3rem;
      line-height: 0.3rem;
      color: white;
      background: skyblue;
      border: none;
      border-radius: 0.3rem;
    }
  }
}
</style>
