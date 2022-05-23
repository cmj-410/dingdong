<template>
  <div class="wrapper">
    <homeHeader></homeHeader>
    <homeShopTotal/>
    <br/>
    <br/>
    <div class="footer">
      <footerView/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import homeHeader from './HomeHeaderView.vue'
import homeShopTotal from './HomeShopTotalView.vue'
import footerView from '@/components/FooterView.vue'

export default defineComponent({
  name: 'homeView',
  components: { homeHeader, homeShopTotal, footerView }
  // setup () {
  // }
})
</script>

<style lang="scss" scoped>
  .wrapper{
    margin: 0.1rem 0.1rem;
    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
