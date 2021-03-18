<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad" @click="toDetails">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.bus.$emit('loadImg')
    },
    toDetails() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>
<style scoped>
.goods-list-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goods-list-item img {
  width: 100%;
  border-radius: 6px;
  /* margin-left: -8px; */
}
.goods-info {
  position: absolute;
  left: 0;
  right: 0;
  font-size: 12px;
  bottom: 5px;
  text-align: center;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>