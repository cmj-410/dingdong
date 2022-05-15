<template>
  <div class="wrapper">
    <homeHeader></homeHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import mystore from '../../store'
import homeHeader from './HomeHeaderView.vue'

export default defineComponent({
  components: { homeHeader },
  setup () {
    // console.log(mystore.state)
    // const { clickLogin } = loginEffect('', '')
    // clickLogin()
    // console.log(Object.keys(mystore.state).length === 0)
    // return { homeInfo: mystore.state.homeInfo }

  }
})
</script>

<style lang = 'scss' scoped>
  .wrapper{
    margin: 0.1rem 0.1rem;
  }
</style>
