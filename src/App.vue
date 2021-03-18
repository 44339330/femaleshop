<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
  
</template>
<script>
import './assets/css/base.css'
import MainTabBar from '@/components/content/tabbar/MainTabBar'
export default {
  components: {
    MainTabBar
  }
}
</script>
<style>
</style>
