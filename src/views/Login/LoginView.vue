<template>
  <div class="root">
    <img src="../../assets/login.png" class="loginfig">
    <div class="wrapper">
      <div>
        <input  v-model="account" id="account" required><label for="account">账号：</label>
      </div>
      <div>
        <input type="password" v-model="password" id="password" required><label for="password">密码：</label>
      </div>
      <div>
        <button @click="clickLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mypost } from '@/request'
import { Iloginres } from '@/type'
import router from '@/router'

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
    // 有token后就可以跳转到首页，首页再发送请求获取页面信息
    router.push({ name: 'home' })
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
    background: linear-gradient(lightgray, rgb(217, 244, 158));
    .loginfig{
      width: 0.8rem;
      height: 0.8rem;
    }
  }
  .wrapper{
      div{
        margin-top: 0.15rem;
        // 为了label正常显示
        position: relative;
      }
      label{
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 0.15rem 0;
        transition: 0.5s;
        font-size: 0.16rem;
      }
      input{
        width: 2rem;
        height: 0.4rem;
        line-height: 0.3rem;
        box-sizing: border-box;
        outline: none;
        border: none;
        border-bottom: 1px solid;
        background: transparent;
      }
      input:focus ~ label,
      input:valid ~ label{
          bottom: 0.2rem;
          color: rgb(57, 194, 240);
          font-size: 0.12rem;
      }
      button{
        width: 100%;
        height: 0.3rem;
        background: lightskyblue;
        border: solid 1px lightskyblue;
        border-radius: 2%;
        font-size: 0.16rem;
        &:hover{
          border-radius: 0.05rem;
          box-shadow: 0 0 0.01rem #03e9f4,
                      0 0 0.05rem #03e9f4,
                      0 0 0.1rem #03e9f4,
                      0 0 0.2rem #03e9f4;
        }
      }

  }
</style>
