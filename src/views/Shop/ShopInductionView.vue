<template>
  <div class="wrapper">
    <img :src="itemInduction.imgUrl" class="leftimg">
    <div class="content">
      <h3>{{itemInduction.productName}}</h3>
      <div class="content__slogan"><span>{{itemInduction.slogan}}</span></div>
      <div class="content__description">{{itemInduction.productDescription}}</div>
      <div class="content__middle">
        <span>月售 {{itemInduction.sales}}</span>
        <span>好评 {{itemInduction.favorableRate}}%</span>
      </div>
      <div class="content__innerWrapper">
        <span class="price">￥{{itemInduction.price}}</span>
        <div class="right">
          <button @click="minus()">-</button>
          <span class="count">{{count}}</span>
          <button @click="plus()">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import mystore from '@/store'
import { defineComponent, ref } from 'vue'

// 将商品信息发送到vuex的实现,不包括数量
// productId productName price imgUrl
const sendCommodity = (commodity: any) => {
  const { productId, productName, price, imgUrl } = commodity.value
  const msg = { productId, productName, price, imgUrl }
  return msg
}

// 发送商品的所有信息，包括数量
// count
const countComputeEffect = (count:{value: number}, sendCommodity: any, commodity: any) => {
  const common = (count:{value: number}) => {
    const msg = sendCommodity(commodity)
    msg.number = count.value
    mystore.commit('addCartList', msg)
  }

  const minus = () => {
    if (count.value > 0) {
      count.value--
    }
    common(count)
  }
  const plus = () => {
    if (count.value <= 99) {
      count.value++
    }
    common(count)
  }

  return { minus, plus }
}

export default defineComponent({
  name: 'shopInduction',
  props: ['itemInduction'],
  setup (props) {
    const count = ref(0)
    const commodity = ref(props.itemInduction)
    const { minus, plus } = countComputeEffect(count, sendCommodity, commodity)
    return { count, minus, plus }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: row;
  padding: 0.05rem;
  margin-bottom: 0.06rem;
  background: white;
  .leftimg{
    width: 1rem;
    height: 1rem;
  }
  .content{
    position: relative;
    flex: 1;
    height: 1rem;
    padding: 0.03rem;
    box-sizing: border-box;
    h3{
      margin: 0.05rem 0;
    }
    &__slogan{
    font: 0.12rem;
    color: gold;
    span{
      border-radius: 10%;
    }
    }
    &__description{
      overflow: hidden;
      text-overflow:ellipsis;
    }
    &__middle{
      display: flex;
      span{
        flex: 1;
        justify-content: flex-start;
      }
    }
    &__innerWrapper{
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font: 0.2rem;
      .price{
        color: red;
        line-height: 0.2rem;
      }
      .right{
        text-align: center;
        button{
          box-sizing: border-box;
          height: 0.2rem;
          width: 0.2rem;
          border-radius: 50%;
          background: rgb(18, 184, 239);
          border: 1px solid rgb(5, 82, 131);
        }
        .count{
          display: inline-block;
          width: 0.2rem;
        }
      }
    }
  }
}

</style>
