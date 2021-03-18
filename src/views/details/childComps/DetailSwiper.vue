<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item class="swiper-item" v-for="item in swiperImg">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
      swiperImg: {
        type: Array,
        default() {
          return []
        }
      }
    }
}
</script>
<style scoped>
.swiper-item {
  height: 200px;
  overflow: hidden;
}
</style>