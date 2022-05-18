<template>
  <div class="wrapper">
    <img :src="imgUrl" class="leftImg">
    <div class="content">{{productName}} --- {{price}}</div>
    <div class="rightPart">
      <div>
        <button>-</button>
        <span>{{number}}</span>
        <button>+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'cartProductionList',
  props: ['msg'],
  setup (props) {
    const { productName, price, imgUrl, number } = toRefs(props.msg)
    return { productName, price, imgUrl, number }
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
