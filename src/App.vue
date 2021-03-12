<template>
  <div id="nav">
    <main-tab-bar></main-tab-bar>
  </div>
  <router-view/>
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
