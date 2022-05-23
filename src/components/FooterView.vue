<template>
  <div class="footer">
    <div class="item">首页</div>
    <div class="item">真香</div>
    <div class="item">订单</div>
    <div class="item">我的</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'footerView'
  // setup() {

  // },
})
</script>

<style lang="scss" scoped>
  .footer{
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100%;
    display: flex;
    background: lightgray;
    text-align: center;
    .item{
      flex: 1;
    }
  }
</style>
