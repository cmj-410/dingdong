<template>
  <div class="wrapper">
    <div class="header">
      <span @click="goHome()">&lt;</span>
      <span>选择收获地址</span>
      <span @click="goNewAddress()">新增地址</span>
    </div>
    <div class="inputWrapper">
      <input type="text" placeholder="输入收货地址">
    </div>
    <div class="bar"></div>
    <div class="addressList">
      <div class="title">收货地址</div>
      <template v-for="address of personInfo.address" :key="address">
        <div class="addressItem" @click="selectedCurAddress(address)">
          <div><b>{{address}}</b></div>
          <div>{{personInfo.userName}}   {{personInfo.phone}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import mystore from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'addressView',
  setup () {
    const goHome = () => {
      router.push('/')
    }
    const goNewAddress = () => {
      router.push('/newAddress')
    }
    const personInfo = JSON.parse(localStorage.getItem('account') as string)
    const selectedCurAddress = (address: string) => {
      mystore.commit('changeAddress', address)
      goHome()
    }
    return { goHome, goNewAddress, personInfo, selectedCurAddress }
  }
})
</script>

<style lang="scss" scoped>
  .wrapper{
    .header{
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      padding: 0.05rem 0.1rem;
      line-height: 0.3rem;
      span:nth-child(2){
        font-size: 0.16rem;
      }
    }
    .inputWrapper{
      margin: 0.05rem 0.1rem;
      background: lightgray;
      input{
        padding: 0 0.1rem;
        outline: none;
        line-height: 0.2rem;
        width: 100%;
        box-sizing: border-box;
        border-radius: 0.05rem;
      }
    }
    .bar{
      height: 0.05rem;
      background: lightgray;
    }
    .addressList{
      margin: 0.1rem 0;
      .title{
        margin: 0.05rem;
        color: gray;
      }
      .addressItem{
        padding: 0.1rem 0.2rem;
        border-bottom: solid 0.01rem lightgray;
        b{
          font-size: 0.14rem;
          line-height: 0.26rem;
        }
        div:nth-child(2){
          color: gray;
          line-height: 0.2rem;
        }
      }
    }

  }
</style>
