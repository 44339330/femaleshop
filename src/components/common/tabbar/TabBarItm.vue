<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      require: true
    },
    activeColor: {
      type: String,
      default: 'red',
      require: true
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
      // 从path取字符串，如果有相同字符串则返回index值，没有则返回-1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : { }
    }
  },
  methods: {
    // 跳转路由
    itemClick () {
      this.$router.replace(this.path) // this.path来自MainTabBar
    }
  }
}
</script>
<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /* .active {
    color: red;
  } */
</style>
