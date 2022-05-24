<template>
  <div class="wrapper">
    <div class="header">
      <span @click="goBack()">&lt;</span>
      <span>新增收货地址</span>
    </div>
    <div class="address">
      <div>
        <span>地址</span>
        <input type="text" placeholder="输入地址">
      </div>
      <div>
        <span>门牌号</span>
        <input type="text" placeholder="具体地址（门牌号）">
      </div>
    </div>
    <div class="person">
      <div>
        <span>收货人</span>
        <input type="text" placeholder="姓名">
      </div>
      <div>
        <span>手机号</span>
        <input type="text" placeholder="输入手机号">
      </div>
      <button>保存</button>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'newAddress',
  setup () {
    const goBack = () => {
      router.back()
    }
    return { goBack }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  background: lightgray;
  height: 100%;
  .header{
    position: relative;
    padding: 0.1rem;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.16rem;
    background: white;
    span:first-child{
      position: absolute;
      left: 0.1rem;
    }
  }
  .address,.person{
    background: white;
    border-radius: 0.05rem;
    margin: 0.1rem;
    padding-bottom: 0.1rem;
    div{
      display: flex;
      padding: 0.05rem;
      span{
        width: 0.5rem;
      }
      input{
        flex: 1;
        outline: none;
        border: none;
      }
    }
  }
  .person button{
    // 1.按钮80%父元素，右边20%空隙
    // 2.向右移动父元素的10%，即目前本身长度的12.5%
    width: calc(80%);
    transform: translateX(12.5%);
    margin-top: 0.1rem;
    line-height: 0.16rem;
    box-sizing: border-box;
    background: lightskyblue;
    border-radius: 0.05rem;
  }
}
</style>
