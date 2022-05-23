<template>
  <div class="wrapper">
    <img :src="itemIntro.imgUrl" class="leftimg">
    <div class="content">
      <h3>{{itemIntro.productName}}</h3>
      <div class="content__slogan"><span>{{itemIntro.slogan}}</span></div>
      <div class="content__description">{{itemIntro.productDescription}}</div>
      <div class="content__middle">
        <span>月售 {{itemIntro.sales}}</span>
        <span>好评 {{itemIntro.favorableRate}}%</span>
      </div>
      <div class="content__innerWrapper">
        <span class="price">￥{{itemIntro.price}}</span>
        <div class="right">
          <button @click="changeCartProductNum(-1)">-</button>
          <span class="count">{{cartList?.[shopId]?.[itemIntro.productId]?.number ?? 0}}</span>
          <button @click="changeCartProductNum(1)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import mystore from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'shopInduction',
  props: ['itemIntro', 'shopInfor'],
  setup (props) {
    const cartList = mystore.state.cartList
    const route = useRoute()
    const shopId = route.params.id
    // 这里没有使用utils中的函数.因为,如果是返回一个函数,
    // 就形成了闭包,mystore.commit其依赖的props.itemIntro中的属性不会更新
    // 而是使用之前的属性值,因此切换菜单项后,+1/-1仍对应着第一个菜单项的页面内容
    const changeCartProductNum = (num: number) => {
      const { productId, productName, price, imgUrl } = toRefs(props.itemIntro)
      const { name } = toRefs(props.shopInfor)
      mystore.commit('changeCartProductNum', {
        shopId: shopId,
        name: name.value,
        productId: productId.value,
        productName: productName.value,
        price: price.value,
        imgUrl: imgUrl.value,
        num: num
      })
    }

    return { cartList, shopId, changeCartProductNum }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: row;
  padding: 0.05rem;
  margin-bottom: 0.06rem;
  background: white;
  .leftimg{
    width: 1rem;
    height: 1rem;
  }
  .content{
    position: relative;
    flex: 1;
    height: 1rem;
    padding: 0.03rem;
    box-sizing: border-box;
    h3{
      margin: 0.05rem 0;
    }
    &__slogan{
    font: 0.12rem;
    color: gold;
    span{
      border-radius: 10%;
    }
    }
    &__description{
      overflow: hidden;
      text-overflow:ellipsis;
    }
    &__middle{
      display: flex;
      span{
        flex: 1;
        justify-content: flex-start;
      }
    }
    &__innerWrapper{
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      font: 0.2rem;
      .price{
        color: red;
        line-height: 0.2rem;
      }
      .right{
        text-align: center;
        button{
          box-sizing: border-box;
          height: 0.2rem;
          width: 0.2rem;
          border-radius: 50%;
          background: rgb(18, 184, 239);
          border: 1px solid rgb(5, 82, 131);
        }
        .count{
          display: inline-block;
          width: 0.2rem;
        }
      }
    }
  }
}

</style>
