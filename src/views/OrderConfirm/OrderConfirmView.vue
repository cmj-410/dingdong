<template>
  <div class="wrapper">
    <div class="top">
      <button @click="urlBack()">后退</button>
      <span>确认订单</span>
    </div>
    <!-- 有订单的效果 -->
    <template v-if="hasOrder">
      <div class="address">
        <div class="address__content" @click="gotoAddress()">
          <div>
            <b>{{curPersonAdd.address}}</b>
            <span>&gt;</span>
          </div>
          <div>
            {{curPersonAdd.userName}} {{curPersonAdd.phone}}
          </div>
        </div>
        <div class="time">
          <span>立即送出</span>
          <span>大约{{purposeTime.curHour}}:{{purposeTime.curMinute}}到</span>
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
          <div class="shopSum">
            <span>小计￥</span><b>{{shopCostList[shopId[ind]]}}</b>
            </div>
        </div>
      </template>
      <div class="otherInfo">
        <div>
          <span>备注</span>
          <span>请填写口味偏好</span>
        </div>
      </div>
      <div class="bottom">
        <span>合计￥</span><b>{{sumCost}}</b>
        <button>提交订单</button>
      </div>
    </template>
    <!-- 没有订单的效果 -->
    <template v-if="!hasOrder">
      <div class="noOrder">
        <h2>还没有任何订单哦</h2>
        <h2>快去寻找好物下单吧</h2>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import mystore from '@/store'
import { IconfirmPro } from '@/type'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'orderConfirm',
  setup () {
    const hasOrder = computed(() => {
      let count = 0
      for (const shopid in mystore.state.countList) {
        const shopCount = mystore.state.countList[shopid]
        count += shopCount
      }
      if (count > 0) {
        return true
      }
      return false
    })
    const curPersonAdd = mystore.state.curPersonAdd
    const cartList = mystore.state.cartList
    // 获取当前时间
    const mydate = new Date()
    let curHour = mydate.getHours()
    let curMinute = mydate.getMinutes()
    // 送达需半小时
    if (curMinute > 30) {
      curMinute -= 30
      curHour += 1
    } else {
      curMinute += 30
    }
    const purposeTime = {
      curHour,
      curMinute
    }
    // 将vuex中的嵌套对象的数据结构转换为嵌套数组
    const arrayCartList = []
    // 商店名
    const shopName = []
    // 商店的id列表
    const shopId = []
    // 各商店的小计（消费）
    const shopCostList = mystore.state.sumList
    // 消费总和
    let sumCost = 0
    for (const i in shopCostList) {
      sumCost += shopCostList[i]
    }
    // 将vuex中嵌套对象的购物车数据结构改为嵌套数组的形式
    let shopind = 0
    for (const shopKey in cartList) {
      arrayCartList.push([] as IconfirmPro[])
      shopName.push(cartList[shopKey].name)
      shopId.push(shopKey)
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
    const gotoAddress = () => {
      router.push({ name: 'address' })
    }
    return {
      hasOrder,
      curPersonAdd,
      purposeTime,
      arrayCartList,
      shopName,
      shopId,
      sumCost,
      shopCostList,
      urlBack,
      gotoAddress
    }
  }
})
</script>

<style lang="scss" scoped>
  .wrapper{
    padding: 0.1rem 0.1rem;
    height: 100%;
    box-sizing: border-box;
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
      margin-bottom: 0.05rem;
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
        padding: 0.03rem 0;
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
      .shopSum{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        b{
          font-size: 0.18rem;
        }
      }
    }
    .otherInfo{
      background: white;
      border-radius: 0.05rem;
      padding: 0.05rem;
      margin-bottom: 0.05rem;
      div{
        display: flex;
        justify-content: space-between;
        line-height: 0.2rem;
        span:last-child{
          color: gray;
          &::after{
            content: '>';
            color: black;
            display: inline-block;
            padding-left: 0.05rem;
          }
        }
      }
    }
    .bottom{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.3rem;
      padding: 0.05rem 0.1rem;
      background: white;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      b{
        font-size: 0.18rem;
      }
      button{
        background: lightskyblue;
        color: white;
        border-radius: 0.3rem;
        margin-left: 0.1rem;
        border: none;
        width: 0.8rem;
        height: 0.3rem;
      }
    }
    .noOrder{
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
</style>
