<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :swiperImg="swiperImg"></detail-swiper>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import { getDetailData } from '@/network/detail.js'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      swiperImg: []
    }
  },
  created() {
    this.iid = this.$route.params.iid
    console.log(this.iid);
    // 网络请求拿数据
    this.getDetailData(this.iid)
  },
  methods: {
    getDetailData(iid) {
      getDetailData(iid).then(res => {
        // 拿完数据再删
        console.log(res);
        this.swiperImg = res.result.itemInfo.topImages
      })
    }
  }
}
</script>
<style scoped>

</style>