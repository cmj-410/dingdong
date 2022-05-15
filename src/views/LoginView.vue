<template>
  <div class="root">
    <img src="../assets/login.png" class="loginfig">
    <div class="wrapper">
      <div>
        <span>账号：</span><input  v-model="account">
      </div>
      <div>
        <span>密码：</span><input type="password" v-model="password">
      </div>
      <div>
        <button @click="clickLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mypost } from '../request'
import store from '@/store'
import { Iloginres } from '@/type'

export const loginEffect = (account: string, password: string) => {
  // 点击登录
  async function clickLogin () {
    const bodymsg = { account, password }
    try {
      const response = await mypost('/user/login', bodymsg)
      let res
      if (response.ok) {
        res = await response.json()
        if (res.errno === 0) {
          // 执行后续获取首页信息，以及跳转工作
          loginthen(res)
        }
      } else {
        alert('服务器响应失败')
      }
    } catch {
      alert('请求失败')
    }
  }
  // 登录之后，存储token，记录登录状态，并请求首页信息
  function loginthen (res: Iloginres) {
    const token = res.token
    localStorage.setItem('token', token)
    store.dispatch('getHomeInfo')
  }
  return { clickLogin }
}

export default defineComponent({
  name: 'LoginView',
  setup () {
    const account = ref('')
    const password = ref('')
    const { clickLogin } = loginEffect(account.value, password.value)
    return { account, password, clickLogin }
  }
})
</script>

<style lang="scss" scoped>
  .root{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightgray;
    .loginfig{
      width: 0.8rem;
      height: 0.8rem;
    }
  }
  .wrapper{
      div{
        margin-top: 0.15rem;
      }
      span{
        height: 0.4rem;
        line-height: 0.4rem;
        width: 0.5rem;
        font-size: 0.16rem;
      }
      input{
        width: 2rem;
        height: 0.4rem;
        line-height: 0.3rem;
        padding: 0 0.1rem;
        box-sizing: border-box;
      }
      button{
        width: 100%;
        height: 0.3rem;
        background: lightskyblue;
        border: solid 1px lightskyblue;
        border-radius: 2%;
        font-size: 0.16rem;
        &:active{
          background: lightcoral;
          border: solid 1px lightcoral;
        }
      }

  }
</style>
