<template>
  <div class="wrapper">
    <template v-for="item of productIntro" :key="item.id">
      <shopInduction :itemIntro = "item"/>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import shopInduction from './ShopInductionView.vue'

export default defineComponent({
  name: 'shopTotalInduction',
  components: { shopInduction },
  props: ['productIntro']
  // setup (prpos) {
  // }
})
</script>

<style lang = 'scss' scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>
