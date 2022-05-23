<template>
  <div class="wrapper">
    <router-link v-for="item of productIntro"
      :key="item.id"
      :to="`#`"
    >
      <shopInduction :itemIntro = "item" :shopInfor = 'shopInfor'/>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import shopInduction from './ShopInductionView.vue'

export default defineComponent({
  name: 'shopTotalInduction',
  components: { shopInduction },
  props: ['productIntro', 'shopInfor']
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
