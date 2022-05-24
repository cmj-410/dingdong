<template>
  <div class="wrapper">
    <div class="top">
      <b>{{account.userName}} {{(account.phone + '').slice(0, 3)}}****{{(account.phone + '').slice(7)}}</b>
      <div>
        <i class="iconfont">&#xe767;</i>
        <i class="iconfont">&#xe75c;</i>
      </div>
    </div>
    <div class="redBag">
      <span>还有<b>5</b>张红包，<b>24</b>天过期</span>
      <button>立即使用</button>
    </div>
    <div class="collection">
      <span>我的收藏</span>
    </div>
    <div class="footer">

    </div>
    <footerView/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import footerView from '@/components/FooterView.vue'

export default defineComponent({
  name: 'personView',
  components: { footerView },
  setup () {
    const account = JSON.parse(localStorage.getItem('account') as string)
    return { account }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 0 0.1rem;
  height: 100%;
  background: #eee;
  .top{
    display: flex;
    justify-content: space-between;
    line-height: 0.4rem;
    b{
      font-size: 0.18rem;
    }
    i{
      font-size: 0.2rem;
      margin-left: 0.1rem;
    }
  }
  .redBag{
    background: lightyellow;
    border: 2px solid yellow;
    border-radius: 0.05rem;
    height: 0.4rem;
    padding: 0.05rem;
    font-size: 0.14rem;
    line-height: 0.4rem;
    margin-bottom: 0.1rem;
    display: flex;
    justify-content: space-between;
    b{
      color: red;
    }
    button{
      color: white;
      border: none;
      border-radius: 0.05rem;
      height: 0.25rem;
      align-self: center;
      background: linear-gradient(to right, rgb(231, 103, 103), red);
    }
  }
  .collection{
    background: white;
    padding: 0.1rem;
    font-size: 0.14rem;
    border-radius: 0.05rem;
    height: 0.8rem;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
