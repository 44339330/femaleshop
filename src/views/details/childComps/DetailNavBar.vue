<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="back">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="nav-bar-center">
          <div class="nav-bar-item" :class="[currentIndex === index ? 'active' :'']" v-for="(item,index) in titles" @click="tabClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      // isActive: false,
      currentIndex: 0
    }
  },
  methods: {
    // 切换四个tab按钮
    tabClick(index) {
      this.currentIndex = index
    },
    // 返回上一级
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.back {
  text-align: center;
}
.back img{
  margin-top: 12px;
}
.nav-bar-center {
  display: flex;
  font-size: 13px;
  color: black;
  font-weight: normal;
}
.nav-bar-item {
  flex: 1;
}
.active {
  color: #FFC0CB;
}
</style>