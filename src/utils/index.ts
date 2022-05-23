import mystore from '@/store'
import { IcartProInfo, IshopInfo } from '@/type'
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
// 更改购物车中的商品信息和数量的逻辑
// 1.在商家详情页的商店货品列表中有用到(那里无法引用这个函数,情况在那边说明)
// 2.在商家详情页的小购物车中有用到
export const effectChangeCartProductNum = (productInfo: IcartProInfo, shopInfor: IshopInfo) => {
  const route = useRoute()
  const shopId = route.params.id
  // 提供+1/-1的指示即可
  const changeCartProductNum = (num: number) => {
    const { productId, productName, price, imgUrl } = toRefs(productInfo)
    const { name } = toRefs(shopInfor)
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
  return changeCartProductNum
}
