<template>
  <div id="home">
    <nav-bar>
      <template v-slot:center>购物车</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>
<script>
import { getHomeMultiData } from '@/network/home'
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #FFC0CB;
  font-size: 16px;
  color: #F8F8FF;
  font-weight: 600;
}

</style>
