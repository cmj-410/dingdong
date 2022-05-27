<template>
  <div class="footer">
    <div class="item" @click="toHome()">
      <i class="iconfont">&#xe759;</i><span>首页</span>
    </div>
    <div class="item">
      <i class="iconfont">&#xe756;</i><span>真香</span>
    </div>
    <div class="item">
      <i class="iconfont" @click="toOrder()">&#xe76c;</i><span>订单</span>
    </div>
    <div class="item" @click="toMy()">
      <i class="iconfont">&#xe76f;</i><span>我的</span>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'footerView',
  setup () {
    const toHome = () => {
      router.push('/')
    }
    const toMy = () => {
      router.push('/person')
    }
    const toOrder = () => {
      router.push('/orderConfirm')
    }
    return { toHome, toMy, toOrder }
  }
})
</script>

<style lang="scss" scoped>
  .footer{
    height: 0.4rem;
    padding-top: 0.05rem;
    width: 100%;
    display: flex;
    background: lightgray;
    text-align: center;
    .item{
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
</style>
