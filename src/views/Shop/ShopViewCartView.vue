<template>
  <div class="wrapper">
    <div :class="{mengCeng: !ishidden}" @click="changeOpen()"></div>
    <div class="orderList" :hidden = 'ishidden'>
      <div class="topbar"></div>
      <div class="aboveList">
        <span>已选商品</span>
        <span @click="clearAll">清空</span>
      </div>
      <template v-for="(item, key) of curCartList" :key="key">
        <template v-if="item.number > 0">
          <cartProductionList :msg = 'item' :shopInfor = 'shopInfor'/>
        </template>
      </template>
    </div>
    <div class="footerContent" @click="changeOpen()" >
      <img src="../../assets/cart.png">
      <span class="count">{{sumNumber}}</span>
      <span class="sumPrice">￥{{sumCost}}</span>
      <button @click="gotoOrder()">去结算</button>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import mystore from '@/store'
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import cartProductionList from './CartProductionListView.vue'

export default defineComponent({
  name: 'shopViewCart',
  components: { cartProductionList },
  props: ['shopInfor'],
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
    // 前往订单确认页面
    const gotoOrder = () => {
      if (sumNumber.value > 0) {
        router.push({ path: '/orderConfirm' })
      }
    }
    return {
      ishidden,
      curCartList,
      sumNumber,
      sumCost,
      changeOpen,
      clearAll,
      gotoOrder
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  background: white;
  position: relative;
  .mengCeng{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
  .orderList{
    position: relative;
    z-index: 2;
    .topbar{
      height: 0.16rem;
      background: rgb(245, 245, 139);
    }
    .aboveList{
      display: flex;
      justify-content: space-between;
      padding: 0 0.03rem;
      background: white;
    }
  }
 .footerContent{
    position: relative;
    height: 0.4rem;
    z-index: 2;
    background: white;
    img{
      width: 0.3rem;
      height: 0.3rem;
      position: relative;
      top: 0.05rem;
      left: 0.05rem;
    }
    .sumPrice{
      font-size: 0.16rem;
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
