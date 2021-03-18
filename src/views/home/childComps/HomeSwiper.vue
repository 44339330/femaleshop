<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper , SwiperItem} from '@/components/common/swiper/index'
export default {
  components:{
    Swiper, 
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    // 加载图片
    imgLoad() {
      if(!this.load) {
        this.$emit('loadSwiperImg')
        this.load = true
      }
    }
  }
}
</script>
<style scoped>

</style>