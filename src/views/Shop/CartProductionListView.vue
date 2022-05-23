<template>
  <div class="wrapper">
    <img :src="msg.imgUrl" class="leftImg">
    <div class="content">
      <div>{{msg.productName}}</div>
      <span class="content__price">￥{{msg.price}}</span>
    </div>
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
import { effectChangeCartProductNum } from '@/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cartProductionList',
  props: ['msg', 'shopInfor'],
  setup (props) {
    // 更改购物车中商品信息和数量
    const changeCartProductNum = effectChangeCartProductNum(props.msg, props.shopInfor)
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
    position: relative;
    padding: 0 0.05rem;
    &__price{
      color: red;
      font-size: 0.14rem;
      position: absolute;
      bottom: 0;
    }
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
