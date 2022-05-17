<template>
  <div class="wrapper">
    <div class="orderList" :hidden = 'ishidden'>212</div>
    <div class="footerContent" @click="changeOpen()" >
      <img src=""><span class="count">{{sumNumber}}</span>
      <span>￥{{sumCost}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import mystore from '@/store'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'shopViewCart',
  props: ['isOpen'],
  setup (props) {
    const ishidden = ref(props.isOpen)
    ishidden.value = !ishidden.value
    const changeOpen = () => {
      ishidden.value = !ishidden.value
    }
    const sumCost = computed(() => {
      return mystore.state.sumCost
    })
    const sumNumber = computed(() => {
      return mystore.state.sumNumber
    })
    return { ishidden, changeOpen, sumCost, sumNumber }
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
