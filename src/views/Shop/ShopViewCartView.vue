<template>
  <div class="wrapper">
    <div class="orderList" :hidden = 'ishidden'>
      <template v-for="item of totalCart" :key="item.productId">
        <cartProductionList :msg = 'item'/>
      </template>
    </div>
    <div class="footerContent" @click="changeOpen()" >
      <img src=""><span class="count">{{sumNumber}}</span>
      <span>￥{{sumCost}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import mystore from '@/store'
import { computed, defineComponent, ref } from 'vue'
import cartProductionList from './CartProductionListView.vue'

export default defineComponent({
  name: 'shopViewCart',
  components: { cartProductionList },
  setup () {
    // 默认关闭状态
    const ishidden = ref(true)
    const canOpen = computed(() => {
      return mystore.state.sumCost > 0
    })
    const changeOpen = () => {
      // 只有选中了商品才能打开
      if (!canOpen.value) {
        ishidden.value = true
      } else {
        // 此外可以任意打开和关闭
        ishidden.value = !ishidden.value
      }
    }
    const sumCost = computed(() => {
      return mystore.state.sumCost
    })
    const sumNumber = computed(() => {
      return mystore.state.sumNumber
    })
    const totalCart = ref(mystore.state.cartList)
    return { ishidden, changeOpen, sumCost, sumNumber, totalCart }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  .footerContent{
    height: 0.4rem;
    background: lightskyblue;
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
  }
}
</style>
