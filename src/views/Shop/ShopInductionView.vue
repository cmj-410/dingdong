<template>
  <div class="wrapper">
      <img src="" class="leftimg">
      <div class="content">
        <h3>{{itemInduction.productName}}</h3>
        <div class="slogan"><span>{{itemInduction.slogan}}</span></div>
        <div>{{itemInduction.productDescription}}</div>
        <div class="content__middle">
          <span>月售{{itemInduction.sales}}</span>
          <span>好评{{itemInduction.favorableRate}}</span>
        </div>
        <div>
          {{itemInduction.price}}
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'shopInduction',
  props: ['itemInduction']
  // setup() {
  // },
})
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  border: solid 1px black;
  border-radius: 0.1rem;
  padding: 0.05rem;
  margin-bottom: 0.06rem;
  background: white;
  .leftimg{
    width: 1rem;
    height: 1rem;
  }
  .content{
    flex: 1;
    height: 1rem;
    padding: 0.03rem;
    box-sizing: border-box;
    h3{
      margin: 0.05rem 0;
    }
    &__middle{
      display: flex;
      span{
        flex: 1;
        justify-content: flex-start;
      }
    }
  }
  .slogan{
    font: 0.12rem;
    color: gold;
    span{
      border-radius: 10%;
    }
  }
}

</style>
