<template>
  <div class="wrapper">
    <img :src="shopInfo.imageUrl" class="leftimg">
    <div class="content">
      <h3>{{shopInfo.name}}</h3>
      <div class="content__middle">
        <span>销量{{shopInfo.sales}}</span>
        <span>起送￥{{shopInfo.expressLimit}}</span>
        <span>配送￥{{shopInfo.expressPrice}}</span>
      </div>
      <div class="slogan"><span>{{shopInfo.slogan}}</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'homeShop',
  props: ['shopInfo']
  // setup () {
  //   console.log(shopInfo)
  // return { }
  // }
})
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  border: solid 1px black;
  border-radius: 0.1rem;
  padding: 0.05rem;
  .leftimg{
    width: 1rem;
    height: 1rem;
  }
  .content{
    flex: 1;
    height: 1rem;
    padding: 0.03rem;
    &__middle{
      display: flex;
      span{
        flex: 1;
        justify-content: flex-start;
      }
    }
  }
  .slogan{
    margin-top: 0.1rem;
    font: 0.12rem red;
    span{
      background-color: lightpink;
      border-radius: 10%;
    }
  }
}

</style>
