<template>
  <div class="wrapper">
    <homeHeader></homeHeader>
    <homeShopTotal/>
    <br/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import homeHeader from './HomeHeaderView.vue'
import homeShopTotal from './HomeShopTotalView.vue'

export default defineComponent({
  name: 'homeView',
  components: { homeHeader, homeShopTotal }
  // setup () {
  // }
})
</script>

<style lang="scss" scoped>
  .wrapper{
    margin: 0.1rem 0.1rem;
  }
</style>
