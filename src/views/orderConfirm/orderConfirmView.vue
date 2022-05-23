<template>
  <div class="wrapper">
    <div class="top">
      <button @click="urlBack()">后退</button>
      <span>确认订单</span>
    </div>
    <div class="address">
      <div class="address__content">
        <div>
          <b>学校</b>
          <span>&gt;</span>
        </div>
        <div>
          张三 135886749
        </div>
      </div>
      <div class="time">
        <span>立即送出</span>
        <span>大约13:21到</span>
      </div>
      <div class="payWay">
        <span>支付方式</span>
        <span>支付宝</span>
      </div>
    </div>
    <template v-for="(shopItem, ind) of arrayCartList" :key="shopItem">
      <div class="orderContent">
        <div class="shopName">{{shopName[ind]}}</div>
        <template v-for="productItem of shopItem" :key="productItem">
          <div class="productItem">
            <img :src="productItem.imgUrl">
            <div class="content">
              <div class="productName">{{productItem.productName}}</div>
              <div class="number">&times;{{productItem.number}}</div>
            </div>
            <span>
              <b>￥{{productItem.price}}</b>
            </span>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import mystore from '@/store'
import { IconfirmPro } from '@/type'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'orderConfirm',
  setup () {
    const cartList = mystore.state.cartList
    // 将vuex中的嵌套对象的数据结构转换为嵌套数组
    const arrayCartList = []
    // 商店名
    const shopName = []
    let shopind = 0
    for (const shopKey in cartList) {
      arrayCartList.push([] as IconfirmPro[])
      shopName.push(cartList[shopKey].name)
      for (const productKey in cartList[shopKey]) {
        if (productKey === 'name') {
          continue
        }
        const productInfo = {
          imgUrl: cartList[shopKey][productKey].imgUrl,
          productName: cartList[shopKey][productKey].productName,
          price: cartList[shopKey][productKey].price,
          number: cartList[shopKey][productKey].number
        }
        arrayCartList[shopind].push(productInfo)
      }
      shopind++
    }
    const urlBack = () => {
      router.back()
    }
    return { arrayCartList, shopName, urlBack }
  }
})
</script>

<style lang="scss" scoped>
  .wrapper{
    padding: 0.1rem 0.1rem;
    height: 100%;
    background: linear-gradient(lightskyblue, lightgray);
    .top{
      text-align: center;
      margin-bottom: 0.1rem;
      button{
        position: absolute;
        left: 0.05rem;
        border: none;
        background: transparent;
      }
      span{
        font-size: 0.16rem;
      }
    }
    .address{
      background: white;
      border-radius: 0.05rem;
      padding: 0.05rem;
      margin-bottom: 0.1rem;
      &__content{
        margin-bottom: 0.12rem;
        div:first-child{
          display: flex;
          justify-content: space-between;
          font-size: 0.18rem;
          margin-bottom: 0.1rem;
        }
        div:last-child{
          color: gray;
        }
      }
      .time,.payWay{
        display: flex;
        justify-content: space-between;
        line-height: 0.2rem;
        span:last-child{
          color: lightskyblue;
          &::after{
            content: '>';
            color: black;
            display: inline-block;
            padding-left: 0.05rem;
          }
        }
      }
    }
    .orderContent{
      background: white;
      border-radius: 0.05rem;
      padding: 0.05rem;
      margin-bottom: 0.05rem;
      .shopName{
        font: 0.14rem;
        color: gray;
        padding: 0 0.03rem;
        line-height: 0.2rem;
      }
      .productItem{
        display: flex;
        margin-bottom: 0.03rem;
        img{
          display: inline-block;
          width: 0.4rem;
          height: 0.4rem;
        }
        .content{
          flex: 1;
          padding: 0 0.03rem;
          .productName{
            font-size: 0.14rem;
            margin-bottom: 0.06rem;
          }
          .number{
            color: gray;
          }
        }
        .span,b{
          line-height: 0.4rem;
        }
      }
    }
  }
</style>
