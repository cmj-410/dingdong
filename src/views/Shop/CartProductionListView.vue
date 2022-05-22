<template>
  <div class="wrapper">
    <img :src="msg.imgUrl" class="leftImg">
    <div class="content">{{msg.productName}} --- {{msg.price}}</div>
    <div class="rightPart">
      <div>
        <button @click = "changeCartProductNum(-1)">-</button>
        <span>{{msg.number}}</span>
        <button @click = "changeCartProductNum(1)">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import mystore from '@/store'
import { defineComponent, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'cartProductionList',
  props: ['msg'],
  setup (props) {
    const route = useRoute()
    const shopId = route.params.id
    // 更改购物车
    const changeCartProductNum = (num: number) => {
      const { productId, productName, price, imgUrl } = toRefs(props.msg)
      mystore.commit('changeCartProductNum', {
        shopId: shopId,
        productId: productId.value,
        productName: productName.value,
        price: price.value,
        imgUrl: imgUrl.value,
        num: num
      })
    }
    return { changeCartProductNum }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-flow: row wrap;
  background: white;
  position: relative;
  padding: 0.03rem;
  img{
    width: 0.5rem;
    height: 0.5rem;
  }
  .content{
    flex: 1;
  }
  .rightPart{
    width: 0.6rem;
    position: relative;
    div{
      position: absolute;
      bottom: 0;
    }
    button{
      box-sizing: border-box;
      height: 0.2rem;
      width: 0.2rem;
      border-radius: 50%;
      background: rgb(18, 184, 239);
      border: 1px solid rgb(5, 82, 131);
    }
    span{
      display: inline-block;
      width: 0.2rem;
      text-align: center;
    }
  }
}
</style>
