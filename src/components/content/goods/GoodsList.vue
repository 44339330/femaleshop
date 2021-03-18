<template>
  <div class="goods-list">
    <goods-list-item 
      v-for="item in goodsList" 
      :key="item"
      :goodsItem="item"
      
      >
    </goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 4px;
}
</style>