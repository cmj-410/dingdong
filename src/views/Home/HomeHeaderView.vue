<template>
  <div class="wrapper">
    <div class="topline"><span id="address">某地址</span></div>
    <div class="inputfind">
      <input type="text" placeholder="输入内容"><button>搜索</button>
    </div>
    <img src="@/assets/banner.png" alt="banner">
    <div class="homeitems">
      <div class="homeitems__item">1</div>
      <div class="homeitems__item">2</div>
      <div class="homeitems__item">3</div>
      <div class="homeitems__item">4</div>
      <div class="homeitems__item">5</div>
      <div class="homeitems__item">6</div>
      <div class="homeitems__item">7</div>
      <div class="homeitems__item">8</div>
      <div class="homeitems__item">5</div>
      <div class="homeitems__item">6</div>
      <div class="homeitems__item">7</div>
      <div class="homeitems__item">8</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'homeHeader'
  // setup() {
  // },
})
</script>

<style lang = 'scss' scoped>
.wrapper{
  .topline{
    text-align: center;
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
    #address::after{
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      transform: translateY(50%);
      border: solid 0.05rem transparent;
      border-top-color: black;
    }
  }
  .inputfind{
    display: flex;
    input{
      flex: 1;
      height: 0.24rem;
      line-height: 0.24rem;
      border-radius: 0.12rem;
      padding: 0 0.1rem;
      box-sizing: border-box;
      margin-bottom: 0.1rem;
      margin-right: 0.02rem;
    }
    button{
      background: lightblue;
      border-radius: 0.12rem;
      width: 0.4rem;
      height: 0.24rem;
    }
  }
  img{
    width: 100%;
    height: 0.7rem;
    border-radius: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .homeitems{
    display: flex;
    flex-flow: wrap;
    &__item{
      width: 25%;
      height: 0.5rem;
      box-sizing: border-box;
      border: solid 1px;
    }
  }
}
</style>
