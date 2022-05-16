<template>
  <div class="wrapper">
    <template v-for="item in productIntro" :key="item.id">
      <shopInduction :itemInduction = "item"/>
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
  // setup () {
  //   console.log(productIntro)
  //   return { homeInfo }
  // }
})
</script>

<style lang = 'scss' scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>
