<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control class="tab-control1" :titles="titles" @tabClick="tabClick" v-show="isTop" ref="tabControl2"></tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullUpLoad="loadMore">
      <home-swiper :banners="banners" @loadSwiperImg="SwiperItemLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl1"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>

import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'

import { debounce } from '@/common/utils/debounce'

import { getHomeMultiData , getHomeData} from '@/network/home'
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行','新款','精选'],
      EnTitles:['pop','new','sell'],
      goods:{
        pop:{ page:0, list:[]},
        new:{ page:0, list:[]},
        sell:{ page:0, list:[]}
      },
      currentControl:'pop',
      isShowBackTop : false,
      tabOffsetTop: 0,
      isTop: false,
      saveY: 0
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultiData()

    // 2.请求商品数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted() {
    // 3.监听item中图片加载完成
    // 1)vue2.0草根法
    // const refresh = debounce(this.$refs.scroll.refresh,100)
    // setTimeout(() => {
    //   refresh()
    // }, 1000)
    // 2)vue3.0实用法
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.bus.$on('loadImg',() => {
     refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentControl].list
    }
  },
  methods: {
    /**  事件监听相关方法*/
    tabClick(index) {
      this.currentControl = this.EnTitles[index]
      // switch(index){ 
      //   case 0:
      //       this.currentControl = 'pop'
      //       break;
      //   case 1:
      //       this.currentControl = 'new'
      //       break;
      //   case 2:
      //       this.currentControl = 'sell'
      //       break;
      // }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 显示backtop
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
      // console.log(-position.y);
      this.isTop = (-position.y) > this.tabOffsetTop
      // console.log(this.isTop);
      
    },
    // 上拉加载数据
    loadMore() {
      this.getHomeData(this.currentControl)
    },
    SwiperItemLoad() {
      // 获取tab-control吸顶的高度
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    },
    /**  网络请求相关方法*/
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1
      getHomeData(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: #FFC0CB;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
.tab-control1 {
  position: relative;
  top: 43px;
  z-index: 9;
}
</style>
